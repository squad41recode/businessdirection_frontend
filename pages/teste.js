import React from "react";
import { cursosHome } from "@/constants"; //importa os cursos da constants/index.js
import { Image } from "react-bootstrap";

const teste = () => {
  return (
    <div>
      <h2>Cursos em Destaque:</h2>
      {/* inicio ul */}
      <ul>
        {/* aqui dentro da <ul> a funcao puxa o "cursosHome" e pra cada item nela, ele cria uma <li> */}
        {cursosHome.map((curso) => (
          <li key={curso.titulo}>
            <Image
            src={curso.srcUrl}
            alt={curso.altText}
            width={400}
            height={200}
            />
            <h3>{curso.titulo}</h3>
            <p>{curso.descricao}</p>
          </li>
        ))}
        {/* fim da funcao*/}
      </ul>
      {/* fim da ul */}
    </div>
  );
};

export default teste;
