import { Link } from "react-router-dom";
import {
  Building2,
  Users,
  Search,
  ShieldCheck,
  FileText,
  CheckCircle2,
  ArrowRight,
  Globe,
  KeyRound,
  Mail,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ExternalLink,
  Menu,
  X,
  Lock,
  Network,
  UserSearch,
  HandshakeIcon,
  NotebookPen,
  Cloud,
  ArrowLeft
} from "lucide-react";
import img1 from "../assets/img6.png";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.png";
import HomeHeader from "../components/HomeHeader";

export default function HomeScreen() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Top Navigation Bar */}
      <HomeHeader />
      {/* Hero Section (Two-Column Layout) */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
            {/* Left Column */}
            <div>
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-300 bg-gray-200 text-sm font-medium text-gray-700 mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                Official Integrated System
              </div>

              <h1 className="text-4xl lg:text-5xl font-extrabold text-black leading-tight mb-6">
                Auditor <br /> Verification &<br />
                Management <br /> System.
              </h1>

              <p className="text-lg text-gray-600 mb-8 max-w-lg font-medium">
                A unified platform for Ghana ORC and ICAG. Enabling real-time
                auditor verification, digital consent letter generation, and
                secure company engagement management.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  to="/login"
                  className="bg-[#820101] text-white px-6 py-3 rounded-md hover:bg-[#6a0101] transition-colors font-medium flex items-center justify-center hover:animate-pulse"
                >
                  Auditor Portal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/company-login"
                  className="border border-gray-300 text-black px-6 py-3 rounded-md hover:bg-gray-50 transition-colors font-medium flex items-center justify-center hover:animate-pulse"
                >
                  Company Portal
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>

              {/* images of users */}
              <div className="flex items-center">
                <div className="flex -space-x-2">
                  <div className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <img
                      src={img2}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gray-900/30"></div>
                  </div>

                  <div className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <img
                      src={img3}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gray-900/30"></div>
                  </div>

                  <div className="relative w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                    <img
                      src={img4}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gray-900/30"></div>
                  </div>
                </div>

                <span className="ml-3 text-gray-600 font-medium">
                  Serving thousands of companies & auditors
                </span>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex justify-center lg:justify-around">
              <div className="relative rounded-2xl shadow-lg">
                <img
                  src={img1}
                  alt="Professional auditor working on laptop"
                  className="w-64 sm:w-80 lg:w-[30rem] h-auto rounded-2xl object-cover"
                />

                <div className="absolute bottom-2 left-8 bg-black/70 text-white rounded-lg p-4 max-w-xs">
                  <h3 className="font-bold">Digital Consent Letters</h3>
                  <p className="text-sm text-gray-300">
                    Secure, verifiable, and instant.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Comprehensive System Features Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Comprehensive System Features
            </h2>
            <p className="text-lg text-gray-600 font-medium">
              Designed to streamline the audit lifecycle for Auditors and
              Company Owners.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-[#f8e6e6] rounded-lg flex items-center justify-center mb-4 mx-auto md:mx-0">
                <Users className="h-6 w-6 text-[#820101]" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2 text-center md:text-left">
                Auditor Management
              </h3>
              <p className="text-gray-600 text-center md:text-left font-medium">
                Auditors can manage appointed companies, accept <br />{" "}
                engagements, and generate verifiable digital consent letters{" "}
                <br /> instantly.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-[#eae3ef] rounded-lg flex items-center justify-center mb-4 mx-auto md:mx-0">
                <Search className="h-6 w-6 text-[#8F0DEA]" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2 text-center md:text-left">
                Find & Engage Auditors
              </h3>
              <p className="text-gray-600 text-center md:text-left font-medium">
                Companies Can search for ICAG registered auditors in good <br />{" "}
                standing and formally request engagement directly through the{" "}
                <br /> portal.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 mx-auto md:mx-0">
                <ShieldCheck className="h-8 w-8 text-white fill-green-600" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2 text-center md:text-left">
                Proactive Compliance
              </h3>
              <p className="text-gray-600 text-center md:text-left font-medium ">
                Real-time integration with ICAG data provides proactive fraud{" "}
                <br /> alerts and ensures only qualified auditors are appointed.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 mx-auto md:mx-0">
                <FileText className="h-6 w-6 text-white fill-orange-600" />
              </div>
              <h3 className="text-lg font-bold text-black mb-2 text-center md:text-left">
                Consent Letter Verification
              </h3>
              <p className="text-gray-600 text-center md:text-left font-medium">
                Instantly verify the authenticity of digital consent letters
                using <br /> unique verification codes to ensure document
                validity and <br /> security.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Simple steps to get started with our verification system
            </p>
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-between">
            <div className="flex flex-col items-center text-center mb-10 md:mb-0">
              <div className="w-16 h-16 rounded-full border-4 border-white bg-[#6a0101] flex items-center justify-center mb-4 z-30">
                <UserSearch className=" text-white fill-white w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Company Request
              </h3>
              <p className="text-gray-600 font-medium ">
                Business Owners finds auditors & <br /> sends engagement request{" "}
              </p>
            </div>

            <div className=" absolute left-28 top-7  w-[80%] h-1 flex items-center justify-center z-0">
              <div className="w-[50%] h-1 bg-[#820101]"></div>
              <div className="w-[50%] h-1 bg-gray-300"></div>
            </div>

            <div className="flex flex-col  items-center text-center mb-10 md:mb-0">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-[#820101] flex items-center justify-center mb-4 z-30">
                <HandshakeIcon className=" text-[#820101] font-bold w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Auditor Acceptance
              </h3>
              <p className="text-gray-600 font-medium ">
                Auditor reviews request & <br /> accepts engagement request{" "}
              </p>
            </div>

            <div className="flex flex-col items-center text-center mb-10 md:mb-0">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-[#820101] flex items-center justify-center mb-4 z-30">
                <NotebookPen className="text-[#820101] font-bold w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Digital Consent
              </h3>
              <p className="text-gray-600 font-medium ">
                System generates signed digital <br /> consent letter
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-white border-2 border-[#820101] flex items-center justify-center mb-4 z-30">
                <Cloud className="text-[#820101] font-bold w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                ORC Verification
              </h3>
              <p className="text-gray-600 font-medium">
                Automatic updates to ORC records <br /> Verification
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Secure Digital Consent Letters Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Secure Digital Consent Letters
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-lg font-medium">
                Eliminate fraud and paperwork. The Platform enables <br />{" "}
                auditors to issues cryptographically secure consent letters that
                are instantly verifiable by the ORC.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start flex-col">
                  <div className="flex items-center mb-1">
                    <CheckCircle2 className="h-7 w-7 text-white fill-[#5a0101] mt-0.5 mr-3 flex-shrink-0" />
                    <h1 className=" block text-black font-bold">
                      Fraud-Proof Generation
                    </h1>
                  </div>
                  <p className="text-gray-600 font-medium ml-8">
                    Only Verified auditors in good standing can generate valid{" "}
                    <br />
                    consent letter
                  </p>
                </li>
                <li className="flex items-start flex-col">
                  <div className="flex items-center mb-1">
                    <CheckCircle2 className="h-7 w-7 text-white fill-[#5a0101] mt-0.5 mr-3 flex-shrink-0" />
                    <h1 className="block text-black font-bold">
                      Real-time Standing Checks
                    </h1>
                  </div>

                  <p className="text-gray-600 font-medium ml-8">
                    The system automatically checks ICAG status before allowing{" "}
                    <br /> engagement
                  </p>
                </li>
                <li className="flex items-start flex-col">
                  <div className="flex items-center mb-1">
                    <CheckCircle2 className="h-7 w-7 text-white fill-[#5a0101] mt-0.5 mr-3 flex-shrink-0" />
                    <h1 className="block text-black font-bold">
                      Centralized Repository
                    </h1>
                  </div>
                  <p className="text-gray-600 font-medium ml-8">
                    Access all your consent letters and appointments in one
                    secure <br /> dashboard.
                  </p>
                </li>
              </ul>

              <div className="mt-8">
                <Link
                  to="#"
                  className="text-[#820101] hover:text-[#5a0101] font-bold flex items-center"
                >
                  Learn more about verification
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start">
              <div className="w-[80%] h-auto rounded-3xl shadow-lg">
                <img
                  src={img5}
                  alt="digital Consent"
                  className="w-full rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Call-To-Action Section */}
      <div className="py-16 bg-[#820101] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Access Your Dedicated Portal
          </h2>
          <p className="text-lg text-[#f8e6e6] mb-8 max-w-2xl mx-auto">
            Select your user type to manage engagements, verify <br /> auditors,
            or oversee compliance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/login"
              className="bg-white text-[#820101] px-8 py-4 rounded-md font-semibold hover:bg-gray-100 hover:animate-pulse transition-colors"
            >
              Auditor Login
            </Link>
            <Link
              to="/company-login"
              className="bg-black text-white px-8 py-4 rounded-md font-semibold hover:animate-pulse transition-colors"
            >
              Company Owner Login
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-[#820101] rounded-full flex items-center justify-center mr-2">
                  <Globe className="h-4 w-4 text-white" />
                </div>
                <span className="text-xl font-bold text-gray-900">
                  ICAG
                </span>
              </div>
              <p className="text-gray-600 text-[15px]">
                The Official integrated system for auditor verification and
                compliance management in Ghana.
              </p>
            </div>

            <div>
              <h3 className="text-sm  text-black font-bold uppercase tracking-wider mb-4">
                Portals
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/login"
                    className="text-gray-600 hover:text-[#820101] text-sm"
                  >
                    Auditor Portal
                  </Link>
                </li>
                <li>
                  <Link
                    to="/company-login"
                    className="text-gray-600 hover:text-[#820101] text-sm"
                  >
                    Company Portal
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-4">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/docs"
                    className="text-gray-600 hover:text-[#820101] text-sm"
                  >
                    User Guide
                  </Link>
                </li>
                <li>
                  <Link
                    to="/support"
                    className="text-gray-600 hover:text-[#820101] text-sm"
                  >
                    List of Auditors
                  </Link>
                </li>
                <li>
                  <Link
                    to="/api"
                    className="text-gray-600 hover:text-[#820101] text-sm"
                  >
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-black uppercase tracking-wider mb-4">
                Legal
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/privacy"
                    className="text-gray-600 hover:text-[#820101] text-sm"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="text-gray-600 hover:text-[#820101] text-sm"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © ICAG. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="#" className="text-gray-400 hover:text-gray-500">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-gray-500">
                <Twitter className="h-6 w-6" />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-gray-500">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link to="#" className="text-gray-400 hover:text-gray-500">
                <Linkedin className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
