// pages/mentores.js

import Link from "next/link";
import style from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
//import { fetchApiData } from '@/utils/api';

const Empreendedores = () => {
  const [empreendedores, setEmpreendedores] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const mentoresData = await fetchApiData('mentores');
  //       setMentores(mentoresData);
  //     } catch (error) {
  //       console.error("Erro ao buscar a lista de mentores:", error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/empreendedores")
      .then((response) => {
        setEmpreendedores(response.data);
      })
      .catch((error) => {
        console.error("Erro ao buscar a lista de mentores:", error);
      });
  }, []);

  return (
    <>
      <section>
        <h1 className={style.h1}>Lista de Mentores</h1>
        <p>
          <Link href="empreendedores/create" className="btn btn-add-admin ">
            Inserir Empreendedor
          </Link>
        </p>
        <div className="d-flex flex-nowrap justify-content-between overflow-x-scroll">
          <table className="table container tabela">
            <thead>
              <tr>
                <th>Empreendedor Id</th>
                <th>Nome</th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {empreendedores.map((element) => (
                <tr key={element.id} className={style.tabela}>
                  <td>{element.id}</td>
                  <td>{element.nomeCompleto}</td>
                  <td>{element.email}</td>
                  <td>{element.telefone}</td>
                  <td>
                    <Link
                      href={`empreendedores/update/${element.id}`}
                      className="btn btn-warning "
                    >
                      Editar
                    </Link>
                    <Link
                      href={`empreendedores/delete/${element.id}`}
                      className="btn btn btn-danger "
                    >
                      Excluir
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </>
  );
};

export default Empreendedores;
