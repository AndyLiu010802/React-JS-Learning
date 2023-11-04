import reactImg from "../assets/react-core-concepts.png";
import "./Header.css";
const reactDescription = ["Fundamental", "Crucial", "Core"];

function genRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

export default function Header() {
  const randomIndex = genRandomNumber(reactDescription.length);
  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {randomIndex} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
