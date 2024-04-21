import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { Resend } from 'resend';

// const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request, res: NextApiResponse) {
    const srcEmail = process.env.SRC_EMAIL;
    const dstEmail = process.env.DST_EMAIL;
    const pword = process.env.EMAIL_PWORD;

    const { subject, fromEmail, message } = await req.json() as { subject: string, fromEmail: string, message: string };
    if (!subject && fromEmail && message) {
        return new Response('Could not send email', { status: 500 });
    }


    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: srcEmail,
            pass: pword
        }
    });

    // Message object
    const email = {
        from: srcEmail,
        to: dstEmail,
        subject: subject,
        text: `Message from ${fromEmail}\n ${message}`
    };

    // Send email
    transporter.sendMail(email, (error, info) => {
        if (error) {
            return new Response('Error sending email', { status: 500 });
        }
    });

    return new Response('Email sent', { status: 200 });
};
