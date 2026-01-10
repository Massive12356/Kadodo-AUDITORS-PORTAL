import { useState } from 'react';
import { Star, BadgeCheck, Info, ArrowRight, X } from 'lucide-react';
import { useParams, useNavigate } from 'react-router-dom';
import CompanyLayout from '../components/CompanyLayout';

export default function ReviewAuditorScreen() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // State for form data
  const [overallRating, setOverallRating] = useState(0);
  const [professionalism, setProfessionalism] = useState('');
  const [communication, setCommunication] = useState('');
  const [timeliness, setTimeliness] = useState('');
  const [technicalExpertise, setTechnicalExpertise] = useState('');
  const [detailedFeedback, setDetailedFeedback] = useState('');
  const [certification, setCertification] = useState(false);
  
  // Mock auditor data based on ID
  const auditor = {
    id: id || '1',
    name: 'Kwame & Associates',
    license: 'ICAG-2023-0045',
    category: 'A1',
    engagementDate: 'Aug 12, 2023',
    firmImage: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
  };

  const handleCancel = () => {
    navigate(-1); // Go back to previous page
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      overallRating,
      professionalism,
      communication,
      timeliness,
      technicalExpertise,
      detailedFeedback,
      certification
    });
    // Navigate to success page or show success message
    navigate('/auditor-management');
  };

  // Star rating component
  const StarRating = ({ rating, setRating }: { rating: number; setRating: (value: number) => void }) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => setRating(star)}
            className="focus:outline-none"
          >
            <Star
              className={`h-8 w-8 ${
                star <= rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
              }`}
            />
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto p-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Review Your Auditor</h1>
          <p className="text-gray-600 mt-2 font-medium">
            Share your feedback on the audit engagement for <strong className='text-black'>Apex Solutions Ltd.</strong>  regarding the financial year ending <strong>{new Date().getFullYear()}.</strong> 
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Information Panel */}
          <div className="lg:col-span-1 space-y-6">
            {/* Auditor Card */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <div className="mb-4">
                <img 
                  src={auditor.firmImage} 
                  alt={auditor.name} 
                  className="w-full h-40 object-cover rounded-lg"
                />
              </div>
              
              <div className="mb-4">
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide">Auditing Firm</p>
                <p className="text-lg font-bold text-gray-900">{auditor.name}</p>
                <div className="flex items-center mt-1">
                  <BadgeCheck className="h-4 w-4 text-blue-500 fill-blue-500 mr-1" />
                  <span className="text-sm text-blue-600">ICAG Licensed</span>
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">License No:</span>
                    <span className="text-sm font-medium text-gray-900">{auditor.license}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Category:</span>
                    <span className="text-sm font-medium text-gray-900">
                      <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                        {auditor.category}
                      </span>
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Engagement Date:</span>
                    <span className="text-sm font-medium text-gray-900">{auditor.engagementDate}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Review Guidelines Card */}
            <div className="bg-blue-50 rounded-xl border border-blue-200 p-5">
              <div className="flex items-start">
                <Info className="h-5 w-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Review Guidelines</h3>
                  <ul className="space-y-1 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Be honest and objective</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Focus on the professional conduct</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Reviews are moderated by ICAG</span>
                    </li>
                    <li className="flex items-start">
                      <span className="mr-2">•</span>
                      <span>Your review helps maintain audit quality standards in Ghana</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Review Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <form onSubmit={handleSubmit}>
                {/* Overall Rating Section */}
                <div className="mb-6">
                  <h2 className="text-lg font-bold text-gray-900 mb-2">Overall Rating</h2>
                  <p className="text-gray-600 text-sm mb-4">
                    How would you rate your overall experience with this auditor?
                  </p>
                  <StarRating rating={overallRating} setRating={setOverallRating} />
                  <div className="border-t border-gray-200 mt-4 pt-4"></div>
                </div>

                {/* Category Ratings */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Professionalism
                    </label>
                    <select
                      value={professionalism}
                      onChange={(e) => setProfessionalism(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="">Select a rating</option>
                      <option value="excellent">Excellent</option>
                      <option value="good">Good</option>
                      <option value="average">Average</option>
                      <option value="poor">Poor</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Communication
                    </label>
                    <select
                      value={communication}
                      onChange={(e) => setCommunication(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="">Select a rating</option>
                      <option value="excellent">Excellent</option>
                      <option value="good">Good</option>
                      <option value="average">Average</option>
                      <option value="poor">Poor</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Timeliness
                    </label>
                    <select
                      value={timeliness}
                      onChange={(e) => setTimeliness(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="">Select a rating</option>
                      <option value="excellent">Excellent</option>
                      <option value="good">Good</option>
                      <option value="average">Average</option>
                      <option value="poor">Poor</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-bold text-gray-900 mb-2">
                      Technical Expertise
                    </label>
                    <select
                      value={technicalExpertise}
                      onChange={(e) => setTechnicalExpertise(e.target.value)}
                      className="w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                      <option value="">Select a rating</option>
                      <option value="excellent">Excellent</option>
                      <option value="good">Good</option>
                      <option value="average">Average</option>
                      <option value="poor">Poor</option>
                    </select>
                  </div>
                </div>

                {/* Detailed Feedback Section */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <label className="block text-sm font-bold text-gray-900">
                      Detailed Feedback
                    </label>
                    <span className="text-xs text-gray-500">
                      Max 2000 characters
                    </span>
                  </div>
                  <textarea
                    value={detailedFeedback}
                    onChange={(e) => setDetailedFeedback(e.target.value)}
                    maxLength={2000}
                    placeholder="Please describe the specifics of your experience. Was the audit conducted thoroughly? Were issues communicated clearly?"
                    className="w-full h-40 rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>

                {/* Certification Checkbox */}
                <div className="mb-8">
                  <div className="flex items-start">
                    <input
                      type="checkbox"
                      id="certification"
                      checked={certification}
                      onChange={(e) => setCertification(e.target.checked)}
                      className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                    <label htmlFor="certification" className="ml-2 text-sm text-gray-700">
                      I certify that this review is based on my own genuine experience with Kwame & Associates during the audit engagement period stated. I understand that false declarations may be investigated by the ICAG.
                    </label>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex justify-end space-x-3">
                  <button
                    type="button"
                    onClick={handleCancel}
                    className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg text-sm font-medium transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={!certification}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center ${
                      certification
                        ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'
                        : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    Submit Review
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-12 border-t border-gray-200 py-6">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-xs text-gray-500">
            © 2024 Office of the Registrar of Companies (ORC) & Institute of Chartered Accountants, Ghana (ICAG). All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}