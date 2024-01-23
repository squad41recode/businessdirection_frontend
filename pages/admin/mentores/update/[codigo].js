import { useState, useEffect } from "react";
import axios from "axios";
import style from "@/styles/Home.module.css";
import { useRouter } from 'next/router';


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

    <div>
      <h1 className={style.h1}>Atualizar Mentor</h1>
      <table style={{ marginLeft: '20px' }}>
        <tbody>
          <tr>
            <td>
              <label htmlFor="id">Id do Mentor:</label>
            </td>
            <td>
              <input
                type="text"
                id="id"
                name="id"
                value={mentor.id}
                onChange={handleInputChange}
                readOnly
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="nome">Nome:</label>
            </td>
            <td>
              <input
                type="text"
                id="nome"
                name="nome"
                value={mentor.nome}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="sobrenome">Sobrenome:</label>
            </td>
            <td>
              <input
                type="text"
                id="sobrenome"
                name="sobrenome"
                value={mentor.sobrenome}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="email">Email:</label>
            </td>
            <td>
              <input
                type="email"
                id="email"
                name="email"
                value={mentor.email}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="tipoExperiencia">Tipo Experiencia:</label>
            </td>
            <td>
              <input
                type="text"
                id="tipoExperiencia"
                name="tipoExperiencia"
                value={mentor.tipoExperiencia}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="whatsapp">WhatsApp:</label>
            </td>
            <td>
              <input
                type="text"
                id="whatsapp"
                name="whatsapp"
                value={mentor.whatsapp}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="dataNascimento">Data de Nascimento:</label>
            </td>
            <td>
              <input
                type="text"
                id="dataNascimento"
                name="dataNascimento"
                value={mentor.dataNascimento}
                onChange={handleInputChange}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button onClick={handleUpdateMentor}>Atualizar Mentor</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UpdateMentor;
