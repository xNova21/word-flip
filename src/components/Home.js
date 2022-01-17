import { React, useState } from "react";
import palabras from "./Palabras";
const Home = () => {
  let [colorTeclado] = useState({
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
  let [palabra] = useState(palabras[Math.floor(Math.random() * 10836)]);
  let correcto = palabra.split("");
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
  let [color1] = useState({});
  let [color2] = useState({});
  let [color3] = useState({});
  let [color4] = useState({});
  let [color5] = useState({});
  let [color6] = useState({});
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
  // let enter = () => {
  //   if (x.length === 5 && palabras.includes(x.join("")) === true) {
  //   setx([]);
  //   let correcto = palabra.split("");
  //   if (estado.primerintento === false && palabras.includes(intentos.primerintento.join("")) === true) {
  //     for (let i = 0; i < 5; i++) {
  //       if (correcto[i] === intentos.primerintento[i]) {
  //         color1[i] = "green flip-enter";
  //           colorTeclado[correcto[i]] = "green flip-enter";
  //       } else if (
  //         correcto[i] !== intentos.primerintento[i] &&
  //         palabra.includes(intentos.primerintento[i]) === true
  //       ) {
  //         color1[i] = "yellow flip-enter ";
  //         if (colorTeclado[correcto[i]] === "") {
  //           colorTeclado[correcto[i]] = "yellow flip-enter";
  //         }
  //       }
  //       else if(correcto[i] !== intentos.primerintento[i] &&
  //         palabra.includes(intentos.primerintento[i]) === false){
  //         color1[i] = "grey flip-enter";
  //         colorTeclado[correcto[i]] = "grey flip-enter"
  //       }
  //     }

  //     if (color1[4] !== "") {
  //       setEstado({ ...estado, primerintento: true });
  //     }
  //   } else if (
  //     intentos.segundointento.length === 5 &&
  //     estado.primerintento === true &&
  //     estado.segundointento === false &&
  //     palabras.includes(intentos.segundointento.join("")) === true
  //   ) {
  //     for (let i = 0; i < 5; i++) {
  //       if (correcto[i] === intentos.segundointento[i]) {
  //         color2[i] = "green flip-enter";
  //       } else if (
  //         correcto[i] !== intentos.segundointento[i] &&
  //         palabra.includes(intentos.segundointento[i])
  //       ) {
  //         color2[i] = "yellow flip-enter";
  //       } else {
  //         color2[i] = "grey flip-enter";
  //       }
  //     }
  //     if (color2[4] !== "") {
  //       setEstado({ ...estado, segundointento: true });
  //     }
  //   } else if (
  //     intentos.tercerintento.length === 5 &&
  //     estado.segundointento === true &&
  //     estado.tercerintento === false &&
  //     palabras.includes(intentos.tercerintento.join("")) === true
  //   ) {
  //     for (let i = 0; i < 5; i++) {
  //       if (correcto[i] === intentos.tercerintento[i]) {
  //         color3[i] = "green flip-enter";
  //       } else if (
  //         correcto[i] !== intentos.tercerintento[i] &&
  //         palabra.includes(intentos.tercerintento[i])
  //       ) {
  //         color3[i] = "yellow flip-enter";
  //       } else {
  //         color3[i] = "grey flip-enter";
  //       }
  //     }
  //     if (color3[4] !== "") {
  //       setEstado({ ...estado, tercerintento: true });
  //     }
  //   } else if (
  //     intentos.cuartointento.length === 5 &&
  //     estado.tercerintento === true &&
  //     estado.cuartointento === false &&
  //     palabras.includes(intentos.cuartointento.join("")) === true
  //   ) {
  //     for (let i = 0; i < 5; i++) {
  //       if (correcto[i] === intentos.cuartointento[i]) {
  //         color4[i] = "green flip-enter";
  //       } else if (
  //         correcto[i] !== intentos.cuartointento[i] &&
  //         palabra.includes(intentos.cuartointento[i])
  //       ) {
  //         color4[i] = "yellow flip-enter";
  //       } else {
  //         color4[i] = "grey flip-enter";
  //       }
  //     }
  //     if (color4[4] !== "") {
  //       setEstado({ ...estado, cuartointento: true });
  //     }
  //   } else if (
  //     intentos.quintointento.length === 5 &&
  //     estado.cuartointento === true &&
  //     estado.quintointento === false &&
  //     palabras.includes(intentos.quintointento.join("")) === true
  //   ) {
  //     for (let i = 0; i < 5; i++) {
  //       if (correcto[i] === intentos.quintointento[i]) {
  //         color5[i] = "green flip-enter";
  //       } else if (
  //         correcto[i] !== intentos.quintointento[i] &&
  //         palabra.includes(intentos.quintointento[i])
  //       ) {
  //         color5[i] = "yellow flip-enter";
  //       } else {
  //         color5[i] = "grey flip-enter";
  //       }
  //     }
  //     if (color5[4] !== "") {
  //       setEstado({ ...estado, quintointento: true });
  //     }
  //   } else if (
  //     intentos.sextointento.length === 5 &&
  //     estado.quintointento === true &&
  //     estado.sextointento === false &&
  //     palabras.includes(intentos.sextointento.join("")) === true
  //   ) {
  //     for (let i = 0; i < 5; i++) {
  //       if (correcto[i] === intentos.sextointento[i]) {
  //         color6[i] = "green flip-enter";
  //       } else if (
  //         correcto[i] !== intentos.sextointento[i] &&
  //         palabra.includes(intentos.sextointento[i])
  //       ) {
  //         color6[i] = "yellow flip-enter";
  //       } else {
  //         color6[i] = "grey flip-enter";
  //       }
  //     }
  //     if (color6[4] !== "") {
  //       setEstado({ ...estado, sextointento: true });
  //     }
  //   }}
  // };
  let enter = () => {
    // console.log(correcto.indexOf(x[1]));
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
            color1[i] = "grey flip-enter"
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
        setEstado({...estado, primerintento: true})
        console.log("intento1 correcto");
      } 
      else if(estado.primerintento === true && estado.segundointento === false){
      for(let i=0; i<5; i++){
        if(intentos.segundointento[i] === correcto[i]){
          colorTeclado[intentos.segundointento[i]] = "green flip-enter"
          color2[i] = "green flip-enter"
        }
        else if(intentos.segundointento[i] !== correcto[i] &&
          correcto.includes(intentos.segundointento[i]) &&
          colorTeclado[intentos.segundointento[i]] !== "green flip-enter"){
            colorTeclado[intentos.segundointento[i]] = "yellow flip-enter"
            color2[i] = "yellow flip-enter"
        }
        else if(correcto.includes(intentos.segundointento[i]) === false){
          colorTeclado[intentos.segundointento[i]] = "grey flip-enter";
          color2[i] = "grey flip-enter"
        }
      }
      for(let i=0; i<5; i++){
        let repetido = false;
        for(let j=0; j<5; j++){
          if(intentos.segundointento[i] === intentos.segundointento[j] &&
            i !== j){
              repetido = true;
              if(repetido === true){
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
      setEstado({...estado, segundointento: true})
      }
      else if(estado.segundointento === true && estado.tercerintento === false){
        for(let i=0; i<5; i++){
          if(intentos.tercerintento[i] === correcto[i]){
            colorTeclado[intentos.tercerintento[i]] = "green flip-enter"
            color3[i] = "green flip-enter"
          }
          else if(intentos.tercerintento[i] !== correcto[i] &&
            correcto.includes(intentos.tercerintento[i]) &&
            colorTeclado[intentos.tercerintento[i]] !== "green flip-enter"){
              colorTeclado[intentos.tercerintento[i]] = "yellow flip-enter"
              color3[i] = "yellow flip-enter"
          }
          else if(correcto.includes(intentos.tercerintento[i]) === false){
            colorTeclado[intentos.tercerintento[i]] = "grey flip-enter";
            color3[i] = "grey flip-enter"
          }
        }
        for(let i=0; i<5; i++){
          let repetido = false;
          for(let j=0; j<5; j++){
            if(intentos.tercerintento[i] === intentos.tercerintento[j] &&
              i !== j){
                repetido = true;
                if(repetido === true){
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
        setEstado({...estado, tercerintento: true})
        }
        else if(estado.tercerintento === true && estado.cuartointento === false){
          for(let i=0; i<5; i++){
            if(intentos.cuartointento[i] === correcto[i]){
              colorTeclado[intentos.cuartointento[i]] = "green flip-enter"
              color4[i] = "green flip-enter"
            }
            else if(intentos.cuartointento[i] !== correcto[i] &&
              correcto.includes(intentos.cuartointento[i]) &&
              colorTeclado[intentos.cuartointento[i]] !== "green flip-enter"){
                colorTeclado[intentos.cuartointento[i]] = "yellow flip-enter"
                color4[i] = "yellow flip-enter"
            }
            else if(correcto.includes(intentos.cuartointento[i]) === false){
              colorTeclado[intentos.cuartointento[i]] = "grey flip-enter";
              color4[i] = "grey flip-enter"
            }
          }
          for(let i=0; i<5; i++){
            let repetido = false;
            for(let j=0; j<5; j++){
              if(intentos.cuartointento[i] === intentos.cuartointento[j] &&
                i !== j){
                  repetido = true;
                  if(repetido === true){
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
          setEstado({...estado, cuartointento: true})
          }
          else if(estado.cuartointento === true && estado.quintointento === false){
            for(let i=0; i<5; i++){
              if(intentos.quintointento[i] === correcto[i]){
                colorTeclado[intentos.quintointento[i]] = "green flip-enter"
                color5[i] = "green flip-enter"
              }
              else if(intentos.quintointento[i] !== correcto[i] &&
                correcto.includes(intentos.quintointento[i]) &&
                colorTeclado[intentos.quintointento[i]] !== "green flip-enter"){
                  colorTeclado[intentos.quintointento[i]] = "yellow flip-enter"
                  color5[i] = "yellow flip-enter"
              }
              else if(correcto.includes(intentos.quintointento[i]) === false){
                colorTeclado[intentos.quintointento[i]] = "grey flip-enter";
                color5[i] = "grey flip-enter"
              }
            }
            for(let i=0; i<5; i++){
              let repetido = false;
              for(let j=0; j<5; j++){
                if(intentos.quintointento[i] === intentos.quintointento[j] &&
                  i !== j){
                    repetido = true;
                    if(repetido === true){
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
            setEstado({...estado, quintointento: true})
            }
            else if(estado.quintointento === true && estado.sextointento === false){
              for(let i=0; i<5; i++){
                if(intentos.sextointento[i] === correcto[i]){
                  colorTeclado[intentos.sextointento[i]] = "green flip-enter"
                  color6[i] = "green flip-enter"
                }
                else if(intentos.sextointento[i] !== correcto[i] &&
                  correcto.includes(intentos.sextointento[i]) &&
                  colorTeclado[intentos.sextointento[i]] !== "green flip-enter"){
                    colorTeclado[intentos.sextointento[i]] = "yellow flip-enter"
                    color6[i] = "yellow flip-enter"
                }
                else if(correcto.includes(intentos.sextointento[i]) === false){
                  colorTeclado[intentos.sextointento[i]] = "grey flip-enter";
                  color6[i] = "grey flip-enter"
                }
              }
              for(let i=0; i<5; i++){
                let repetido = false;
                for(let j=0; j<5; j++){
                  if(intentos.sextointento[i] === intentos.sextointento[j] &&
                    i !== j){
                      repetido = true;
                      if(repetido === true){
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
              setEstado({...estado, sextointento: true})
              }
      else if (x.length === 5 && palabras.includes(x.join("")) === false) {
        console.log("no existe la palabra");
      } else {
        console.log("no hay suficientes letras");
      }
    }
  };
  return (
    <div className="container">
      {console.log(palabra)}
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
          <button className={colorTeclado.q} onClick={handleChange} value={"q"}>
            Q
          </button>
          <button className={colorTeclado.w} onClick={handleChange} value={"w"}>
            W
          </button>
          <button className={colorTeclado.e} onClick={handleChange} value={"e"}>
            E
          </button>
          <button className={colorTeclado.r} onClick={handleChange} value={"r"}>
            R
          </button>
          <button className={colorTeclado.t} onClick={handleChange} value={"t"}>
            T
          </button>
          <button className={colorTeclado.y} onClick={handleChange} value={"y"}>
            Y
          </button>
          <button className={colorTeclado.u} onClick={handleChange} value={"u"}>
            U
          </button>
          <button className={colorTeclado.i} onClick={handleChange} value={"i"}>
            I
          </button>
          <button className={colorTeclado.o} onClick={handleChange} value={"o"}>
            O
          </button>
          <button className={colorTeclado.p} onClick={handleChange} value={"p"}>
            P
          </button>
        </div>
        <div id="fila2">
          <button className={colorTeclado.a} onClick={handleChange} value={"a"}>
            A
          </button>
          <button className={colorTeclado.s} onClick={handleChange} value={"s"}>
            S
          </button>
          <button className={colorTeclado.d} onClick={handleChange} value={"d"}>
            D
          </button>
          <button className={colorTeclado.f} onClick={handleChange} value={"f"}>
            F
          </button>
          <button className={colorTeclado.g} onClick={handleChange} value={"g"}>
            G
          </button>
          <button className={colorTeclado.h} onClick={handleChange} value={"h"}>
            H
          </button>
          <button className={colorTeclado.j} onClick={handleChange} value={"j"}>
            J
          </button>
          <button className={colorTeclado.k} onClick={handleChange} value={"k"}>
            K
          </button>
          <button className={colorTeclado.l} onClick={handleChange} value={"l"}>
            L
          </button>
          <button className={colorTeclado.ñ} onClick={handleChange} value={"ñ"}>
            Ñ
          </button>
        </div>
        <div id="fila3">
          <button className="grande" onClick={enter}>
            Enter
          </button>
          <button className={colorTeclado.z} onClick={handleChange} value={"z"}>
            Z
          </button>
          <button className={colorTeclado.x} onClick={handleChange} value={"x"}>
            X
          </button>
          <button className={colorTeclado.c} onClick={handleChange} value={"c"}>
            C
          </button>
          <button className={colorTeclado.v} onClick={handleChange} value={"v"}>
            V
          </button>
          <button className={colorTeclado.b} onClick={handleChange} value={"b"}>
            B
          </button>
          <button className={colorTeclado.n} onClick={handleChange} value={"n"}>
            N
          </button>
          <button className={colorTeclado.m} onClick={handleChange} value={"m"}>
            M
          </button>
          <button className="grande" onClick={borrar}>
            Del
          </button>
        </div>
      </div>
    </div>
  );
};
export default Home;
