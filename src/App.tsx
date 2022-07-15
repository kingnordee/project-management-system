import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./pages/NavBar";
import Home from "./pages/Home"
import './styles/_App.scss';
import Login from "./pages/Login";

const App = () => {
    return (
        <div className="App">
            <header className="appHeader">
                <p>App Header</p>
            </header>

            <div className="appRouter">
                <BrowserRouter>
                    <NavBar/>
                    <div className="components">
                        <Routes>
                            <Route path='/' element={<Home/>}/>
                            <Route path='/login' element={<Login/>}/>
                        </Routes>

                    </div>
                </BrowserRouter>
            </div>
            <footer><h5>&copy; Team Software Architecture 2021</h5></footer>
        </div>
    );
};

export default App;

