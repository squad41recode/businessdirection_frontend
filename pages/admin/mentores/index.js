// pages/mentores.js

import Link from "next/link";
import style from "@/styles/Home.module.css";
import { useEffect, useState } from "react";
import axios from "axios";
//import { fetchApiData } from '@/utils/api';

const Mentores = () => {
  const [mentores, setMentores] = useState([]);

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
    // get all clients from api
    axios
      .get("http://localhost:8080/api/mentores")
      .then((response) => {
        setMentores(response.data);
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
          <Link href="mentores/create" className="btn btn-add-admin ">
            Inserir Mentor
          </Link>
        </p>
        <div className="d-flex flex-nowrap justify-content-between overflow-x-scroll">
          <table className="table container tabela">
            <thead>
              <tr>
                <th>Mentor Id</th>
                <th>Nome</th>
                <th>Email</th>
                <th>WhatsApp</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {mentores.map((element) => (
                <tr key={element.id} className={style.tabela}>
                  <td>{element.id}</td>
                  <td>{element.nomeCompleto}</td>
                  <td>{element.email}</td>
                  <td>{element.whatsapp}</td>
                  <td>
                    <Link
                      href={`mentores/update/${element.id}`}
                      className="btn btn-warning "
                    >
                      Editar
                    </Link>
                    <Link
                      href={`mentores/delete/${element.id}`}
                      className="btn btn btn-danger disabled"
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

export default Mentores;
