import './assets/css/App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Administrador from './views/administrador/Main';
import {LoginPage} from './views/login/Main';
import Router from './router';
import { AuthProvider } from './contextAPI/authHook';


function App() {
  return (
    <BrowserRouter>
    <AuthProvider>
    <Router></Router>
    </AuthProvider>
    </BrowserRouter>
  );

}

export default App;
