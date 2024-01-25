import React from "react";
import { cursosHome } from "@/constants";
import { Image } from "react-bootstrap";

const teste = () => {
  return (
    <div>
      <h2>Cursos em Destaque:</h2>
      <ul>
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
      </ul>
    </div>
  );
};

export default teste;
