import React from "react";
import "../App.css";

function Form({ teamMember, changeHandle, submitHandle, renderMember }) {
    return (
      <>
        <section className="form">
          <form onSubmit={e => submitHandle(e)}>
            <label>
              <br />
              Name:{" "}
              <input
                type="text"
                name="name"
                value={teamMember.name}
                onChange={e => changeHandle(e)}
              />
              Email:{" "}
              <input
                type="email"
                name="email"
                value={teamMember.email}
                onChange={e => changeHandle(e)}
              />
              Role:{" "}
              <input
                type="text"
                name="role"
                value={teamMember.role}
                onChange={e => changeHandle(e)}
              />
            </label>
            <button onClick={renderMember}>Submit</button>
          </form>
        </section>
      </>
    );
}

export default Form;