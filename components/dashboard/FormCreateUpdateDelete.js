// components/FormCreateUpdateDelete

import React from "react";
import Link from "next/link";
import PropTypes from "prop-types";
import style from "@/styles/Home.module.css";

const FormCreateUpdateDelete = ({
  title,
  endpoint,
  formData,
  handleInputChange,
  handleFormSubmitOrDelete,
  buttonText,
  backLink,
}) => {
  return (
    <div className="mx-auto">
      <h1 className={style.h1}>{title}</h1>

      <form  onSubmit={handleFormSubmitOrDelete} className="row g-3 mx-3">
        {formData.map((field) => (
          <div key={field.id} className="col-md-6">
            <div>
              <label htmlFor={field.id} className="form-label">
                {field.label}
              </label>
              <input
                className="form-control"
                id={field.id}
                type={field.type}
                name={field.id}
                value={field.value}
                onChange={(e) => handleInputChange(e, field.id)}
                required
              />
            </div>
          </div>
        ))}
        <div className="col-12 justify-content-center text-center mt-3">
          <button className="btn btn-primary" type="submit">
            {buttonText}
          </button>
        </div>
      </form>

      <div className="col-12 justify-content-center text-center my-3">
        <Link href={backLink} className="btn btn-secondary">
          Voltar
        </Link>
      </div>
    </div>
  );
};

FormCreateUpdateDelete.propTypes = {
  title: PropTypes.string.isRequired,
  endpoint: PropTypes.string,
  linkHref: PropTypes.string.isRequired,
  formData: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleInputChange: PropTypes.func,
  handleFormSubmitOrDelete: PropTypes.func.isRequired,
  buttonText: PropTypes.string.isRequired,
  backLink: PropTypes.string.isRequired,
};
//.isRequired  linkHref: PropTypes.string.isRequired,
 // linkText: PropTypes.string.isRequired,
 //  title="Atualizar Empreendedor"
 // linkHref="/admin/empreendedores"
 // linkText="Voltar para a Lista de Empreendedores"
export default FormCreateUpdateDelete;
