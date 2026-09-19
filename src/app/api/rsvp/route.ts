import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const googleScriptUrl =
      process.env.GOOGLE_SCRIPT_URL ||
      "https://script.google.com/macros/s/AKfycbyUfg717RaICur8v89mJm-8V_G7o86K3CtFqLF0yydkqSCOVZdFqykAj6Kd22EqJFsLrw/exec";

    const payload = {
      timestamp: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
      fullName: body.fullName || "",
      attending: body.attending === "yes" ? "Joyfully Accept" : "Regretfully Decline",
      guestCount: body.attending === "yes" ? body.guestCount || "1" : "0",
      events: Array.isArray(body.events) ? body.events.join(", ") : "",
      message: body.message || "",
    };

    console.log("Posting RSVP payload to Google Sheets:", payload);

    const googleResponse = await fetch(googleScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const resultText = await googleResponse.text();
    console.log("Google Apps Script response:", resultText);

    if (!googleResponse.ok) {
      throw new Error(`Google Apps Script responded with ${googleResponse.status}`);
    }

    return NextResponse.json({ success: true, message: "RSVP submitted successfully!" });
  } catch (error) {
    console.error("API RSVP Error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to process RSVP request" },
      { status: 500 }
    );
  }
}
