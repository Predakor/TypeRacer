import { createPortal } from "react-dom";

function Modal(props) {
  return (
    <>
      {createPortal(
        <div className="modal" onClick={props.onClose}>
          {props.children}
        </div>,
        document.getElementById("modal")
      )}
    </>
  );
}

export default Modal;
