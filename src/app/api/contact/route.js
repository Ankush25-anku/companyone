import nodemailer from "nodemailer";

export async function POST(req) {
  const body = await req.json();

  const { Name, Company, "E-mail": email, Phone, Message } = body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "ankushshetty528@gmail.com", // 🔥 your email
        pass: "louyqoljgvopykle", // 🔥 app password (NOT normal password)
      },
    });

    await transporter.sendMail({
      from: email,
      to: "ankushshetty528@gmail.com", // where you receive
      subject: "New Contact Form Submission",
      html: `
        <h3>New Message</h3>
        <p><b>Name:</b> ${Name}</p>
        <p><b>Company:</b> ${Company}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${Phone}</p>
        <p><b>Message:</b> ${Message}</p>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ success: false, error });
  }
}
