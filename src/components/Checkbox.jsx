import React from "react";

function Checkbox({ state, setState }) {
  return (
    <div className="center">
      <div>
        <input
          type="checkbox"
          id="Email"
          name="Email"
          onChange={() => {
            setState((p) => ({ ...p, email: !p.email }));
          }}
          checked={state.email}
          value={state.email}
        ></input>
        <label htmlFor="Email">Email</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="Phone"
          name="Phone"
          onChange={() => {
            setState((p) => ({ ...p, phone: !p.phone }));
          }}
          checked={state.phone}
          value={state.phone}
        ></input>
        <label htmlFor="Phone">Phone</label>
      </div>
    </div>
  );
}

export default Checkbox;
