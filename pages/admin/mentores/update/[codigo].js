import { useState, useEffect } from "react";
import axios from "axios";
import style from "@/styles/Home.module.css";
import { useRouter } from 'next/router';
import Link from "next/link";


const UpdateMentor = () => {
  const [mentor, setMentor] = useState({ 
    id: "", 
    nome: "",
    sobrenome: "",
    email: "",
    whatsapp: "",
    tipoExperiencia: "",
    dataNascimento: ""
  });
  const router = useRouter();
  const { codigo } = router.query;

  useEffect(() => {

    if (codigo) {

      axios
        .get(`http://localhost:8080/api/mentores/${codigo}`)
        .then((response) => {
          setMentor(response.data);      
        })
        .catch((error) => {
          console.error("Erro ao buscar detalhes do mentor:", error);
        });
    }
  }, [codigo]);

  const handleInputChange = (e) => {
    setMentor({ ...mentor, [e.target.name]: e.target.value });
  };

  const handleUpdateMentor = () => {
    console.log("Atualizando mentor:", mentor);
    axios
      .put(`http://localhost:8080/api/mentores/${codigo}`, mentor)
      .then(() => {
        console.log("Mentor atualizado com sucesso!");
        router.push('/admin/mentores');    
      })
      .catch((error) => {
        console.error("Erro ao atualizar mentor:", error);
      });
  };
  

  return (

    <div className="mx-auto">
    <h1>Inserir Mentor</h1>
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
          value={mentor.nome}
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
          value={mentor.sobrenome}
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
          value={mentor.email}
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
          value={mentor.whatsapp}
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
          value={mentor.tipoExperiencia}
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
          value={mentor.dataNascimento}
          onChange={handleInputChange}
        />
      </div>
      <div className="col-12 justify-content-center text-center my-3">
        <button className="btn btn-primary" onClick={handleUpdateMentor}>
          Enviar
        </button>
      </div>
    </form>

    <div className="col-12 justify-content-center text-center my-3">
      <Link href="/admin/mentores" className="btn btn-secondary">Voltar para a Lista de Mentores
      </Link>
    </div>
  </div>
  );
};

export default UpdateMentor;
