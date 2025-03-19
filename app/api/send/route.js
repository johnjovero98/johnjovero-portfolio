import { ContactForm } from '@/lib/ContactForm';

export async function POST(req) {
  try {
    const { name, email, subject, message } = await req.json();
    
    const contactForm = new ContactForm(name, email, subject, message);
    const response = await contactForm.send();

    if (response.success) {
      return Response.json({ success: true });
    } else {
      return Response.json({ error: response.error }, { status: 400 });
    }
  } catch (error) {
    return Response.json({ error: 'Server error' }, { status: 500 });
  }
}
