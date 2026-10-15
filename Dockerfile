# syntax=docker/dockerfile:1
FROM node:24-alpine AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# NEXT_PUBLIC_* values are inlined at build time.
ARG NEXT_PUBLIC_SITE_URL=https://www.onmogsoftsol.com
ARG NEXT_PUBLIC_UMAMI_SRC=
ARG NEXT_PUBLIC_UMAMI_WEBSITE_ID=
ENV NEXT_TELEMETRY_DISABLED=1 NEXT_PUBLIC_SITE_URL=$NEXT_PUBLIC_SITE_URL NEXT_PUBLIC_UMAMI_SRC=$NEXT_PUBLIC_UMAMI_SRC NEXT_PUBLIC_UMAMI_WEBSITE_ID=$NEXT_PUBLIC_UMAMI_WEBSITE_ID
RUN npm run build

FROM node:24-alpine
WORKDIR /app
ENV NODE_ENV=production PORT=3000 NEXT_TELEMETRY_DISABLED=1
COPY --from=build /app/package*.json ./
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/next.config.ts ./
USER node
EXPOSE 3000
# CMS_API_URL and CMS_API_KEY are read at runtime (careers pages and the apply route).
CMD ["npm", "start"]
