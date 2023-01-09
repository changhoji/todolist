import Auth from "pages/Auth";
import Home from "pages/Home";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

function WebRouter({ user }) {
    return (
        <Router>
            <Routes>
                {user ? (
                    <>
                        <Route path="/" element={<Home />} />
                    </>
                ) : (
                    <>
                        <Route path="/" element={<Auth />} />
                    </>
                )}
            </Routes>
        </Router>
    );
}

export default WebRouter;
