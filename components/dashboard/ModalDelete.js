import { deleteEmpreendedor } from "@/apiCalls/empreendedor";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function DeleteModal({ id, onDelete, entityName }) {
  //, onDeleteSuccess, onDeleteError
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    if (onDelete) {
      onDelete(id)
        .then((response) => {
          console.log(`${entityName} excluído com sucesso:`, response);
          window.location.reload();
          onDeleteSuccess = `${entityName} excluído com sucesso.`;
          // if (onDeleteSuccess) {
        //   onDeleteSuccess(response);
        // }
        })
        .catch((error) => {
          console.error(`Erro ao excluir ${entityName}:`, error);
          alert(`Ocorreu um erro ao tentar deletar este ${entityName}`);
          onDeleteError = `Ocorreu um erro ao tentar deletar este ${entityName}`;
          // if (onDeleteError) {
        //   onDeleteError(error);
        // }
        })
        .finally(() => {
          setShow(false);
        });
    }
  };

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        <i className="bi-trash"></i>
      </Button>

      <Modal show={show} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Excluir {entityName}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <h4>
            Tem certeza que deseja excluir? Essa ação não pode ser desfeita.
          </h4>
        </Modal.Body>
        <Modal.Footer className="justify-content-center">
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Confirmar exclusão
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DeleteModal;
