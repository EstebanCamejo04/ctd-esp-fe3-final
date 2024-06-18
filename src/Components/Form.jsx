import React, { useState } from "react";

const Form = () => {
  const [user, setUser] = useState({
    fullName: "",
    telephone: "",
    email: "",
    question: "",
  });

  const [show, setShow] = useState(false);

  const [error, setError] = useState(false);

  const handleSumbit = (event) => {
    event.preventDefault();

    if (user.fullName.length > 5 && user.email && user.question) {
      setShow(true);
      console.log(
        user.fullName +
          " con el email: " +
          user.email +
          " ha completado el formulario con éxito."
      );
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      {!show && (
        <form onSubmit={handleSumbit}>
          <input
            type="text"
            placeholder="Full name *"
            required
            value={user.fullName}
            onChange={(event) =>
              setUser({ ...user, fullName: event.target.value.trim() })
            }
          />

          <input
            type="email"
            placeholder="Email *"
            required
            value={user.email}
            onChange={(event) =>
              setUser({ ...user, email: event.target.value })
            }
          />

          <input
            type="tel"
            placeholder="Telephone"
            value={user.telephone}
            onChange={(event) =>
              setUser({ ...user, telephone: event.target.value })
            }
          />

          <span>* Required field</span>

          <textarea
            type="text"
            placeholder="Your query *"
            required
            value={user.question}
            onChange={(event) =>
              setUser({ ...user, question: event.target.value })
            }
          />

          <button>Sumbit</button>
        </form>
      )}
      {show ? (
        <h5>
          Gracias {user.fullName}, te contactaremos cuando antes vía mail.{" "}
        </h5>
      ) : null}
      {error && <h5>Por favor verifique su información nuevamente.</h5>}
    </div>
  );
};

export default Form;
