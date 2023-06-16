import styles from "./ToggleSwitch.module.css";
import { useState } from "react";

const ToggleSwitch = ({ attribute }) => {
  const [isChecked, setIsCheked] = useState(false);

  const handleCheck = () => {
    setIsCheked(!isChecked);
    const newChecked = !isChecked;
    const routeAttribute = attribute === "Nível" ? "level" : "weight";
    if (newChecked) {
      fetch(`http://localhost:3333/${routeAttribute}TurnOn`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      fetch(`http://localhost:3333/${routeAttribute}TurnOff`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  };

  return (
    <div className={styles.toggleContainer}>
      <label
        className={
          isChecked ? styles.labelContainerOn : styles.labelContainerOff
        }
      >
        On
        <input
          type="checkbox"
          onClick={handleCheck}
          className={styles.inputContainer}
        />
        <span className={styles.spanContainer} />
        Off
      </label>
      <p>
        Ligar/desligar sensor de <strong>{attribute}</strong>
      </p>
    </div>
  );
};

export default ToggleSwitch;
