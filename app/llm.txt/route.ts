import { GET as getLlms } from "../llms.txt/route";

export const dynamic = "force-static";
export const revalidate = 3600;

export async function GET() {
  return getLlms();
}
