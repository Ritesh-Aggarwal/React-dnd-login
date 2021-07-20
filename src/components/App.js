import React, { useState } from "react";
import Checkbox from "./Checkbox";
import Signin from "./Signin";

function App() {
  const [checkState, setCheckState] = useState({ email: true, phone: false });

  return (
    <div className="main center">
      <div className="checkbox center">
        <Checkbox state={checkState} setState={setCheckState} />
      </div>
      <div className="signin center">
        <Signin method={checkState} />
      </div>
    </div>
  );
}

export default App;
