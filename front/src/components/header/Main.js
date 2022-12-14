import React from "react";
import { useNavigate } from 'react-router-dom'

export default function Main({}) {
    const navigate = useNavigate()

  return (
    <header className="header box rounded">
      <div className="row">
        <div className="header__logo column">
          <img
            onClick={() => {
              navigate(-1);
            }}
            className="pointer"
            src="data:image/png;base64,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"
            alt="logo"
          />
        </div>
        <div className="column button-create">
          <button
            className="button-css"
            onClick={() => {
              navigate(`/login`);
            }}
          >
            {" "}
            Login
          </button>
        </div>
      </div>
    </header>
  );
}
