import { useEffect, useMemo, useState } from "react";

function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const texts = useMemo(
    () => [
      "Desarrollador Web",
      "Diseñador Web",
      "React Developer",
      "Angular Developer",
      "Fullstack Developer",
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTypingPaused, setIsTypingPaused] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseBeforeDelete = 1500;
    const pauseBeforeStart = 1500;

    const type = () => {
      if (isTypingPaused) {
        setTimeout(() => setIsTypingPaused(false), pauseBeforeStart);
        return;
      }

      if (!isDeleting && charIndex === texts[index].length) {
        setTimeout(() => setIsDeleting(true), pauseBeforeDelete);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
        setIsTypingPaused(true);
      } else {
        setDisplayedText((prev) =>
          isDeleting
            ? prev.substring(0, prev.length - 1)
            : texts[index].substring(0, charIndex + 1)
        );
        setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      }
    };

    const typingTimeout = setTimeout(type, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, index, isTypingPaused, texts]);

  useEffect(() => {
    const cursorBlinking = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorBlinking);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section className="home" id="home">
      <div className="home-img">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-df44c.appspot.com/o/img1.jpg?alt=media&token=ff67a361-1631-4ef2-89ec-44457e8d350d"
          alt=""
        />
      </div>
      <div className="home-content">
        <h1>
          Hola, soy <span>Luis Ángel</span>
        </h1>
        <h3>
          Soy un <span>{displayedText}</span>
          <span className={`cursor ${cursorVisible ? "" : "hidden"}`}>|</span>
        </h3>
        <p>
          Soy un desarrollador frontend de 24 años con experiencia en frameworks
          como React, Angular y Vue, utilizando TypeScript para desarrollar
          aplicaciones web robustas y escalables. Me apasiona la creación de
          interfaces de usuario eficientes y estoy motivado para contribuir a
          proyectos innovadores mientras continúo desarrollándome
          profesionalmente.
        </p>

        <div className="social-icon">
          <a href="https://www.linkedin.com/in/devjsluis/" target="_BLANK">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="https://github.com/devjsluis" target="_BLANK">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://twitter.com/luisangelboy" target="_BLANK">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="https://www.instagram.com/luisangelboy/" target="_BLANK">
            <i className="fa-brands fa-instagram"></i>
          </a>
        </div>

        <a href="#" className="btn" onClick={openModal}>
          Contrátame
        </a>
      </div>

      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>¿Deseas contratarme?</h2>
            <p>
              Si en verdad deseas contratarme, mándame un email a:{" "}
              <a href="mailto:devjsluis@gmail.com">devjsluis@gmail.com</a>
            </p>
            <button onClick={closeModal}>Cerrar</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Home;
