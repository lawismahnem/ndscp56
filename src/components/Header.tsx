import Login from "./Login/Login";

function Header() {
  return (
    <div className="Header-container">
      <div className="Header-Menu">
        <div className="Header-Menu-Container">
          <div className="Header-logo">NDSCP</div>
          <ul className="Menu">
            <li>
              <a className="active" href="/">
                Home
              </a>
            </li>
            <li>
              <a href="/news">News</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
          </ul>
        </div>
        <div className="Header-auth">
          <Login />
        </div>
      </div>
    </div>
  );
}

export default Header;
