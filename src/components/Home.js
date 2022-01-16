import { React, useState } from "react";
const Home = () => {
  let [palabra] = useState("fabla");
  let [x] = useState([]);
  let [intentos, setIntentos] = useState({ primerintento: "" });
  let handleChange = (e) => {
    if (x.length < 5) {
      x.push(e.target.value);
      setIntentos({ primerintento: x });
    }
  };
  let borrar = () =>{
    x.splice(x.length-1, 1)
    setIntentos({ primerintento: x })
  }
  return (
    <div className="container">
      {/* {console.log(x)} */}
      <div className="grid">
        <div id="primero" className="rows">
          <div className="cuadro flip">{intentos.primerintento[0]}</div>
          <div className="cuadro">{intentos.primerintento[1]}</div>
          <div className="cuadro">{intentos.primerintento[2]}</div>
          <div className="cuadro">{intentos.primerintento[3]}</div>
          <div className="cuadro">{intentos.primerintento[4]}</div>
        </div>
        <div id="segundo" className="rows">
          <div className="cuadro">6</div>
          <div className="cuadro">7</div>
          <div className="cuadro">8</div>
          <div className="cuadro">9</div>
          <div className="cuadro">10</div>
        </div>
        <div id="tercero" className="rows">
          <div className="cuadro">11</div>
          <div className="cuadro">12</div>
          <div className="cuadro">13</div>
          <div className="cuadro">14</div>
          <div className="cuadro">15</div>
        </div>
        <div id="cuarto" className="rows">
          <div className="cuadro">16</div>
          <div className="cuadro">17</div>
          <div className="cuadro">18</div>
          <div className="cuadro">19</div>
          <div className="cuadro">20</div>
        </div>
        <div id="quinto" className="rows">
          <div className="cuadro">21</div>
          <div className="cuadro">22</div>
          <div className="cuadro">23</div>
          <div className="cuadro">24</div>
          <div className="cuadro">25</div>
        </div>
        <div id="sexto" className="rows">
          <div className="cuadro">26</div>
          <div className="cuadro">27</div>
          <div className="cuadro">28</div>
          <div className="cuadro">29</div>
          <div className="cuadro">30</div>
        </div>
      </div>
      <div className="teclado">
        <div id="fila1" className="">
          <button onClick={handleChange} value={"q"}>Q</button>
          <button onClick={handleChange} value={"w"}>W</button>
          <button onClick={handleChange} value={"e"}>E</button>
          <button onClick={handleChange} value={"r"}>R</button>
          <button onClick={handleChange} value={"t"}>T</button>
          <button onClick={handleChange} value={"y"}>Y</button>
          <button onClick={handleChange} value={"u"}>U</button>
          <button onClick={handleChange} value={"i"}>I</button>
          <button onClick={handleChange} value={"o"}>O</button>
          <button onClick={handleChange} value={"p"}>P</button>
        </div>
        <div id="fila2">
          <button onClick={handleChange} value={"a"}>
            A
          </button>
          <button onClick={handleChange} value={"s"}>
            S
          </button>
          <button onClick={handleChange} value={"d"}>D</button>
          <button onClick={handleChange} value={"f"}>F</button>
          <button onClick={handleChange} value={"g"}>G</button>
          <button onClick={handleChange} value={"h"}>H</button>
          <button onClick={handleChange} value={"j"}>J</button>
          <button onClick={handleChange} value={"k"}>K</button>
          <button onClick={handleChange} value={"l"}>L</button>
          <button onClick={handleChange} value={"ñ"}>Ñ</button>
        </div>
        <div id="fila3">
          <button className="grande">Enter</button>
          <button onClick={handleChange} value={"z"}>Z</button>
          <button onClick={handleChange} value={"x"}>X</button>
          <button onClick={handleChange} value={"c"}>C</button>
          <button onClick={handleChange} value={"v"}>V</button>
          <button onClick={handleChange} value={"b"}>B</button>
          <button onClick={handleChange} value={"n"}>N</button>
          <button onClick={handleChange} value={"m"}>M</button>
          <button className="grande" onClick={borrar}>Del</button>
        </div>
      </div>
    </div>
  );
};
export default Home;
