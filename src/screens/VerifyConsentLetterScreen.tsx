import { useState } from 'react';
import { Link } from 'react-router-dom';
import { KeyRound, Search, Lock, Eye, EyeOff, CheckCircle, AlertCircle, XCircle, Clock, FileText, Building2, User, Shield } from 'lucide-react';
import { useStore } from '../store/useStore';
import HomeHeader from '../components/HomeHeader';

export default function VerifyConsentLetterScreen() {
  const [consentCode, setConsentCode] = useState('');
  const [verificationStatus, setVerificationStatus] = useState<'idle' | 'verifying' | 'verified' | 'invalid'>('idle');
  const [showDetails, setShowDetails] = useState(false);
  const auditorSignature = useStore((state) => state.auditorSignature);


  // Mock consent letter data that would be displayed after verification
  const mockConsentLetter = {
    title: "AUDITOR APPOINTMENT CONSENT LETTER",
    date: "December 15, 2023",
    company: {
      name: "Global Ventures Ltd",
      registration: "GH-2023-8842",
      address: "P.O.Box AN 12345, Accra, Ghana",
      email: "info@globventures.com"
    },
    auditor: {
      name: "Kwame Mensah, CA",
      firm: "Mensah & Associates",
      license: "ICAG-2023-001",
      category: "A1",
      sign: auditorSignature

    },
    details: {
      appointmentDate: "December 15, 2023",
      tenure: "Until resignation or removal",
      remuneration: "As per agreed terms",
      scope: "Annual statutory audit of financial statements"
    },
    status: "Verified",
    issuer: "Kwame Mensah, CA",
    verificationDate: new Date().toLocaleString(),
    consentCode: "CNST-789456"
  };

  const handleVerify = () => {
    if (consentCode.trim() === '') {
      setVerificationStatus('invalid');
      return;
    }

    setVerificationStatus('verifying');
    
    // Simulate API call delay
    setTimeout(() => {
      // Check if the consent code matches the expected format (CNST-XXXXXX)
      const consentCodePattern = /^CNST-\d{6}$/;
      if (consentCodePattern.test(consentCode.toUpperCase())) {
        setVerificationStatus('verified');
      } else {
        setVerificationStatus('invalid');
      }
    }, 1500);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.toUpperCase();
    
    // Format the input as CNST-XXXXXX
    value = value.replace(/[^A-Z0-9]/g, '');
    
    // Add hyphen after CNST
    if (value.length > 4) {
      value = value.substring(0, 4) + '-' + value.substring(4, 11);
    }
    
    setConsentCode(value);
  };

  const resetVerification = () => {
    setConsentCode('');
    setVerificationStatus('idle');
    setShowDetails(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <HomeHeader />
      <div className="max-w-4xl mx-auto mt-8">
        {/* Top Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-[#f8e6e6] text-[#820101] text-sm font-medium animate-bounce">
            <div className="w-2 h-2 bg-[#820101] rounded-full mr-2"></div>
            OFFICIAL VERIFICATION PORTAL
          </div>
        </div>

        {/* Page Heading */}
        <div className="text-center mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Verify Consent Letter</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Enter the unique consent code in the format CNST-XXXXXX to verify the authenticity of the document against the official ORC & ICAG registry.
          </p>
        </div>

        {/* Verification Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Blue Accent Bar */}
          <div className="h-1 bg-[#820101]"></div>
          
          <div className="p-6 sm:p-8">
            {/* Input Section */}
            <div className="mb-8">
              <label htmlFor="consent-code" className="block text-sm font-medium text-gray-700 mb-2">
                Consent Code
              </label>
              
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <KeyRound className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="consent-code"
                  value={consentCode}
                  onChange={handleInputChange}
                  placeholder="CNST-XXXXXX"
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:ring-[#820101] focus:border-[#820101]"
                  maxLength={11}
                />
              </div>
              
              <p className="mt-2 text-sm text-gray-500">
                The code follows the format CNST-XXXXXX and is located at the top-right corner of the document.
              </p>
            </div>

            {/* Verify Button */}
            <button
              onClick={handleVerify}
              disabled={verificationStatus === 'verifying'}
              className={`w-full flex items-center justify-center px-4 py-3 border border-transparent rounded-lg shadow-sm text-base font-medium text-white ${
                verificationStatus === 'verifying' 
                  ? 'bg-[#a64444] cursor-not-allowed' 
                  : 'bg-[#820101] hover:bg-[#6a0101]'
              }`}
            >
              {verificationStatus === 'verifying' ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Verifying...
                </>
              ) : (
                <>
                  <Search className="h-5 w-5 mr-2" />
                  Verify Code
                </>
              )}
            </button>

            {/* Divider */}
            <div className="my-8">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="px-4 bg-white text-sm text-gray-500 uppercase">
                    Verification Status
                  </span>
                </div>
              </div>
            </div>

            {/* Status Placeholder Box */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
              {verificationStatus === 'idle' && (
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                    <FileText className="h-8 w-8 text-gray-400" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Waiting for input</h3>
                  <p className="text-gray-500 max-w-md">
                    Enter a valid consent code above and click verify to check the authenticity of the document.
                  </p>
                </div>
              )}

              {verificationStatus === 'verifying' && (
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-[#f8e6e6] flex items-center justify-center mb-4">
                    <Clock className="h-8 w-8 text-[#820101]" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-1">Verifying...</h3>
                  <p className="text-gray-500 max-w-md">
                    Checking the consent code against the official registry.
                  </p>
                </div>
              )}

              {verificationStatus === 'verified' && (
                <div className="text-left">
                  <div className="flex items-center mb-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-2" />
                    <h3 className="text-lg font-medium text-green-700">Document Verified Successfully</h3>
                  </div>
                  
                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-bold text-gray-900">Consent Letter Details</h4>
                        <p className="text-sm text-gray-500">Verification Code: <span className="font-medium text-black">{consentCode}</span></p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-500">Verified on</p>
                        <p className="text-sm font-medium"><span className="font-medium text-black">{mockConsentLetter.verificationDate}</span></p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-600"><span className="font-medium">Company:</span> <span className="font-medium text-black">{mockConsentLetter.company.name}</span></p>
                        <p className="text-gray-600"><span className="font-medium">Registration:</span> <span className="font-medium text-black">{mockConsentLetter.company.registration}</span></p>
                        <p className="text-gray-600"><span className="font-medium">Auditor:</span> <span className="font-medium text-black">{mockConsentLetter.auditor.name}</span></p>
                      </div>
                      <div>
                        <p className="text-gray-600"><span className="font-medium">Status:</span> <span className="text-green-600 font-medium">Valid</span></p>
                        <p className="text-gray-600"><span className="font-medium">Issued by:</span> <span className="font-medium text-black">{mockConsentLetter.issuer}</span></p>
                        <p className="text-gray-600"><span className="font-medium">Category:</span> <span className="font-medium text-black">{mockConsentLetter.auditor.category}</span></p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-3">
                    <button
                      onClick={() => setShowDetails(!showDetails)}
                      className="flex-1 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                    >
                      {showDetails ? (
                        <>
                          <EyeOff className="h-4 w-4 mr-2" />
                          Hide Details
                        </>
                      ) : (
                        <>
                          <Eye className="h-4 w-4 mr-2" />
                          View Full Document
                        </>
                      )}
                    </button>
                    <button
                      onClick={resetVerification}
                      className="flex-1 flex items-center justify-center px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
                    >
                      <XCircle className="h-4 w-4 mr-2" />
                      Verify Another
                    </button>
                  </div>
                  
                  {showDetails && (
                    <div className="mt-6 bg-[#f8e6e6] border border-[#d6baba] rounded-lg p-6">
                      <h4 className="font-bold text-gray-900 mb-4 text-center">Consent Letter Content</h4>
                      
                      <div className="bg-white rounded-lg shadow-lg p-6 sm:p-12 mb-8">
          {/* Content div specifically for printing and PDF generation */}
          <div id="consent-letter-content">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-2">
                AUDITOR'S CONSENT TO ACT
              </h1>
              <p className="text-gray-600">
                Generated on: {new Date().toLocaleDateString()}
              </p>
            </div>

            {/* Added justify-on-mobile class for text justification on mobile */}
            <div className="space-y-6 mb-8 text-gray-700 leading-relaxed justify-on-mobile">
              <p>
                This letter serves as formal confirmation that I,{" "}
                <span className="font-bold text-gray-900">
                  {mockConsentLetter?.auditor.name ?? "N/A"}
                </span>{" "}
                (ICAG Registration Number: {" "}
                <span className="font-bold text-gray-900">
                  {mockConsentLetter?.auditor.license}
                </span>
                ), being a qualified auditor in accordance with the regulations
                of the Institute of Chartered Accountants, Ghana (ICAG), hereby
                give my consent to act as the auditor for:
              </p>

              <div className="text-center my-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-1">
                  {mockConsentLetter?.company.name ?? "N/A"}
                </h2>
                <p className="text-gray-600">
                  (Company Email Number: {" "}
                  <span className="text-black font-medium">
                    {mockConsentLetter?.company.email ?? "N/A"}
                  </span>
                  )
                </p>
              </div>

              <p>
                This consent is granted for the financial year ending December
                31, 2024, and for every subsequent financial year until this
                consent is formally withdrawn.
              </p>

              <p>
                For verification and record-keeping purposes with the Office of
                the Registrar of Companies (ORC) and the Institute of Chartered
                Accountants, Ghana (ICAG), the unique digital consent code
                associated with this appointment is:
              </p>

              <div className="bg-blue-50 border-2 border-dashed border-blue-200 rounded-lg p-6 my-8 text-center">
                <p className="text-sm text-blue-600 uppercase mb-2">
                  UNIQUE CONSENT CODE
                </p>
                <p className="text-2xl font-bold text-gray-900 tracking-wider">
                  {mockConsentLetter.consentCode ?? "N/A"}
                </p>
              </div>

              <p>
                I confirm that I am independent of the company and that my
                appointment is in compliance with all applicable legal and
                professional standards.
              </p>
            </div>

            <div className="mt-16 space-y-2">
              <p>Sincerely,</p>
              {/* Display signature if available */}
              <div className="">
                {mockConsentLetter.auditor.sign ? (
                  <>
                    <img
                      src={mockConsentLetter.auditor.sign ?? ''}
                      alt="Auditor's Signature"
                      className="max-w-xs max-h-20 w-auto h-auto object-contain mb-2"
                    />
                    <div
                      className="border-t-2 border-gray-900 pt-4 mt-2 mb-2"
                      style={{ width: "200px" }}
                    ></div>
                  </>
                ) : (
                  <div className="signature-placeholder">
                    <div
                      className="border-t-2 border-gray-900 pt-4 mt-2 mb-2"
                      style={{ width: "200px" }}
                    ></div>
                  </div>
                )}
              </div>
              <p className="font-bold text-gray-900">
                {mockConsentLetter.auditor.name ?? "N/A"}
              </p>
              <p className="text-gray-600">Chartered Accountant (ICAG)</p>
            </div>
          </div>
        </div>
                    </div>
                  )}
                </div>
              )}

              {verificationStatus === 'invalid' && (
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
                    <XCircle className="h-8 w-8 text-red-500" />
                  </div>
                  <h3 className="text-lg font-medium text-red-700 mb-1">Invalid Consent Code</h3>
                  <p className="text-gray-500 max-w-md text-center">
                    The consent code you entered is not valid. Please check the code and try again.
                  </p>
                </div>
              )}
            </div>

            {/* Security Footer */}
            <div className="mt-6 flex items-center justify-center">
              <Lock className="h-4 w-4 text-green-500 mr-2" />
              <span className="text-xs text-gray-500">Secured verification by Ghana ORC & ICAG</span>
            </div>
          </div>
        </div>

        {/* Page Footer Links */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-500">
          <Link to="#" className="hover:text-gray-700">Privacy Policy</Link>
          <Link to="#" className="hover:text-gray-700">Terms of Service</Link>
          <Link to="#" className="hover:text-gray-700">Report Issue</Link>
        </div>
      </div>
    </div>
  );
}