import { useState } from 'react';
import './contact.css';

const CONTACT_EMAIL = 'varunvora20@gmail.com';

const Contact = () => {
    const [status, setStatus] = useState({ type: 'idle', message: '' });

    const handleSubmit = async (event) => {
      event.preventDefault();
      setStatus({ type: 'loading', message: 'Sending your message...' });

      const form = event.currentTarget;
      const formData = new FormData(form);

      try {
        const response = await fetch(`https://formsubmit.co/ajax/${CONTACT_EMAIL}`, {
          method: 'POST',
          headers: {
            Accept: 'application/json',
          },
          body: formData,
        });

        if (!response.ok) {
          throw new Error('Message delivery failed');
        }

        form.reset();
        setStatus({
          type: 'success',
          message: 'Thanks! Your message has been sent successfully.',
        });
      } catch {
        setStatus({
          type: 'error',
          message: 'Your message could not be sent. Please try again shortly.',
        });
      }
    };

    return (
      <main className="contact">
        <h2>Contact Me</h2>
        <p className="contact-intro">
          Have a project or opportunity in mind? Send me a message.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="hidden" name="_subject" value="New portfolio contact message" />
          <input type="hidden" name="_template" value="table" />
          <input
            className="contact-honeypot"
            type="text"
            name="_honey"
            tabIndex="-1"
            autoComplete="off"
          />

          <div className="contact-name-fields">
            <label>
              First name
              <input type="text" name="firstName" autoComplete="given-name" required />
            </label>
            <label>
              Last name
              <input type="text" name="lastName" autoComplete="family-name" required />
            </label>
          </div>

          <label>
            Email address
            <input type="email" name="email" autoComplete="email" required />
          </label>

          <label>
            Your message
            <textarea name="message" rows="6" required />
          </label>

          <button type="submit" disabled={status.type === 'loading'}>
            {status.type === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
          {status.message && (
            <p className={`form-status ${status.type}`} role="status" aria-live="polite">
              {status.message}
            </p>
          )}
        </form>
      </main>
    );
  };
  
  export default Contact;
