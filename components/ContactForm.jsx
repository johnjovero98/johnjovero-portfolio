'use client';

import { useState } from "react";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [loading, setLoading] = useState(false);
    const [responseMessage, setResponseMessage] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch('/api/send', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await res.json();
            if (result.success) {
                setResponseMessage('Email sent successfully!');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setResponseMessage(`Error: ${result.error}`);
            }
        } catch (error) {
            setResponseMessage('Failed to send message.');
        } finally {
            setLoading(false);
        }
    };
    
    return <>
        <form onSubmit={handleSubmit} className="contact-form">
            <h3 className="text-h5 font-bold mb-1">Contact Form</h3>

            <fieldset>
                <legend>Full Name</legend>
                <input
                    type="text"
                    name="name"
                    placeholder="John Jovero"
                    value={formData.name}
                    onChange={handleChange}
                    required
                />
            </fieldset>

            <fieldset>
                <legend>Email</legend>
                <input
                    type="email"
                    name="email"
                    placeholder="john@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
            </fieldset>

            <fieldset>
                <legend>Subject</legend>
                <input
                    type="text"
                    name="subject"
                    placeholder="What’s your inquiry about?"
                    value={formData.subject}
                    onChange={handleChange}
                />
            </fieldset>


            <fieldset>
                <legend>Message</legend>
                <textarea
                    maxLength={255}
                    name="message"
                    placeholder="Type your message here (max 255 characters)"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
                <span className="text-white text-small float-end">{formData.message.length}/255</span>
            </fieldset>

            <button type="submit" className="cta-button " disabled={loading}>
                {loading ? 'Sending...' : 'Send'}
            </button>

            {responseMessage && <p className="text-center text-sm text-white">{responseMessage}</p>}

        </form>

    </>
}