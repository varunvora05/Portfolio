import './contact.css'

const Contact = () => {
    return (
      <div className="contact">
        <h2>Contact Me</h2>
        <form>
          <input type="text" placeholder="First Name" required />
          <input type="text" placeholder="Last Name" required />
          <input type="email" placeholder="Contact Details" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    );
  };
  
  export default Contact;