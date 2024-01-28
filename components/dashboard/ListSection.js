import Link from "next/link";
import style from "@/styles/Home.module.css";
import DeleteModal from "@/components/dashboard/ModalDelete";
import { apiDelete } from "@/utils/apiCalls";

const ListSection = ({ title, endpoint, data, columns, entityName }) => {
  // console.log("Data:", data);
  // console.log("Columns:", columns);

  const handleDeleteObject = async (id) => {
    try {
      // chama a função de exclusão da API passando o id
      await apiDelete(`${endpoint}/${id}`);
      console.log(`${entityName} excluído com sucesso!`);
      //window.location.reload();
    } catch (error) {
      console.error(`Erro ao excluir ${entityName}:`, error);
      alert(`Ocorreu um erro ao tentar deletar este ${entityName}`);
    }
  };

  return (
    <section>
      <h1 className={style.h1}>{`Lista de ${title}`}</h1>
      <p>
        <Link href={`/admin/${endpoint}/create`} className="btn btn-add-admin">
          {`Inserir ${entityName}`}
        </Link>
      </p>
      <div className="d-flex flex-nowrap justify-content-between overflow-x-scroll">
        <table className="table container tabela">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column.label}>{column.label}</th>
              ))}
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {data.map((element) => (
              <tr key={element.id} className={style.tabela}>
                {columns.map((column) => (
                  <td key={`${element.id}-${column.id}`}>
                    {column.id
                      ? getNestedValue(element, column.id)
                      : "Campo não especificado"}
                  </td>
                ))}
                <td>
                  {endpoint !== "conteudos-estudados" &&
                    endpoint !== "mentorias-adquiridas" && (
                      <Link
                        href={`/admin/${endpoint}/update/${element.id}`}
                        className="btn btn-warning btn-edit-admin"
                      >
                        Editar
                      </Link>
                    )}
                  <DeleteModal
                    id={element.id}
                    onDelete={() => handleDeleteObject(element.id)}
                    entityName={entityName} className="btn-del-admin"
                  />
                  {/* <DeleteModal id={element.id} /> */}
                  {/* onDeleteSuccess={handleSuccess} onDeleteError={handleError} */}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

// Função auxiliar para acessar campos aninhados
const getNestedValue = (object, path) => {
  const keys = path.split(".");
  return keys.reduce((acc, key) => (acc && acc[key] ? acc[key] : ""), object);
};

export default ListSection;
