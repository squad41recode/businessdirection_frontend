import { useState } from "react";
import axios from "axios";
import style from "@/styles/Home.module.css";
import { useRouter } from "next/router";

const DeleteMentor = () => {
  const router = useRouter();
  const { codigo } = router.query;
  const [mentorId, setMentorId] = useState(codigo);
 

  const handleDeleteMentor = () => {
  
    axios
      .delete("http://localhost:8080/api/mentores/" + mentorId)
      .then(() => {
        router.push("/admin/mentores");
      })
      .catch((error) => {
        alert("Erro ao excluir mentor:" + error);
      });
  };

  return (

    <div>
    
      <h1 className={style.h1}>Excluir Mentor</h1>
      <table style={{ marginLeft: "20px" }}>
        <tbody>
          <tr>
            <td>
              <label htmlFor="id">Mentor Id:</label>
            </td>
            <td>
              <input
                type="text"
                id="id"
                value={mentorId}
                onChange={(e) => setMentorId(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td colSpan="2">
              <button onClick={handleDeleteMentor}>Excluir Mentor</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DeleteMentor;