import { Routes, Route, Navigate } from "react-router-dom";
import { useStore } from "./store/useStore";
import { Toaster } from "react-hot-toast";
import ConsentFormScreen from "./screens/ConsentFormScreen";
import ConsentLetterScreen from "./screens/ConsentLetterScreen";
import DashboardScreen from "./screens/DashboardScreen";
import LoginScreen from "./screens/LoginScreen";
import SignupScreen from "./screens/SignupScreen";
import HomeScreen from "./screens/HomeScreen";
import SignatureScreen from "./screens/SignatureScreen";
import ForgotPasswordScreen from "./screens/ForgotPasswordScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AccountSettingsScreen from "./screens/AccountSettingsScreen"; // Added AccountSettingsScreen import
import LicenseRenewalNotificationScreen from "./screens/LicenseRenewalNotificationScreen"; // Added LicenseRenewalNotificationScreen import
import AuditorRotationNoticeScreen from "./screens/AuditorRotationNoticeScreen"; // Added AuditorRotationNoticeScreen import
import LicenseLapseAlertScreen from "./screens/LicenseLapseAlertScreen"; // Added LicenseLapseAlertScreen import

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
        <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
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
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfileScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/account-settings"
          element={
            <ProtectedRoute>
              <AccountSettingsScreen />
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
        <Route
          path="/license-renewal"
          element={
            <ProtectedRoute>
              <LicenseRenewalNotificationScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/auditor-rotation"
          element={
            <ProtectedRoute>
              <AuditorRotationNoticeScreen />
            </ProtectedRoute>
          }
        />
        <Route
          path="/license-lapse"
          element={
            <ProtectedRoute>
              <LicenseLapseAlertScreen />
            </ProtectedRoute>
          }
        />
      </Routes>
      <Toaster position="top-right" />
    </>
  );
}

export default App;