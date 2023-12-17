import "./NavBar.css";

function NavBar() {
  return (
    <header>
      <div className="logo">
        <a href="#">Ayesha Siddiqa</a>
      </div>
      <nav className="nav-container">
        <div className="nav-bar">
          <a href="">Home</a>
          <a href="#">Projects</a>
          <a href="#">Skills</a>
          <a href="#">Contact</a>
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
