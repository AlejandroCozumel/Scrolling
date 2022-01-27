import "./App.css";
import './css/style.css';
import image1 from "./assets/zac-pro-case.jpg";
import image2 from "./assets/zac-pro-inside.png";

function App() {
  return (
    <bg-white>
      <header>Header</header>
      <css-pro>
        <css-title>Mac Pro</css-title>
        <css-case cursor>
          <img src={image1} alt="mac" />
        </css-case>
        <css-inside cursor>
          <img src={image2} alt="mac" />
        </css-inside>
      </css-pro>
    </bg-white>
  );
}

export default App;
