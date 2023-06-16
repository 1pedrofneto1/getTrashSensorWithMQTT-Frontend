import styles from "./App.module.css";
import OnlyView from "./components/OnlyView/OnlyView";
import trash from "./assets/trash.png";
import greenTrash from "./assets/greenTrash.png";
import orangeTrash from "./assets/orangeTrash.png";
import redTrash from "./assets/redTrash.png";
import levelBar from "./assets/levelBar.png";
import greenLevelBar from "./assets/greenLevelBar.png";
import orangeLevelBar from "./assets/orangeLevelBar.png";
import redLevelBar from "./assets/redLevelBar.png";
import { useState, useEffect } from "react";
import { FaFeatherAlt, FaWeightHanging } from "react-icons/fa";

function App() {
  const [trashImage, setTrashImage] = useState([trash]);
  const [levelBarImage, setLevelBarImage] = useState([levelBar]);
  const [valueWeight, setValueWeight] = useState("");
  const [valueLevel, setValueLevel] = useState("");

  const handleChange = (event) => {
    setValueWeight(event.target.value);
    setValueLevel(event.target.value);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      fetch("http://localhost:3333/weight", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setValueWeight(data.weight);
          const newWeight = data.weight;
          if (newWeight <= 0) {
            setLevelBarImage(levelBar);
            setValueWeight(0);
          } else if (newWeight <= 2) {
            setLevelBarImage(greenLevelBar);
          } else if (newWeight > 2 && newWeight < 4) {
            setLevelBarImage(orangeLevelBar);
          } else if (newWeight >= 4) {
            setLevelBarImage(redLevelBar);
          }
        })
        .catch((err) => console.log(err));
      fetch("http://localhost:3333/level", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          setValueLevel(data.level);
          const newLevel = data.level;
          if (newLevel <= 0) {
            setTrashImage(trash);
            setValueLevel(0);
          } else if (newLevel <= 10) {
            setTrashImage(greenTrash);
          } else if (newLevel > 10 && newLevel < 18) {
            setTrashImage(orangeTrash);
          } else if (newLevel >= 18) {
            setTrashImage(redTrash);
          }
        })
        .catch((err) => console.log(err));
    }, 1000);
    return () => clearInterval(intervalId);
  }, [valueLevel, valueWeight]);

  return (
    <div>
      <header>
        <h1>Lixeiros & Agregados</h1>
      </header>
      <div className={styles.container}>
        <div className={styles.weightContainer}>
          <FaWeightHanging />
          <img src={levelBarImage} alt="level bar" />
          <FaFeatherAlt />
        </div>
        <OnlyView
          type={"Peso"}
          valueWeightProp={valueWeight}
          handleChange={handleChange}
        />
        <OnlyView valueLevelProp={valueLevel} handleChange={handleChange} />
        <img src={trashImage} alt="trash" />
      </div>
      <footer>
        <h3>feat. Joás, Pedro, Léo, Eduardo e Charles</h3>
      </footer>
    </div>
  );
}

export default App;
