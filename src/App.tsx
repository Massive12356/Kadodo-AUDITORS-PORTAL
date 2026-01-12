import { Routes, Route, Navigate } from "react-router-dom";
import { useStore } from "./store/useStore";
import { Toaster } from "react-hot-toast";
import ConsentFormScreen from "./screens/ConsentFormScreen";
import ConsentLetterScreen from "./screens/ConsentLetterScreen";
import DashboardScreen from "./screens/DashboardScreen";
import CompaniesScreen from "./screens/CompaniesScreen";
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
import CompanyLoginScreen from "./screens/CompanyLoginScreen";
import IcagLoginScreen from "./screens/IcagLoginScreen";
import CompanyDashboardScreen from "./screens/CompanyDashboardScreen";
import IcagExecutiveDashboardScreen from "./screens/IcagExecutiveDashboardScreen";
import AuditorSearchScreen from "./screens/AuditorSearchScreen";
import AuditorProfileScreen from "./screens/AuditorProfileScreen";
import RequestAuditorEngagementScreen from "./screens/RequestAuditorEngagementScreen";
import AuditorManagementScreen from "./screens/AuditorManagementScreen";
import VerifyConsentLetterScreen from "./screens/VerifyConsentLetterScreen";
import HelpCenterScreen from './screens/HelpCenterScreen';
import ReviewAuditorScreen from './screens/ReviewAuditorScreen';
import AuditorManagementDirectoryScreen from './screens/AuditorManagementDirectoryScreen';
import CompanyOversightModuleScreen from './screens/CompanyOversightModuleScreen';
import Layout from "./components/Layout";
import CompanyLayout from "./components/CompanyLayout";
import IcagLayout from "./components/IcagLayout";

function App() {
  const isAuthenticated = useStore((state) => state.isAuthenticated);

  // Protected route component for auditor portal
  const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
    return isAuthenticated ? children : <Navigate to="/login" replace />;
  };
  
  // Protected route component for company portal
  const CompanyProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const userType = useStore(state => state.userType);
    return isAuthenticated && userType === 'company' ? children : <Navigate to="/company-login" replace />;
  };
  
  // Protected route component for ICAG portal
  const IcagProtectedRoute = ({ children }: { children: JSX.Element }) => {
    const userType = useStore(state => state.userType);
    return isAuthenticated && userType === 'icag' ? children : <Navigate to="/icag-login" replace />;
  };

  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/forgot-password" element={<ForgotPasswordScreen />} />
        <Route path="/signup" element={<SignupScreen />} />
        <Route path="/dashboard" element={<ProtectedRoute><DashboardScreen /></ProtectedRoute>} />
        <Route path="/companies" element={<ProtectedRoute><CompaniesScreen /></ProtectedRoute>} />
        <Route path="/profile" element={<ProtectedRoute><Layout><ProfileScreen /></Layout></ProtectedRoute>} />
        <Route path="/account-settings" element={<ProtectedRoute><Layout><AccountSettingsScreen /></Layout></ProtectedRoute>} />
        <Route path="/consent-form" element={<ProtectedRoute><Layout><ConsentFormScreen /></Layout></ProtectedRoute>} />
        <Route path="/consent-letter" element={<ProtectedRoute><Layout><ConsentLetterScreen /></Layout></ProtectedRoute>} />
        <Route path="/consent-letter/:consentCode" element={<ProtectedRoute><Layout><ConsentLetterScreen /></Layout></ProtectedRoute>} />
        <Route path="/signature" element={<ProtectedRoute><Layout><SignatureScreen /></Layout></ProtectedRoute>} />
        <Route path="/license-renewal" element={<ProtectedRoute><Layout><LicenseRenewalNotificationScreen /></Layout></ProtectedRoute>} />
        <Route path="/auditor-rotation" element={<ProtectedRoute><Layout><AuditorRotationNoticeScreen /></Layout></ProtectedRoute>} />
        <Route path="/license-lapse" element={<ProtectedRoute><Layout><LicenseLapseAlertScreen /></Layout></ProtectedRoute>} />
        
        {/* Company Portal Routes */}
        <Route path="/company-login" element={<CompanyLoginScreen />} />
        <Route path="/company-dashboard" element={<CompanyProtectedRoute><CompanyLayout><CompanyDashboardScreen /></CompanyLayout></CompanyProtectedRoute>} />
        <Route path="/auditor-search" element={<CompanyProtectedRoute><CompanyLayout><AuditorSearchScreen /></CompanyLayout></CompanyProtectedRoute>} />
        <Route path="/auditor-profile/:id" element={<CompanyProtectedRoute><CompanyLayout><AuditorProfileScreen /></CompanyLayout></CompanyProtectedRoute>} />
        <Route path="/request-engagement/:id" element={<CompanyProtectedRoute><CompanyLayout><RequestAuditorEngagementScreen /></CompanyLayout></CompanyProtectedRoute>} />
        <Route path="/auditor-management" element={<CompanyProtectedRoute><CompanyLayout><AuditorManagementScreen /></CompanyLayout></CompanyProtectedRoute>} />
        <Route path="/review-auditor/:id" element={<CompanyProtectedRoute><CompanyLayout><ReviewAuditorScreen /></CompanyLayout></CompanyProtectedRoute>} />
        <Route path="/verify" element={<VerifyConsentLetterScreen />} />
        <Route path="/help-center" element={<HelpCenterScreen />} />
        
        {/* ICAG Portal Routes */}
        <Route path="/icag-login" element={<IcagLoginScreen />} />
        <Route path="/icag-dashboard" element={<IcagProtectedRoute><IcagLayout><IcagExecutiveDashboardScreen /></IcagLayout></IcagProtectedRoute>} />
        <Route path="/manage-auditors" element={<IcagProtectedRoute><IcagLayout><AuditorManagementDirectoryScreen /></IcagLayout></IcagProtectedRoute>} />
        <Route path="/manage-companies" element={<IcagProtectedRoute><IcagLayout><CompanyOversightModuleScreen /></IcagLayout></IcagProtectedRoute>} />
      </Routes>
      <Toaster position="top-right" />
    </>
  );
}

export default App;