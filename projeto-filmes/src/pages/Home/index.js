import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filmes: [],
    };
  }

  componentDidMount() {
    this.loadFilmes();
  }

  loadFilmes = () => {
    //url da api https://sujeitoprogramador.com/r-api/?api=filmes/
    let url = "https://sujeitoprogramador.com/r-api/?api=filmes";
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        this.setState({ filmes: json });
        // console.log(json);
      });
  };

  render() {
    return (
      <div className="container">
        <div className="listar-filmes">
          {this.state.filmes.map((filme) => {
            return (
              <article key={filme.id} className="filme">
                <strong>{filme.nome}</strong>
                <img src={filme.foto} alt="Capa" />
                <Link to={`/filme/${filme.id}`}>Acessar</Link>
              </article>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Home;
