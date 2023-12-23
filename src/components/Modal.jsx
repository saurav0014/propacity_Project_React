import alert from "../images/alert.svg";

const Modal = () => {
  return (
    <div className="modal">
      <div>
        <img src={alert} style={{ padding: "1.5em" }}></img>
        <h2 style={{ paddingLeft: "1em", paddingBottom: "0.5em" }}>Caution!</h2>
        <p style={{ paddingLeft: "1.5em" }}>
          Are you sure you want to Delete this ..?
        </p>
        <div className="btns">
          <button className="btn">Cancel</button>
          <button className="btnRed">Yes</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
