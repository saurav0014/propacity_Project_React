import view from "../images/view.svg";
import download from "../images/download.svg";
import rename from "../images/rename.svg";
import share from "../images/share.svg";
import move from "../images/move.svg";
import lock from "../images/private.svg";
import del from "../images/delete.svg";
import { useState } from "react";
import Modal from "./Modal";

const DropDown = () => {
  const [showModal, setShowModal] = useState(false);

  const handleDeleteClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div className="dropDownBox">
      <div className="dropDown">
        <button>
          <img src={view} />
          <p> View</p>
        </button>
        <button>
          <img src={download} /> <p>Download</p>
        </button>
        <button>
          <img src={rename} /> <p>Rename</p>
        </button>
        <button>
          <img src={share} /> <p>Share Link</p>
        </button>
        <button>
          <img src={move} /> <p>Move</p>
        </button>
        <button>
          <img src={lock} /> <p>Mark Private</p>
        </button>
        <button onClick={handleDeleteClick}>
          <img src={del} /> <p>Delete</p>
        </button>
      </div>
      {showModal && <Modal />}
    </div>
  );
};

export default DropDown;
