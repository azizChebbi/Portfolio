import React, { useEffect, useState } from "react";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Loading from "./components/Loading/Loading";
import "./css/app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Contact/Footer";
import Fixed from "./components/Fixed/Fixed";
import { Scrollbar } from "smooth-scrollbar-react";

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
                <Scrollbar
                    damping={0}
                    plugins={{
                        overscroll: {
                            effect: "glow",
                        },
                    }}
                >
                    <Router>
                        <Routes>
                            <Route
                                path="/"
                                element={
                                    <>
                                        <About />
                                        <Skills />
                                        <Projects />
                                        <Footer />
                                        <Fixed />
                                    </>
                                }
                            />
                        </Routes>
                    </Router>
                </Scrollbar>
            </div>
        </>
    );
}

export default App;
