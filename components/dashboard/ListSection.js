import Link from "next/link";
import style from "@/styles/Home.module.css";

const ListSection = ({ title, linkHref, linkText, data, columns }) => {
  return (
    <section>
      <h1 className={style.h1}>{title}</h1>
      <p>
        <Link href={`/${linkHref}/create`} className="btn btn-add-admin">
          {linkText}
        </Link>
      </p>
      <div className="d-flex flex-nowrap justify-content-between overflow-x-scroll">
        <table className="table container tabela">
          <thead>
            <tr>
              {columns.map((column) => (
                <th key={column}>{column}</th>
              ))}
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {data.map((element) => (
              <tr key={element.id} className={style.tabela}>
                {columns.map((column) => (
                  <td key={`${element.id}-${column}`}>{element[column]}</td>
                ))}
                <td>
                  <Link
                    href={`/${linkHref}/update/${element.id}`}
                    className="btn btn-warning"
                  >
                    Editar
                  </Link>
                  <Link
                    href={`/${linkHref}/delete/${element.id}`}
                    className="btn btn-danger"
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
  );
};

export default ListSection;
