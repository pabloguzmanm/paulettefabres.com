"use client";

import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const contactInfo = [
  {
    label: "Email",
    value: "contato@paulettefabres.com",
    href: "mailto:contato@paulettefabres.com",
  },
];

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/paulettefabres/",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    label: "Youtube",
    href: "https://www.youtube.com/@PauletteFabres/",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } else {
      alert("Hubo un error al enviar el mensaje. Intenta de nuevo.");
    }
  };

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navigation />

      <div className="pt-32 pb-24 px-6 md:px-12 flex-1">
        <div className="container mx-auto">
          <p className="text-primary font-mono text-xs tracking-widest mb-6">
            CONTACTO
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter mb-16">
            <span className="block text-primary">CONTÁCTAME</span>
          </h1>

          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block font-mono text-xs text-muted-foreground tracking-widest mb-2"
                  >
                    NOMBRE
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-mono text-xs text-muted-foreground tracking-widest mb-2"
                  >
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="Tu correo electrónico"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block font-mono text-xs text-muted-foreground tracking-widest mb-2"
                  >
                    ASUNTO
                  </label>
                  <input
                    type="text"
                    id="subject"
                    required
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-primary focus:outline-none transition-colors"
                    placeholder="Motivo de contacto"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block font-mono text-xs text-muted-foreground tracking-widest mb-2"
                  >
                    MENSAJE
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full bg-transparent border-b border-border py-3 text-foreground focus:border-primary focus:outline-none transition-colors resize-none"
                    placeholder="Cuéntanos más..."
                  />
                </div>
                <button
                  type="submit"
                  className="group flex items-center gap-4 px-8 py-5 bg-primary text-primary-foreground rounded-full font-semibold text-base hover:bg-foreground hover:text-background transition-colors duration-300"
                >
                  {submitted ? "¡Mensaje enviado!" : "Enviar mensaje"}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <div className="mb-12">
                <p className="font-mono text-xs text-primary tracking-widest mb-6">
                  DATOS DE CONTACTO
                </p>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <div key={info.label}>
                      <p className="text-sm text-muted-foreground mb-1">
                        {info.label}
                      </p>
                      <a
                        href={info.href}
                        className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {info.value}
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-12">
                <p className="font-mono text-xs text-primary tracking-widest mb-6">
                  UBICACIÓN
                </p>
                <p className="text-muted-foreground">Madrid</p>
              </div>

              <div>
                <p className="font-mono text-xs text-primary tracking-widest mb-6">
                  SOCIAL
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      aria-label={link.label}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-11 h-11 border border-border text-foreground hover:text-primary hover:border-primary transition-all duration-300"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
