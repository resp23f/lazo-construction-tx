import { Resend } from "resend";

async function verifyTurnstile(token: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  if (!secretKey) {
    console.error("TURNSTILE_SECRET_KEY is not configured");
    return false;
  }

  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: secretKey,
          response: token,
        }),
      }
    );

    const data = await response.json();
    return data.success === true;
  } catch (error) {
    console.error("Turnstile verification failed:", error);
    return false;
  }
}

export async function POST(request: Request) {
  const { name, email, phone, serviceType, message, turnstileToken } = await request.json();

  // Validate required fields
  if (!name || !email || !message) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  // Verify Turnstile token
  if (!turnstileToken) {
    return Response.json({ error: "Please complete the verification" }, { status: 400 });
  }

  const isValidToken = await verifyTurnstile(turnstileToken);
  if (!isValidToken) {
    return Response.json({ error: "Verification failed" }, { status: 400 });
  }

  // Check for API key
  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured");
    return Response.json({ error: "Email service not configured" }, { status: 500 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "LAZO Construction <noreply@lazoconstructiontx.com>",
      to: process.env.CONTACT_EMAIL || "info@lazoconstructiontx.com",
      subject: `New Contact Form Submission: ${serviceType || "General Inquiry"}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Service:</strong> ${serviceType || "Not specified"}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Failed to send email:", error);
    return Response.json({ error: "Failed to send message" }, { status: 500 });
  }
}
