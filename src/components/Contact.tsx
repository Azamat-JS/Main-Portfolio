import React, { useRef, useState } from 'react';
import { Mail, MessageSquare, User, Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef<HTMLFormElement>(null); // ref for the form
  const [sending, setSending] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);

    if (form.current) {
      emailjs.sendForm(
        'service_ogol0oj',      // e.g. service_abc123
        'template_pj9kfgu',     // e.g. template_xyz789
        form.current,
        'KbmbuRiirsAF_Q22Y'       // e.g. public_def456
      )
      .then((result: any) => {
        console.log('Email successfully sent!', result.text);
        alert('Thank you! Your message has been sent.');
        setSending(false);
        form.current?.reset(); // clear the form
      }, (error: any) => {
        console.error('Error sending email:', error.text);
        alert('Oops! Something went wrong. Please try again later.');
        setSending(false);
      });
    } else {
      setSending(false);
      alert('Form reference not found.');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">
            Get In Touch
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Ready to work together? I'd love to hear from you.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form ref={form} onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-xl p-8 border border-slate-100">
            <div className="mb-6">
              <label htmlFor="name" className="block text-slate-700 font-semibold mb-2">
                <User className="h-5 w-5 inline mr-2" />
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"  // must match placeholder in EmailJS template
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="Your full name"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-slate-700 font-semibold mb-2">
                <Mail className="h-5 w-5 inline mr-2" />
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"  // must match placeholder
                required
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="mb-8">
              <label htmlFor="message" className="block text-slate-700 font-semibold mb-2">
                <MessageSquare className="h-5 w-5 inline mr-2" />
                Message
              </label>
              <textarea
                id="message"
                name="message"  // must match placeholder
                required
                rows={6}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 resize-none"
                placeholder="Tell me about your project or just say hello..."
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:bg-blue-700 flex items-center justify-center group transition-colors duration-300"
            >
              <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
              {sending ? 'Sending...' : 'Send Message'}
            </button>
          </form>

          <div className="mt-12 text-center">
            <div className="flex justify-center items-center space-x-6 text-slate-600">
              <div className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <span>azamat.abdullaev.d@gmail.com</span>
              </div>
            </div>
            <p className="mt-4 text-slate-500">
              I typically respond within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
