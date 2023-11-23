function Header() {
  return (
    <div className="Header-container">
      <div className="Header-Menu">
        <div className="Header-logo">NDSCP</div>
        <ul className="Menu">
          <li>
            <a className="active" href="#home">
              Home
            </a>
          </li>
          <li>
            <a href="#news">News</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
