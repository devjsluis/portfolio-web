import { useEffect, useState } from "react";

function Header() {
  const [activeLink, setActiveLink] = useState("");
  const updateActiveLink = () => {
    const sections = document.querySelectorAll("section");
    let currentSectionId = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        window.scrollY >= sectionTop - 50 &&
        window.scrollY < sectionTop + sectionHeight - 50
      ) {
        currentSectionId = section.getAttribute("id") || "";
      }
    });

    setActiveLink(currentSectionId);
  };

  useEffect(() => {
    window.addEventListener("scroll", updateActiveLink);
    return () => window.removeEventListener("scroll", updateActiveLink);
  }, []);

  const handleClick = (link: string) => {
    setActiveLink(link);
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          Luis Ángel
        </a>
        <i
          className={`fa-solid fa-bars ${isMenuOpen ? "bx-x" : ""}`}
          id="menu-icon"
          onClick={handleMenuToggle}
        ></i>
        <nav className={`navbar ${isMenuOpen ? "active" : ""}`}>
          <a
            href="#home"
            className={activeLink === "home" ? "active" : ""}
            onClick={() => handleClick("#home")}
          >
            Inicio
          </a>
          <a
            href="#services"
            className={activeLink === "services" ? "active" : ""}
            onClick={() => handleClick("#services")}
          >
            Servicios
          </a>
          <a
            href="#skills"
            className={activeLink === "skills" ? "active" : ""}
            onClick={() => handleClick("#skills")}
          >
            Habilidades
          </a>
          <a
            href="#experience"
            className={activeLink === "experience" ? "active" : ""}
            onClick={() => handleClick("#experience")}
          >
            Experiencia
          </a>
          <a
            href="#contact"
            className={activeLink === "contact" ? "active" : ""}
            onClick={() => handleClick("#contact")}
          >
            Contacto
          </a>
        </nav>
      </header>
    </>
  );
}

export default Header;
