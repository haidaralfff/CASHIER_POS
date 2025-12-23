import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
    const token = localStorage.getItem("role: kasir , owner");
    if (token) {
        return children;
    } else {
        return <Navigate to="/login" />;
    }
}