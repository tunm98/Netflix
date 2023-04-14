import Navbar from "./components/Navbar";
import Home from "../src/pages/Home";
import { Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";
import Login from "../src/pages/Login";
import Signup from "../src/pages/Signup";
import Account from "../src/pages/Account";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/account"
            element={
              // <ProtectedRoute>
              // {" "}
              <Account />
              // </ProtectedRoute>
            }
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </AuthContextProvider>
    </>
  );
}

export default App;
