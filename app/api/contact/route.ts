import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Print to server console for verifiability
    console.log("=== Portfolio Contact Form Submission ===");
    console.log(`From: ${name} <${email}>`);
    console.log(`Subject: ${subject}`);
    console.log(`Message:\n${message}`);
    console.log("=========================================");

    // Returning success response. 
    return NextResponse.json(
      { message: "Message received successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
