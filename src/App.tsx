import { Routes, Route, Navigate } from "react-router-dom";
import { useStore } from "./store/useStore";
import { Toaster } from "react-hot-toast";
import ConsentFormScreen from "./screens/ConsentFormScreen";
import ConsentLetterScreen from "./screens/ConsentLetterScreen";
import DashboardScreen from "./screens/DashboardScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import HomeScreen from "./screens/HomeScreen";
import SignatureScreen from "./screens/SignatureScreen"; // Added SignatureScreen import

function App() {
  const isAuthenticated = useStore((state) => state.isAuthenticated);

  // Protected route component for auditor portal
  const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    return isAuthenticated ? children : <Navigate to="/login" replace />;
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/consent-form"
          element={
            <ProtectedRoute>
              <ConsentFormScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/consent-letter"
          element={
            <ProtectedRoute>
              <ConsentLetterScreen />
            </ProtectedRoute>
          }
        />
        // Added route for signature screen
        <Route
          path="/signature"
          element={
            <ProtectedRoute>
              <SignatureScreen />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Toaster position="top-right" />
    </>
  );
}

export default App;