import { healthReport } from "../core/HealthReport";

export async function GET() {
  return Response.json({
    success: true,
    division: "Healthcare & Wellness",
    report: healthReport.generate(),
  });
}
