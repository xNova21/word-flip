import { React, useState, useEffect } from "react";

const Instrucciones = () => {
  let [color1, setColor1] = useState("");
  let [color2, setColor2] = useState("");
  let [color3, setColor3] = useState("");
  useEffect(() => {
    color1 = "";
    setColor1("green flip-enter");
    color2 = "";
    setColor2("yellow flip-enter");
    color3 = "";
    setColor3("grey flip-enter");
  }, []);

  return (
    <div className="grid">
      <div id="primero" className="rows">
        <div className={`cuadro ${color1}`}>C</div>
        <div className={`cuadro`}>A</div>
        <div className={`cuadro`}>N</div>
        <div className={`cuadro`}>T</div>
        <div className={`cuadro`}>O</div>
      </div>
      <p>La letra C está en la palabra y en la posición correcta.</p>
      <div id="segundo" className="rows">
        <div className={`cuadro`}>P</div>
        <div className={`cuadro`}>A</div>
        <div className={`cuadro  ${color2}`}>D</div>
        <div className={`cuadro`}>E</div>
        <div className={`cuadro`}>L</div>
      </div>
      <p>La letra D está en la palabra pero en la posición incorrecta.</p>
      <div id="tercero" className="rows">
        <div className={`cuadro`}>P</div>
        <div className={`cuadro`}>A</div>
        <div className={`cuadro`}>S</div>
        <div className={`cuadro  ${color3}`}>O</div>
        <div className={`cuadro`}>O</div>
      </div>
      <p>La letra O no está en la palabra.</p>
      <p>Puede haber letras repetidas.</p>
    </div>
  );
};
export default Instrucciones;
