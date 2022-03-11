import React, { useEffect, useState } from "react";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Loading from "./components/Loading/Loading";
import "./css/app.css";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Contact/Footer";
import Fixed from "./components/Fixed/Fixed";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import TimeLine from "./components/Timeline/TimeLine";

import Header from "./components/Header/Header";

function App() {
    const [loading, setLoading] = useState(true);
    const location = useLocation();
    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);
    }, []);
    return (
        <>
            {loading && <Loading />}
            <div className="app">
                <AnimatePresence>
                    <Routes location={location} key={location.key}>
                        <Route
                            path="/"
                            element={
                                <>
                                    <Header />
                                    <About />
                                    <Skills />
                                    <TimeLine />
                                    <Projects />
                                    <Footer />
                                    <Fixed />
                                </>
                            }
                        />
                    </Routes>
                </AnimatePresence>
            </div>
        </>
    );
}

export default App;
