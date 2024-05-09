import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Fotter from "./Components/Fotter";

function App() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Fotter />
    </>
  );
}

export default App;
