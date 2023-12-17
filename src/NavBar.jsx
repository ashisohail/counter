import "./NavBar.css";
import { useSelector, useDispatch } from "react-redux";
import { toggle } from "./redux/themeReducer";

function NavBar() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <header>
      <div className="logo">
        <a href="#">Ayesha Siddiqa</a>
      </div>
      <nav className="nav-container">
        <button onClick={() => dispatch(toggle())}>
          Day/Night {theme.theme === "light-theme" ? "☀️" : "🌙"}
        </button>
      </nav>
    </header>
  );
}

export default NavBar;
