import styles from "./OnlyView.module.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch.js";

const OnlyView = ({ type, valueWeightProp, valueLevelProp, handleChange }) => {
  return (
    <div className={styles.container}>
      {type === "Peso" ? (
        <div>
          <h2>Peso</h2>
          <input value={valueWeightProp} onChange={handleChange} /> Kg
          <ToggleSwitch attribute="Peso" />
          <h4>Legenda:</h4>
          <p>
            {"Peso menor ou igual a 2kg"}:{" "}
            <span>Barra de progresso preenchida até a parte verde</span>
          </p>
          <p>
            {"Peso maior que 2kg e menor que 4kg"}:{" "}
            <span>Barra de progresso preenchida até a parte laranja</span>
          </p>
          <p>
            {"Peso maior ou igual a 4kg"}:{" "}
            <span>Barra de progresso preenchida até a parte vermelha</span>
          </p>
        </div>
      ) : (
        <div>
          <h2>Nível</h2>
          <input value={valueLevelProp} onChange={handleChange} /> Cm
          <ToggleSwitch attribute="Nível" />
          <h4>Legenda:</h4>
          <p>
            {"Nível utilizado menor ou igual a 10cm"}:{" "}
            <span>Ícone do lixo preenchido até a parte verde</span>
          </p>
          <p>
            {"Nível utilizado maior que 10cm e menor que 18cm"}:{" "}
            <span>Ícone do lixo preenchido até a parte laranja</span>
          </p>
          <p>
            {"Nível utilizado maior ou igual a 18cm"}:{" "}
            <span>Ícone do lixo preenchido até a parte vermelha</span>
          </p>
        </div>
      )}
    </div>
  );
};

export default OnlyView;
