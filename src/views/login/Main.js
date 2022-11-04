import { useEffect, useState } from "react";
import "../../assets/css/login.css";

function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUser = (e) => {
    setUser(e.target.user);
  };
  const handleChangepassword = (e) => {
    setPassword(e.target.password);
  };

  useEffect(() => {
    handleSend();
  }, []);

  const handleSend = (user, password) => {
    if (user == "admin" && password == "admin") {
      alert("Usuario o contraseña incorrectos");
    } else {
      console.log("Login OK");
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>Bienvenido a </h3>

        <form>
          <div className="col-span-12 sm:col-span-4 item1">
            <label className="intro-x mt-8 mr-5">Usuario</label>
            <input
              value={user}
              onChange={handleChangeUser}
              type="text"
              placeholder="Usuario"
            />
          </div>
          <div className="col-span-12 sm:col-span-4 item2">
            <label className="intro-x mt-8 mr-5">Contraseña</label>
            <input
              value={password}
              onChange={handleChangepassword}
              type="text"
              placeholder="Contraseña"
            />
          </div>
          <div className="col-span-12 sm:col-span-4 item3">
            <button
              className="intro-x mt-8 mr-5"
              onClick={() => {
                handleSend();
              }}
            >
              {" "}
              Ingresar{" "}
            </button>
          </div>
        </form>
      </header>
    </div>
  );
}

export default Login;
