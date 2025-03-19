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



    console.log(formData)

    return <>
        <form action="#" className="contact-form">
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
                    placeholder="Your Email"
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
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                />
            </fieldset>


            <fieldset>
                <legend>Message</legend>
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                />
            </fieldset>

            <button type="submit" className="cta-button " disabled={loading}>
                {loading ? 'Sending...' : 'Send'}
            </button>

            {responseMessage && <p className="text-center text-sm">{responseMessage}</p>}

        </form>

    </>
}