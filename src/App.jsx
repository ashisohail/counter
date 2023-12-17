import "./App.css";
import Counter from "./Counter";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";

function App() {
  const theme = useSelector((state) => state.theme);
  return (
    <>
      <NavBar />
      <div className={`counter ${theme.theme}`}>
        <Counter />
      </div>
    </>
  );
}

export default App;
