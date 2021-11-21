import React from "react";
import { confirmAlert } from "react-confirm-alert";
import { BASE_URL, headers, DELETE } from "../../constants/api";
import "react-confirm-alert/src/react-confirm-alert.css";
import { useHistory } from "react-router-dom";

function DeleteEnquiry(props) {
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
    const url = BASE_URL + "enquiries/" + props.id;
    const options = { headers, method: DELETE };
    await fetch(url, options);
    history.push("/admin/enquiries");
  }
  return <i title="delete" className="fas fa-trash" onClick={checkDelete}></i>;
}

export default DeleteEnquiry;
