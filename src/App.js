import React from "react";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import TimeLine from "./components/Timeline/TimeLine";
import Activities from "./components/Activities/Activities";
import Contact from "./components/Contact/Contact";

import "./css/app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    return (
        <div className='app'>
            <Router>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <>
                                <Header />
                                <About />
                                <Skills />
                                <TimeLine />
                                <Projects />
                                <Activities />
                                <Contact />
                            </>
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
