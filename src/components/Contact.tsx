import { FormEvent } from "react";

function Contact() {
  // Función para generar el enlace mailto
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const phone = (form.elements.namedItem("phone") as HTMLInputElement).value;
    const subject = (form.elements.namedItem("subject") as HTMLInputElement)
      .value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    // Crear el enlace mailto
    const mailtoLink = `mailto:devjsluis@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Nombre: ${name}\nCorreo Electrónico: ${email}\nNúmero de Teléfono: ${phone}\n\nMensaje:\n${message}`
    )}`;

    // Redirigir al enlace mailto
    window.location.href = mailtoLink;
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Con<span>tacto</span>
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input type="text" name="name" placeholder="Nombre" required />
          <input
            type="email"
            name="email"
            placeholder="Correo Electrónico"
            required
          />
          <input
            type="number"
            name="phone"
            placeholder="Número de Teléfono"
            required
          />
          <input type="text" name="subject" placeholder="Asunto" />
        </div>
        <textarea
          name="message"
          cols={30}
          rows={10}
          placeholder="Tu Mensaje"
          required
        ></textarea>
        <input type="submit" value={"Enviar Mensaje"} className="btn" />
      </form>
    </section>
  );
}

export default Contact;
