import { Route, Navigate, Routes } from "react-router-dom";
import Login from "../pages/log-in/login";
import SignUp from "../pages/sign-up/signup";

const PublicRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />

            <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
    );
};

export default PublicRoutes;