// lib/ContactForm.js
import { Resend } from 'resend';

export class ContactForm {
    constructor(name, email, subject, message) {
        this.name = name;
        this.email = email;
        this.subject = subject || 'New Contact Form Submission';
        this.message = message;
        this.resend = new Resend(process.env.RESEND_API_KEY);
    }



    // methods


    // validate the form plan include regex validation for input
    validate() {
        if (!this.email || !this.message) {
            return 'Email and message are required!';
        }
        return null;
    }



    // send the email using resend
    async send() {
        const validationError = this.validate();

        if (validationError) {
            return { success: false, error: validationError };
        }

        try {
            await this.resend.emails.send({
                from: 'John Jovero <onboarding@resend.dev>', // test domain
                to: ['john.jovero@outlook.com'], // send the message on this email
                subject: this.subject,
                text: `Name: ${this.name}\nEmail: ${this.email}\n\nMessage:\n${this.message}`,
            });

            return { success: true };
        } catch (error) {
            return { success: false, error: 'Failed to send email' };
        }
    }
}