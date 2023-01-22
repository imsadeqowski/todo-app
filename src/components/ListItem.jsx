import React from "react";

const ListItem = ({ id, done, title, delHandler, doneHandler }) => {
  return (
    <li
      className={`list-group-item d-flex justify-content-between ${
        done ? "bg-success" : ""
      }`}
    >
      {done ? <del>{title}</del> : title}

      <div>
        <button
          className="btn btn-small bg-danger text-white ms-2"
          onClick={() => delHandler(id)}
        >
          {" "}
          <i className="fas fa-trash"></i>
        </button>
        <button
          className={`btn btn-small ${
            done ? "bg-warning" : "bg-success"
          } text-white`}
          onClick={() => doneHandler(id)}
        >
          {done ? (
            <i className="fa fa-undo-alt"></i>
          ) : (
            <i className="fas fa-check"></i>
          )}
        </button>
      </div>
    </li>
  );
};

export default ListItem;
