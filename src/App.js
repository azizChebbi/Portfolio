import React, { useEffect, useState } from "react";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import TimeLine from "./components/Timeline/TimeLine";
import Activities from "./components/Activities/Activities";
import Loading from "./components/Loading/Loading";
import "./css/app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    return (
        <>
            {loading && <Loading />}
            <div className="app">
                <Router>
                    <Routes>
                        <Route
                            path="/"
                            element={
                                <>
                                    <About />
                                    <Skills />
                                    <TimeLine />
                                    <Projects />
                                    <Activities />
                                </>
                            }
                        />
                    </Routes>
                </Router>
            </div>
        </>
    );
}

export default App;
