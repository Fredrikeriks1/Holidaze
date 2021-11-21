import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { BASE_URL, headers } from "../../constants/api";
import { Helmet } from "react-helmet";
import Spinner from "../spinner/Spinner";

function Messages() {
  const [loading, setLoading] = useState(true);
  const [contacts, setContacts] = useState(null);
  const [error, setError] = useState(null);
  const url = BASE_URL + "contacts/";

  useEffect(() => {
    const options = { headers };
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        console.dir(json);
        if (json.error) {
          setContacts([]);
          setError(json.message);
        } else {
          setContacts(json);
        }
      })
      .catch((error) => console.debug(error))
      .finally(() => setLoading(false));
  }, [url]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="messages">
      <Helmet>
        <title>Messages | Holidaze</title>
      </Helmet>
      {error && <div className="error">{error}</div>}
      {contacts.length === 0 && <p className="empty">Zero messages</p>}
      {contacts.map((contact) => {
        const format = { year: "numeric", month: "short", day: "numeric" };
        const newFormat = new Intl.DateTimeFormat("en-GB", format);
        const createdAt = new Date(contact.createdAt);
        const newCreatedAt = newFormat.format(createdAt);
        return (
          <NavLink to={`viewmessage/${contact.id}`}>
            <div key={contact.id}>
              <h5>{contact.name}</h5>
              <p>{contact.message}</p>
              <p>{newCreatedAt}</p>
            </div>
          </NavLink>
        );
      })}
    </div>
  );
}

export default Messages;
