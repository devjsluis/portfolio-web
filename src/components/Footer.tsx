function Footer() {
  return (
    <footer className="footer">
      <div className="social">
        <a href="https://www.linkedin.com/in/devjsluis/" target="_BLANK">
          <i className="fa-brands fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com/luisangelboy/" target="_BLANK">
          <i className="fa-brands fa-square-instagram"></i>
        </a>
        <a href="https://www.facebook.com/LAngelBoy/" target="_BLANK">
          <i className="fa-brands fa-facebook"></i>
        </a>
        <a href="https://twitter.com/luisangelboy" target="_BLANK">
          <i className="fa-brands fa-x-twitter"></i>
        </a>
      </div>
      <ul className="list">
        <li>
          <a href="#">FAQ</a>
        </li>
        <li>
          <a href="#">Service</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Privacy Policies</a>
        </li>
      </ul>
      <p className="copyright">© Dev JS Luis | Todos los derechos reservados</p>
    </footer>
  );
}

export default Footer;
