import { useState } from "react";

function Modal(props) {
  const [active, setActive] = useState(false);
  if (!active) return;

  return (
    <div className="modal">
      <div className="modal-content">
        {props.children}
        <button onClick={() => setActive(false)}>X</button>
      </div>
      ;
    </div>
  );
}

export default Modal;
