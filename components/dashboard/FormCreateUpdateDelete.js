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

      <form className="row g-3 mx-3">
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
              />
            </div>
          </div>
        ))}
        <div className="col-12">
          <button className="btn btn-primary" onClick={handleFormSubmitOrDelete}>
            {buttonText}
          </button>
        </div>
      </form>

      <div className="mt-3">
        <Link href={backLink} className="btn btn-secondary">
          Voltar
        </Link>
      </div>
    </div>
  );
};

FormCreateUpdateDelete.propTypes = {
  title: PropTypes.string.isRequired,
  linkHref: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
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
//.isRequired
export default FormCreateUpdateDelete;
