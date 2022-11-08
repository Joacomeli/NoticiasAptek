import { useState } from "react";
import "../../assets/css/login.css";
import { Login } from "../../components/login/Main";
import { useAuth } from "../../contextAPI/authHook";
import { React } from "react";

export const LoginPage = () => {
    const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const { login  } = useAuth();

  const handleChangeUser = (e) => {
    console.log(e.target.value);
    setUser(e.target.value);
  };
  const handleChangepassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSend = (user, password) => {
 
    fetch("http://localhost:82/api/auth/login", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify({
       email: user,
       password: password,
     }),
    })
     .then((response) => response.json())
     .then((data) => {
       console.log(data);
       if (data.token) {


       login({token:"",user:{email:"",role:""}})
      }
     });

   
  };
  return (
    <div className="App">
      <header className="App-header">
        <h3>Bienvenido a </h3>
   
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
              type="password"
              placeholder="Contraseña"
            />
          </div>
          <div className="col-span-12 sm:col-span-4 item3">
            <button
              className="intro-x mt-8 mr-5"
              onClick={() => {
                handleSend(user,password);
              }}
            >
              {" "}
              Ingresar{" "}
            </button>
          </div>
    
      </header>
    </div>
  );
};

export default Login;
