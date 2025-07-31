import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { message } = await req.json();

  if (!message) {
    return NextResponse.json({ error: "Message is required" }, { status: 400 });
  }

  try {
    const emailResponse = await resend.emails.send({
      from: "Portfolio Contact Form <onboarding@resend.dev>",
      to: process.env.RESEND_TO_EMAIL!,
      subject: "New Contact Form Message",
      text: message,
    });

    return NextResponse.json({ success: true, emailResponse });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}

