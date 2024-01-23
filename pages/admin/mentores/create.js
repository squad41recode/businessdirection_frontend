
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

//import { fetchApiData } from '@/utils/api';
import style from "@/styles/Home.module.css"

const AddMentor = () => {
  const [newMentor, setNewMentor] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    whatsapp: "",
    tipoExperiencia: "",
    dataNascimento: "",
  });
  const router = useRouter();

  const handleInputChange = (e) => {
    setNewMentor({ ...newMentor, [e.target.name]: e.target.value });
  };

  const handleAddMentor = () => {
  //   try {
  //     await fetchApiData('mentores', {
  //       method: 'POST',
  //       data: newMentor,
  //     });
  //     router.push("/mentores");
  //   } catch (error) {
  //     alert("Erro ao inserir mentor: " + error);
  //   }
  // };

 // const handleAddClient = () => {
    axios
      .post("http://localhost:8080/api/mentores", newMentor)
      .then(() => {
        router.push("/mentores");
      })
      .catch((error) => {
        alert("Erro ao inserir cliente:" + error);
      });
  };

  return (
    <>
      <div className="mx-auto">
        <h1 className={style.h1}>Inserir Mentor</h1>

        <form className="row g-3 mx-3">
          <div className="col-md-6">
            <label htmlFor="nome" className="form-label">
              Nome
            </label>
            <input
              className="form-control"
              id="nome"
              type="text"
              name="nome"
              value={newMentor.nome}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="sobrenome" className="form-label">
              Sobrenome
            </label>
            <input
              className="form-control"
              id="sobrenome"
              type="text"
              name="sobrenome"
              value={newMentor.sobrenome}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              className="form-control"
              id="email"
              type="email"
              name="email"
              value={newMentor.email}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="whatsapp" className="form-label">
            Whatsapp
            </label>
            <input
              className="form-control"
              id="whatsapp"
              type="text"
              name="whatsapp"
              value={newMentor.whatsapp}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="tipoExperiencia" className="form-label">
              Tipo de Experiência
            </label>
            <input
              className="form-control"
              id="tipoExperiencia"
              type="text"
              name="tipoExperiencia"
              value={newMentor.tipoExperiencia}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="dataNascimento" className="form-label">
              Data de Nascimento
            </label>
            <input
              className="form-control"
              id="dataNascimento"
              type="date"
              name="dataNascimento"
              value={newMentor.dataNascimento}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-12">
            <button className="btn btn-primary" onClick={handleAddMentor}>
              Enviar
            </button>
          </div>
        </form>

        <div className="mt-3">
          <Link href="/mentores" className="btn btn-secondary">Voltar para a Lista de Mentores
          </Link>
        </div>
      </div>
    </>
  );
};

export default AddMentor;
