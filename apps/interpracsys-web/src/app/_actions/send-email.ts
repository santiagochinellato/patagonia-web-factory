'use server';

import nodemailer from 'nodemailer';

export async function sendEmail(prevState: any, formData: FormData) {
  const name = formData.get('name') as string;
  const lab = formData.get('lab') as string;
  const email = formData.get('email') as string;
  const message = formData.get('message') as string;

  if (!name || !email || !message) {
      return { success: false, message: 'Por favor completa todos los campos requeridos.' };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM || '"InterPracsys Form" <noreply@interpracsys.com>',
      to: 'info@interpracsys.com',
      subject: `Nueva consulta de ${name} - ${lab || 'Sin laboratorio'}`,
      text: `
        Nombre: ${name}
        Laboratorio: ${lab}
        Email: ${email}
        Mensaje: ${message}
      `,
      html: `
        <h3>Nueva consulta recibida</h3>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Laboratorio:</strong> ${lab}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return { success: true, message: 'Consulta enviada exitosamente.' };

  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, message: 'Error al enviar el correo. Por favor intenta nuevamente.' };
  }
}
