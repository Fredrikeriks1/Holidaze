import React from "react";
import { useHistory } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import { BASE_URL, headers, DELETE } from "../../constants/api";
import "react-confirm-alert/src/react-confirm-alert.css";

function DeleteMessage(props) {
  const history = useHistory();

  function checkDelete() {
    confirmAlert({
      title: "Are you sure you want to delete?",
      buttons: [
        {
          label: "yes",
          onClick: () => deleteEstablishment(),
        },
        { label: "cancel" },
      ],
    });
  }

  async function deleteEstablishment() {
    const url = BASE_URL + "contacts/" + props.id;
    const options = { headers, method: DELETE };
    await fetch(url, options);
    history.push("/admin/messages");
  }
  return (
    <button title="delete" onClick={checkDelete}>
      <i className="fas fa-trash"></i>
    </button>
  );
}

export default DeleteMessage;
