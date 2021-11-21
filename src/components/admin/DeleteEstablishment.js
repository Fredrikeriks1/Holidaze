import React from "react";
import { useHistory } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import { BASE_URL, headers, DELETE } from "../../constants/api";
import "react-confirm-alert/src/react-confirm-alert.css";

function Delete(props) {
  const history = useHistory();

  function checkDelete() {
    confirmAlert({
      title: "Confirm deletion",
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
    const url = BASE_URL + "establishments/" + props.id;
    const options = { headers, method: DELETE };
    await fetch(url, options);
    history.push("/admin/establishments");
  }

  return (
    <button title="delete" className="btn-red" onClick={checkDelete}>
      Delete
    </button>
  );
}

export default Delete;
