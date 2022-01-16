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

    // console.log(e.target.value)
  };
  return (
    <div className="container">
      {console.log(x)}
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
          <div className="cuadro">30</div>
          <div className="cuadro">31</div>
          <div className="cuadro">32</div>
          <div className="cuadro">33</div>
          <div className="cuadro">34</div>
        </div>
      </div>
      <div className="teclado">
        <div id="fila1" className="">
          <button>Q</button>
          <button>W</button>
          <button>E</button>
          <button>R</button>
          <button>T</button>
          <button>Y</button>
          <button>U</button>
          <button>I</button>
          <button>O</button>
          <button>P</button>
        </div>
        <div id="fila2">
          <button onClick={handleChange} value={"a"}>
            A
          </button>
          <button onClick={handleChange} value={"s"}>
            S
          </button>
          <button>D</button>
          <button>F</button>
          <button>G</button>
          <button>H</button>
          <button>J</button>
          <button>K</button>
          <button>L</button>
          <button>Ñ</button>
        </div>
        <div id="fila3">
          <button className="grande">Enter</button>
          <button>Z</button>
          <button>X</button>
          <button>C</button>
          <button>V</button>
          <button>B</button>
          <button>N</button>
          <button>M</button>
          <button className="grande">Del</button>
        </div>
      </div>
    </div>
  );
};
export default Home;
