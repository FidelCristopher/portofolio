import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://github-contributions-api.jogruber.de/v4/FidelCristopher?y=last", {
      next: { revalidate: 60 } // revalidate every 60 seconds
    });
    if (!res.ok) throw new Error("Failed to fetch from contributions API");
    const data = await res.json();
    return NextResponse.json(data);
  } catch (err) {
    return NextResponse.json({ error: "Failed to fetch GitHub data" }, { status: 500 });
  }
}
