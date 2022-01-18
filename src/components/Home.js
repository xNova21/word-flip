import { React, useState, useEffect } from "react";
import palabras from "./Palabras";
import Instrucciones from "./Instrucciones";
import Cargando from "./Cargando";
import axios from "axios";
const Home = () => {
  let palabraBuena;
  let [palabra, setPalabra] = useState()
  let [cargando, setCargando] = useState(true)
  let palabrasbuenas = async()=>{
    setCargando(true)

    try {
      palabraBuena = await axios.get(`https://dbwordle.herokuapp.com${process.env.REACT_APP_ENDPOINT}`);
      palabraBuena = palabraBuena.data.lista
      setPalabra(palabraBuena[Math.floor(Math.random() * 2576)])
      setCargando(false)
      console.log(palabraBuena)
    } catch (error) {
      setPalabra(palabras[Math.floor(Math.random() * 10000)])
      setCargando(false)
      ;
    }
  }
  useEffect(()=>{
    palabrasbuenas()
  }, [])
  let [mensajeError, setError] = useState({
    mensaje: { uno: "", dos: "", tres: "", cuatro: "" },
    color: "",
  });
  let [acertar, setAcertar] = useState();
  let [mensaje, setMensaje] = useState({ mensaje: "", color: "" });
  let [colorTeclado, setTeclado] = useState({
    q: "",
    w: "",
    e: "",
    r: "",
    t: "",
    y: "",
    u: "",
    i: "",
    o: "",
    p: "",
    a: "",
    s: "",
    d: "",
    f: "",
    g: "",
    h: "",
    j: "",
    k: "",
    l: "",
    ñ: "",
    z: "",
    x: "",
    c: "",
    v: "",
    b: "",
    n: "",
    m: "",
  });
  // let [palabra, setPalabra] = useState(
  //   palabraBuena[Math.floor(Math.random() * 2576)]
  // );
  let correcto;
  if(palabra){
    correcto = palabra.split("")
  }
  ;
  let [x, setx] = useState([]);
  let [estado, setEstado] = useState({
    primerintento: false,
    segundointento: false,
    tercerintento: false,
    cuartointento: false,
    quintointento: false,
    sextointento: false,
  });
  let [intentos, setIntentos] = useState({
    primerintento: "",
    segundointento: "",
    tercerintento: "",
    cuartointento: "",
    quintointento: "",
    sextointento: "",
  });
  let handleChange = (e) => {
    if (x.length < 5 && estado.primerintento !== true) {
      x.push(e.target.value);
      setIntentos({ ...intentos, primerintento: x });
    } else if (
      x.length < 5 &&
      estado.primerintento === true &&
      estado.segundointento !== true
    ) {
      x.push(e.target.value);
      setIntentos({ ...intentos, segundointento: x });
    } else if (
      x.length < 5 &&
      estado.tercerintento !== true &&
      estado.segundointento === true
    ) {
      x.push(e.target.value);
      setIntentos({ ...intentos, tercerintento: x });
    } else if (
      x.length < 5 &&
      estado.cuartointento !== true &&
      estado.tercerintento === true
    ) {
      x.push(e.target.value);
      setIntentos({ ...intentos, cuartointento: x });
    } else if (
      x.length < 5 &&
      estado.quintointento !== true &&
      estado.cuartointento === true
    ) {
      x.push(e.target.value);
      setIntentos({ ...intentos, quintointento: x });
    } else if (
      x.length < 5 &&
      estado.sextointento !== true &&
      estado.quintointento === true
    ) {
      x.push(e.target.value);
      setIntentos({ ...intentos, sextointento: x });
    }
  };
  let [color1, set1] = useState({});
  let [color2, set2] = useState({});
  let [color3, set3] = useState({});
  let [color4, set4] = useState({});
  let [color5, set5] = useState({});
  let [color6, set6] = useState({});
  let borrar = () => {
    x.splice(x.length - 1, 1);
    if (estado.primerintento === false) {
      setIntentos({ ...intentos, primerintento: x });
    } else if (
      estado.primerintento === true &&
      estado.segundointento === false
    ) {
      setIntentos({ ...intentos, segundointento: x });
    } else if (
      estado.segundointento === true &&
      estado.tercerintento === false
    ) {
      setIntentos({ ...intentos, tercerintento: x });
    } else if (
      estado.tercerintento === true &&
      estado.cuartointento === false
    ) {
      setIntentos({ ...intentos, cuartointento: x });
    } else if (
      estado.cuartointento === true &&
      estado.quintointento === false
    ) {
      setIntentos({ ...intentos, quintointento: x });
    } else if (estado.quintointento === true && estado.sextointento === false) {
      setIntentos({ ...intentos, sextointento: x });
    }
  };

  let comprobar = () => {
    if (
      (color1[0] === "green flip-enter" &&
        color1[0] === color1[1] &&
        color1[1] === color1[2] &&
        color1[2] === color1[3] &&
        color1[3] === color1[4]) ||
      (color2[0] === "green flip-enter" &&
        color2[0] === color2[1] &&
        color2[1] === color2[2] &&
        color2[2] === color2[3] &&
        color2[3] === color2[4]) ||
      (color3[0] === "green flip-enter" &&
        color3[0] === color3[1] &&
        color3[1] === color3[2] &&
        color3[2] === color3[3] &&
        color3[3] === color3[4]) ||
      (color4[0] === "green flip-enter" &&
        color4[0] === color4[1] &&
        color4[1] === color4[2] &&
        color4[2] === color4[3] &&
        color4[3] === color4[4]) ||
      (color5[0] === "green flip-enter" &&
        color5[0] === color5[1] &&
        color5[1] === color5[2] &&
        color5[2] === color5[3] &&
        color5[3] === color5[4]) ||
      (color6[0] === "green flip-enter" &&
        color6[0] === color6[1] &&
        color6[1] === color6[2] &&
        color6[2] === color6[3] &&
        color6[3] === color6[4])
    ) {
      setMensaje({ mensaje: "¡Correcto!", color: "correcto" });
      setTimeout(() => {
        setAcertar(true);
      }, 3000);
    } else if (estado.sextointento === true && acertar !== true) {
      setMensaje({
        mensaje: `¡Lástima! La palabra correcta era ${palabra}.`,
        color: "fallo",
      });
      setTimeout(() => {
        setAcertar(true);
      }, 3000);
    }
  };
  let enter = () => {
    if (x.length === 5 && palabras.includes(x.join("")) === true) {
      if (estado.primerintento === false) {
        for (let i = 0; i < 5; i++) {
          if (intentos.primerintento[i] === correcto[i]) {
            colorTeclado[intentos.primerintento[i]] = "green flip-enter";
            color1[i] = "green flip-enter";
          } else if (
            intentos.primerintento[i] !== correcto[i] &&
            correcto.includes(intentos.primerintento[i]) &&
            colorTeclado[intentos.primerintento[i]] !== "green flip-enter"
          ) {
            colorTeclado[intentos.primerintento[i]] = "yellow flip-enter";
            color1[i] = "yellow flip-enter";
          } else if (correcto.includes(intentos.primerintento[i]) === false) {
            colorTeclado[intentos.primerintento[i]] = "grey flip-enter";
            color1[i] = "grey flip-enter";
          }
        }
        for (let i = 0; i < 5; i++) {
          let repetido = false;
          for (let j = 0; j < 5; j++) {
            if (
              intentos.primerintento[i] === intentos.primerintento[j] &&
              i !== j
            ) {
              repetido = true;
              if (repetido === true) {
                if (
                  (color1[i] === "green flip-enter" &&
                    color1[j] !== "green flip-enter") ||
                  (color1[i] === "yellow flip-enter" &&
                    color1[j] !== "green flip-enter")
                ) {
                  color1[j] = "grey flip-enter";
                } else if (
                  (color1[j] === "green flip-enter" &&
                    color1[i] !== "green flip-enter") ||
                  (color1[j] === "yellow flip-enter" &&
                    color1[i] !== "green flip-enter")
                ) {
                  color1[i] = "grey flip-enter";
                }
              }
            }
          }
        }
        setx([]);
        setEstado({ ...estado, primerintento: true });
      } else if (
        estado.primerintento === true &&
        estado.segundointento === false
      ) {
        for (let i = 0; i < 5; i++) {
          if (intentos.segundointento[i] === correcto[i]) {
            colorTeclado[intentos.segundointento[i]] = "green flip-enter";
            color2[i] = "green flip-enter";
          } else if (
            intentos.segundointento[i] !== correcto[i] &&
            correcto.includes(intentos.segundointento[i]) &&
            colorTeclado[intentos.segundointento[i]] !== "green flip-enter"
          ) {
            colorTeclado[intentos.segundointento[i]] = "yellow flip-enter";
            color2[i] = "yellow flip-enter";
          } else if (correcto.includes(intentos.segundointento[i]) === false) {
            colorTeclado[intentos.segundointento[i]] = "grey flip-enter";
            color2[i] = "grey flip-enter";
          }
        }
        for (let i = 0; i < 5; i++) {
          if (!color2[i]) {
            color2[i] = "yellow flip-enter";
          }
          let repetido = false;
          for (let j = 0; j < 5; j++) {
            if (
              intentos.segundointento[i] === intentos.segundointento[j] &&
              i !== j
            ) {
              repetido = true;
              if (repetido === true) {
                if (
                  (color2[i] === "green flip-enter" &&
                    color2[j] !== "green flip-enter") ||
                  (color2[i] === "yellow flip-enter" &&
                    color2[j] !== "green flip-enter")
                ) {
                  color2[j] = "grey flip-enter";
                } else if (
                  (color2[j] === "green flip-enter" &&
                    color2[i] !== "green flip-enter") ||
                  (color2[j] === "yellow flip-enter" &&
                    color2[i] !== "green flip-enter")
                ) {
                  color2[i] = "grey flip-enter";
                }
              }
            }
          }
        }
        setx([]);
        setEstado({ ...estado, segundointento: true });
      } else if (
        estado.segundointento === true &&
        estado.tercerintento === false
      ) {
        for (let i = 0; i < 5; i++) {
          if (intentos.tercerintento[i] === correcto[i]) {
            colorTeclado[intentos.tercerintento[i]] = "green flip-enter";
            color3[i] = "green flip-enter";
          } else if (
            intentos.tercerintento[i] !== correcto[i] &&
            correcto.includes(intentos.tercerintento[i]) &&
            colorTeclado[intentos.tercerintento[i]] !== "green flip-enter"
          ) {
            colorTeclado[intentos.tercerintento[i]] = "yellow flip-enter";
            color3[i] = "yellow flip-enter";
          } else if (correcto.includes(intentos.tercerintento[i]) === false) {
            colorTeclado[intentos.tercerintento[i]] = "grey flip-enter";
            color3[i] = "grey flip-enter";
          }
        }
        for (let i = 0; i < 5; i++) {
          if (!color3[i]) {
            color3[i] = "yellow flip-enter";
          }
          let repetido = false;
          for (let j = 0; j < 5; j++) {
            if (
              intentos.tercerintento[i] === intentos.tercerintento[j] &&
              i !== j
            ) {
              repetido = true;
              if (repetido === true) {
                if (
                  (color3[i] === "green flip-enter" &&
                    color3[j] !== "green flip-enter") ||
                  (color3[i] === "yellow flip-enter" &&
                    color3[j] !== "green flip-enter")
                ) {
                  color3[j] = "grey flip-enter";
                } else if (
                  (color3[j] === "green flip-enter" &&
                    color3[i] !== "green flip-enter") ||
                  (color3[j] === "yellow flip-enter" &&
                    color3[i] !== "green flip-enter")
                ) {
                  color3[i] = "grey flip-enter";
                }
              }
            }
          }
        }
        setx([]);
        setEstado({ ...estado, tercerintento: true });
      } else if (
        estado.tercerintento === true &&
        estado.cuartointento === false
      ) {
        for (let i = 0; i < 5; i++) {
          if (intentos.cuartointento[i] === correcto[i]) {
            colorTeclado[intentos.cuartointento[i]] = "green flip-enter";
            color4[i] = "green flip-enter";
          } else if (
            intentos.cuartointento[i] !== correcto[i] &&
            correcto.includes(intentos.cuartointento[i]) &&
            colorTeclado[intentos.cuartointento[i]] !== "green flip-enter"
          ) {
            colorTeclado[intentos.cuartointento[i]] = "yellow flip-enter";
            color4[i] = "yellow flip-enter";
          } else if (correcto.includes(intentos.cuartointento[i]) === false) {
            colorTeclado[intentos.cuartointento[i]] = "grey flip-enter";
            color4[i] = "grey flip-enter";
          }
        }
        for (let i = 0; i < 5; i++) {
          let repetido = false;
          if (!color4[i]) {
            color4[i] = "yellow flip-enter";
          }
          for (let j = 0; j < 5; j++) {
            if (
              intentos.cuartointento[i] === intentos.cuartointento[j] &&
              i !== j
            ) {
              repetido = true;
              if (repetido === true) {
                if (
                  (color4[i] === "green flip-enter" &&
                    color4[j] !== "green flip-enter") ||
                  (color4[i] === "yellow flip-enter" &&
                    color4[j] !== "green flip-enter")
                ) {
                  color4[j] = "grey flip-enter";
                } else if (
                  (color4[j] === "green flip-enter" &&
                    color4[i] !== "green flip-enter") ||
                  (color4[j] === "yellow flip-enter" &&
                    color4[i] !== "green flip-enter")
                ) {
                  color4[i] = "grey flip-enter";
                }
              }
            }
          }
        }
        setx([]);
        setEstado({ ...estado, cuartointento: true });
      } else if (
        estado.cuartointento === true &&
        estado.quintointento === false
      ) {
        for (let i = 0; i < 5; i++) {
          if (intentos.quintointento[i] === correcto[i]) {
            colorTeclado[intentos.quintointento[i]] = "green flip-enter";
            color5[i] = "green flip-enter";
          } else if (
            intentos.quintointento[i] !== correcto[i] &&
            correcto.includes(intentos.quintointento[i]) &&
            colorTeclado[intentos.quintointento[i]] !== "green flip-enter"
          ) {
            colorTeclado[intentos.quintointento[i]] = "yellow flip-enter";
            color5[i] = "yellow flip-enter";
          } else if (correcto.includes(intentos.quintointento[i]) === false) {
            colorTeclado[intentos.quintointento[i]] = "grey flip-enter";
            color5[i] = "grey flip-enter";
          }
        }
        for (let i = 0; i < 5; i++) {
          if (!color5[i]) {
            color5[i] = "yellow flip-enter";
          }
          let repetido = false;
          for (let j = 0; j < 5; j++) {
            if (
              intentos.quintointento[i] === intentos.quintointento[j] &&
              i !== j
            ) {
              repetido = true;
              if (repetido === true) {
                if (
                  (color5[i] === "green flip-enter" &&
                    color5[j] !== "green flip-enter") ||
                  (color5[i] === "yellow flip-enter" &&
                    color5[j] !== "green flip-enter")
                ) {
                  color5[j] = "grey flip-enter";
                } else if (
                  (color5[j] === "green flip-enter" &&
                    color5[i] !== "green flip-enter") ||
                  (color5[j] === "yellow flip-enter" &&
                    color5[i] !== "green flip-enter")
                ) {
                  color5[i] = "grey flip-enter";
                }
              }
            }
          }
        }
        setx([]);
        setEstado({ ...estado, quintointento: true });
      } else if (
        estado.quintointento === true &&
        estado.sextointento === false
      ) {
        for (let i = 0; i < 5; i++) {
          if (intentos.sextointento[i] === correcto[i]) {
            colorTeclado[intentos.sextointento[i]] = "green flip-enter";
            color6[i] = "green flip-enter";
          } else if (
            intentos.sextointento[i] !== correcto[i] &&
            correcto.includes(intentos.sextointento[i]) &&
            colorTeclado[intentos.sextointento[i]] !== "green flip-enter"
          ) {
            colorTeclado[intentos.sextointento[i]] = "yellow flip-enter";
            color6[i] = "yellow flip-enter";
          } else if (correcto.includes(intentos.sextointento[i]) === false) {
            colorTeclado[intentos.sextointento[i]] = "grey flip-enter";
            color6[i] = "grey flip-enter";
          }
        }
        for (let i = 0; i < 5; i++) {
          if (!color6[i]) {
            color6[i] = "yellow flip-enter";
          }
          let repetido = false;
          for (let j = 0; j < 5; j++) {
            if (
              intentos.sextointento[i] === intentos.sextointento[j] &&
              i !== j
            ) {
              repetido = true;
              if (repetido === true) {
                if (
                  (color6[i] === "green flip-enter" &&
                    color6[j] !== "green flip-enter") ||
                  (color6[i] === "yellow flip-enter" &&
                    color6[j] !== "green flip-enter")
                ) {
                  color6[j] = "grey flip-enter";
                } else if (
                  (color6[j] === "green flip-enter" &&
                    color6[i] !== "green flip-enter") ||
                  (color6[j] === "yellow flip-enter" &&
                    color6[i] !== "green flip-enter")
                ) {
                  color6[i] = "grey flip-enter";
                }
              }
            }
          }
        }
        setx([]);
        setEstado({ ...estado, sextointento: true });
      }
    } else if (x.length === 5 && palabras.includes(x.join("")) === false) {
      setError({
        mensaje: { uno: "Palabra", dos: "no", tres: "válida", cuatro: "" },
        color: "waviy",
      });
      setTimeout(() => {
        setError({
          mensaje: { uno: "", dos: "", tres: "", cuatro: "" },
          color: "",
        });
      }, 2000);
      console.log("no existe la palabra");
    } else {
      setError({
        mensaje: {
          uno: "No ",
          dos: "hay ",
          tres: "suficientes ",
          cuatro: "letras.",
        },
        color: "waviy",
      });
      setTimeout(() => {
        setError({
          mensaje: { uno: "", dos: "", tres: "", cuatro: "" },
          color: "",
        });
      }, 2000);
      console.log("no hay suficientes letras");
    }
  };
  useEffect(() => {
    comprobar();
  }, [estado]);
  let [instruciones, setInstrucciones] = useState(true);
  let cerrarinst = () => {
    setInstrucciones(false);
  };
  let abririnst = () => {
    setInstrucciones(true);
  };
  let nuevaPartida = () => {
    set1({});
    set2({});
    set3({});
    set4({});
    set5({});
    set6({});
    setEstado({
      primerintento: false,
      segundointento: false,
      tercerintento: false,
      cuartointento: false,
      quintointento: false,
      sextointento: false,
    });
    setIntentos({
      primerintento: "",
      segundointento: "",
      tercerintento: "",
      cuartointento: "",
      quintointento: "",
      sextointento: "",
    });
    setTeclado({
      q: "",
      w: "",
      e: "",
      r: "",
      t: "",
      y: "",
      u: "",
      i: "",
      o: "",
      p: "",
      a: "",
      s: "",
      d: "",
      f: "",
      g: "",
      h: "",
      j: "",
      k: "",
      l: "",
      ñ: "",
      z: "",
      x: "",
      c: "",
      v: "",
      b: "",
      n: "",
      m: "",
    });
    setAcertar();
    setMensaje({ mensaje: "", color: "" });
    setPalabra(palabraBuena[Math.floor(Math.random() * 2576)]);
  };
  return (
    <div>
      {cargando === true ? <Cargando/> : acertar === true || acertar === false ? (
        <div className="container">
          <h1 className={mensaje.color}>{mensaje.mensaje}</h1>
          <button className="jugar" onClick={nuevaPartida}>
            Otra partida
          </button>
        </div>
      ) : instruciones === false ? (
        <div className="container">
          <button onClick={abririnst} className="instrucciones">
            ?
          </button>
          <h1>WORDLE INFINITE (ES)</h1>
          <div className={`cuadroError`}>
            <div className={mensajeError.color}>
              <span>{mensajeError.mensaje.uno}</span>{" "}
              <span>{mensajeError.mensaje.dos}</span>{" "}
              <span>{mensajeError.mensaje.tres}</span>{" "}
              <span>{mensajeError.mensaje.cuatro}</span>
            </div>
          </div>
          <div className="grid">
            <div id="primero" className="rows">
              <div className={`cuadro ${color1[0]}`}>
                {intentos.primerintento[0]}
              </div>
              <div className={`cuadro ${color1[1]}`}>
                {intentos.primerintento[1]}
              </div>
              <div className={`cuadro ${color1[2]}`}>
                {intentos.primerintento[2]}
              </div>
              <div className={`cuadro ${color1[3]}`}>
                {intentos.primerintento[3]}
              </div>
              <div className={`cuadro ${color1[4]}`}>
                {intentos.primerintento[4]}
              </div>
            </div>
            <div id="segundo" className="rows">
              <div className={`cuadro ${color2[0]}`}>
                {intentos.segundointento[0]}
              </div>
              <div className={`cuadro ${color2[1]}`}>
                {intentos.segundointento[1]}
              </div>
              <div className={`cuadro ${color2[2]}`}>
                {intentos.segundointento[2]}
              </div>
              <div className={`cuadro ${color2[3]}`}>
                {intentos.segundointento[3]}
              </div>
              <div className={`cuadro ${color2[4]}`}>
                {intentos.segundointento[4]}
              </div>
            </div>
            <div id="tercero" className="rows">
              <div className={`cuadro ${color3[0]}`}>
                {intentos.tercerintento[0]}
              </div>
              <div className={`cuadro ${color3[1]}`}>
                {intentos.tercerintento[1]}
              </div>{" "}
              <div className={`cuadro ${color3[2]}`}>
                {intentos.tercerintento[2]}
              </div>
              <div className={`cuadro ${color3[3]}`}>
                {intentos.tercerintento[3]}
              </div>
              <div className={`cuadro ${color3[4]}`}>
                {intentos.tercerintento[4]}
              </div>
            </div>
            <div id="cuarto" className="rows">
              <div className={`cuadro ${color4[0]}`}>
                {intentos.cuartointento[0]}
              </div>
              <div className={`cuadro ${color4[1]}`}>
                {intentos.cuartointento[1]}
              </div>
              <div className={`cuadro ${color4[2]}`}>
                {intentos.cuartointento[2]}
              </div>
              <div className={`cuadro ${color4[3]}`}>
                {intentos.cuartointento[3]}
              </div>
              <div className={`cuadro ${color4[4]}`}>
                {intentos.cuartointento[4]}
              </div>
            </div>
            <div id="quinto" className="rows">
              <div className={`cuadro ${color5[0]}`}>
                {intentos.quintointento[0]}
              </div>
              <div className={`cuadro ${color5[1]}`}>
                {intentos.quintointento[1]}
              </div>
              <div className={`cuadro ${color5[2]}`}>
                {intentos.quintointento[2]}
              </div>
              <div className={`cuadro ${color5[3]}`}>
                {intentos.quintointento[3]}
              </div>
              <div className={`cuadro ${color5[4]}`}>
                {intentos.quintointento[4]}
              </div>
            </div>
            <div id="sexto" className="rows">
              <div className={`cuadro ${color6[0]}`}>
                {intentos.sextointento[0]}
              </div>
              <div className={`cuadro ${color6[1]}`}>
                {intentos.sextointento[1]}
              </div>
              <div className={`cuadro ${color6[2]}`}>
                {intentos.sextointento[2]}
              </div>
              <div className={`cuadro ${color6[3]}`}>
                {intentos.sextointento[3]}
              </div>
              <div className={`cuadro ${color6[4]}`}>
                {intentos.sextointento[4]}
              </div>
            </div>
          </div>
          <div className="teclado">
            <div id="fila1" className="">
              <button
                className={colorTeclado.q}
                onClick={handleChange}
                value={"q"}
              >
                Q
              </button>
              <button
                className={colorTeclado.w}
                onClick={handleChange}
                value={"w"}
              >
                W
              </button>
              <button
                className={colorTeclado.e}
                onClick={handleChange}
                value={"e"}
              >
                E
              </button>
              <button
                className={colorTeclado.r}
                onClick={handleChange}
                value={"r"}
              >
                R
              </button>
              <button
                className={colorTeclado.t}
                onClick={handleChange}
                value={"t"}
              >
                T
              </button>
              <button
                className={colorTeclado.y}
                onClick={handleChange}
                value={"y"}
              >
                Y
              </button>
              <button
                className={colorTeclado.u}
                onClick={handleChange}
                value={"u"}
              >
                U
              </button>
              <button
                className={colorTeclado.i}
                onClick={handleChange}
                value={"i"}
              >
                I
              </button>
              <button
                className={colorTeclado.o}
                onClick={handleChange}
                value={"o"}
              >
                O
              </button>
              <button
                className={colorTeclado.p}
                onClick={handleChange}
                value={"p"}
              >
                P
              </button>
            </div>
            <div id="fila2">
              <button
                className={colorTeclado.a}
                onClick={handleChange}
                value={"a"}
              >
                A
              </button>
              <button
                className={colorTeclado.s}
                onClick={handleChange}
                value={"s"}
              >
                S
              </button>
              <button
                className={colorTeclado.d}
                onClick={handleChange}
                value={"d"}
              >
                D
              </button>
              <button
                className={colorTeclado.f}
                onClick={handleChange}
                value={"f"}
              >
                F
              </button>
              <button
                className={colorTeclado.g}
                onClick={handleChange}
                value={"g"}
              >
                G
              </button>
              <button
                className={colorTeclado.h}
                onClick={handleChange}
                value={"h"}
              >
                H
              </button>
              <button
                className={colorTeclado.j}
                onClick={handleChange}
                value={"j"}
              >
                J
              </button>
              <button
                className={colorTeclado.k}
                onClick={handleChange}
                value={"k"}
              >
                K
              </button>
              <button
                className={colorTeclado.l}
                onClick={handleChange}
                value={"l"}
              >
                L
              </button>
              <button
                className={colorTeclado.ñ}
                onClick={handleChange}
                value={"ñ"}
              >
                Ñ
              </button>
            </div>
            <div id="fila3">
              <button className="grande" onClick={enter}>
                Enter
              </button>
              <button
                className={colorTeclado.z}
                onClick={handleChange}
                value={"z"}
              >
                Z
              </button>
              <button
                className={colorTeclado.x}
                onClick={handleChange}
                value={"x"}
              >
                X
              </button>
              <button
                className={colorTeclado.c}
                onClick={handleChange}
                value={"c"}
              >
                C
              </button>
              <button
                className={colorTeclado.v}
                onClick={handleChange}
                value={"v"}
              >
                V
              </button>
              <button
                className={colorTeclado.b}
                onClick={handleChange}
                value={"b"}
              >
                B
              </button>
              <button
                className={colorTeclado.n}
                onClick={handleChange}
                value={"n"}
              >
                N
              </button>
              <button
                className={colorTeclado.m}
                onClick={handleChange}
                value={"m"}
              >
                M
              </button>
              <button className="grande" onClick={borrar}>
                Del
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <button onClick={cerrarinst}>x</button>
          <h1>CÓMO JUGAR</h1>
          <Instrucciones />
          <button className="jugar" onClick={cerrarinst}>
            ¡Jugar!
          </button>
        </div>
      )}
    </div>
  );
};
export default Home;
