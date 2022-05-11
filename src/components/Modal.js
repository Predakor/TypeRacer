import { useState } from "react";

function Modal(props) {
  const [active, setActive] = useState(false);
  if (!active) return;

  return (
    <div className="modal" onClick={setActive(false)}>
      {props.children}
    </div>
  );
}

export default Modal;
