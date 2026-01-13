import { useState } from 'react';
import { Search, MapPin, Briefcase, Star, BadgeCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import CompanyLayout from '../components/CompanyLayout';
import w1 from '../assets/w1.jpg'
import w2 from '../assets/w2.jpg'
import w3 from '../assets/w3.jpg'
import img1 from '../assets/img3.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img4.jpg'

export default function AuditorSearchScreen() {
  const [searchQuery, setSearchQuery] = useState('');
  const [region, setRegion] = useState('All Regions');
  const [specializations, setSpecializations] = useState<string[]>([]);
  const [minRating, setMinRating] = useState(0);
  const [availableNow, setAvailableNow] = useState(false);
  const [sortBy, setSortBy] = useState('Relevance');
  const [currentPage, setCurrentPage] = useState(1);

  // Mock data for auditors
  const auditors = [
    {
      id: 1,
      name: 'Kwame Mensah',
      firm: 'Mensah & Associates',
      location: 'Accra, Greater Accra',
      experience: 12,
      rating: 4.8,
      reviewCount: 24,
      specializations: ['Tax Audit', 'Forensic Accounting'],
      status: 'Active',
      categorization: 'A1',
      profilePhoto: img1
    },
    {
      id: 2,
      name: 'Adjoa Asante',
      firm: 'Asante & Partners',
      location: 'Kumasi, Ashanti',
      experience: 8,
      rating: 4.9,
      reviewCount: 18,
      specializations: ['Small Business', 'Risk Advisory'],
      status: 'Active',
      categorization: 'B1',
      profilePhoto: w1
    },
    {
      id: 3,
      name: 'Yaw Osei',
      firm: 'Osei Consulting Group',
      location: 'Takoradi, Western',
      experience: 15,
      rating: 4.7,
      reviewCount: 32,
      specializations: ['Tax Audit', 'Consulting'],
      status: 'Active',
      categorization: 'A',
      profilePhoto: img2
    },
    {
      id: 4,
      name: 'Akosua Darko',
      firm: 'Darko & Co. Chartered Accountants',
      location: 'Cape Coast, Central',
      experience: 10,
      rating: 4.6,
      reviewCount: 15,
      specializations: ['Forensic Accounting', 'Risk Advisory'],
      status: 'Active',
      categorization: 'C',
      profilePhoto: w3
    },
    {
      id: 5,
      name: 'Kofi Boateng',
      firm: 'Boateng & Associates',
      location: 'Ho, Volta',
      experience: 9,
      rating: 4.5,
      reviewCount: 21,
      specializations: ['Small Business', 'Tax Audit'],
      status: 'Active',
      categorization: 'D',
      profilePhoto: img3
    },
    {
      id: 6,
      name: 'Esi Anim',
      firm: 'Anim & Partners CPA',
      location: 'Tamale, Northern',
      experience: 14,
      rating: 4.9,
      reviewCount: 28,
      specializations: ['Consulting', 'Risk Advisory'],
      status: 'Active',
      categorization: 'A',
      profilePhoto: w2
    }
  ];

  const regions = [
    'All Regions',
    'Greater Accra',
    'Ashanti',
    'Western',
    'Central',
    'Eastern',
    'Northern',
    'Volta',
    'Brong-Ahafo',
    'Upper East',
    'Upper West'
  ];

  const toggleSpecialization = (spec: string) => {
    if (specializations.includes(spec)) {
      setSpecializations(specializations.filter(item => item !== spec));
    } else {
      setSpecializations([...specializations, spec]);
    }
  };

  // Filter auditors based on search and filter criteria
  const filteredAuditors = auditors.filter(auditor => {
    // Search query filter (name, firm, or registration number)
    const matchesSearch = 
      searchQuery === '' ||
      auditor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      auditor.firm.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Region filter
    const matchesRegion = 
      region === 'All Regions' || 
      auditor.location.includes(region);
    
    // Specialization filter
    const matchesSpecialization = 
      specializations.length === 0 || 
      specializations.some(spec => auditor.specializations.includes(spec));
    
    // Rating filter
    const matchesRating = auditor.rating >= minRating;
    
    // Available now filter (simplified - in a real app, this would check actual availability)
    const matchesAvailability = true; // All auditors are considered available
    
    return matchesSearch && matchesRegion && matchesSpecialization && matchesRating && matchesAvailability;
  });

  // Sort auditors based on selected sort option
  const sortedAuditors = [...filteredAuditors].sort((a, b) => {
    switch (sortBy) {
      case 'Rating':
        return b.rating - a.rating;
      case 'Experience':
        return b.experience - a.experience;
      case 'Name':
        return a.name.localeCompare(b.name);
      default:
        return 0; // Default is relevance (no sorting)
    }
  });

  const totalPages = 5; // Mock total pages for pagination

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
      <div className="max-w-7xl mx-auto p-6">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Find an ICAG-Registered Auditor</h1>
          <p className="text-gray-600">
            Search the official directory to appoint a verified auditor for your company registration. 
            All listed professionals are accredited by the Institute of Chartered Accountants, Ghana (ICAG).
          </p>
        </div>

        {/* Search Bar Section */}
        <div className="mb-8">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by Auditor Name, Firm Name or Registration Number…"
              className="block w-full pl-10 pr-32 py-3 border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button className="absolute right-2.5 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-1.5 rounded-lg hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>
        </div>

        {/* Main Layout (Two Columns) */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Left Sidebar - Filters */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Filters</h2>
                <button 
                  className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                  onClick={() => {
                    setRegion('All Regions');
                    setSpecializations([]);
                    setMinRating(0);
                    setAvailableNow(false);
                  }}
                >
                  Reset All
                </button>
              </div>

              {/* Region Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Region / Location</label>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {regions.map(regionOption => (
                    <option key={regionOption} value={regionOption}>{regionOption}</option>
                  ))}
                </select>
              </div>

              {/* Specialization Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Specialization</label>
                <div className="space-y-2">
                  {['Tax Audit', 'Forensic Accounting', 'Small Business', 'Risk Advisory'].map(spec => (
                    <div key={spec} className="flex items-center">
                      <input
                        type="checkbox"
                        id={`spec-${spec}`}
                        checked={specializations.includes(spec)}
                        onChange={() => toggleSpecialization(spec)}
                        className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                      />
                      <label htmlFor={`spec-${spec}`} className="ml-2 text-sm text-gray-700">
                        {spec}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Minimum Rating Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">Minimum Rating</label>
                <div className="space-y-2">
                  {[5, 4].map(rating => (
                    <div key={rating} className="flex items-center">
                      <input
                        type="radio"
                        id={`rating-${rating}`}
                        name="min-rating"
                        checked={minRating === rating}
                        onChange={() => setMinRating(rating)}
                        className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                      />
                      <label htmlFor={`rating-${rating}`} className="ml-2 text-sm text-gray-700 flex items-center">
                        {Array.from({ length: rating }).map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                        <span className="ml-1">& Up</span>
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Available Now Filter */}
              <div className="mb-6">
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-medium text-gray-700">Available Now</label>
                  <div className="relative inline-block w-10 mr-2 align-middle select-none">
                    <input
                      type="checkbox"
                      checked={availableNow}
                      onChange={(e) => setAvailableNow(e.target.checked)}
                      className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
                    />
                    <label className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer"></label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Results */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
              <h2 className="text-lg font-medium text-gray-900 mb-2 sm:mb-0">Showing {sortedAuditors.length} verified auditors</h2>
              <div className="flex items-center">
                <label className="text-sm font-medium text-gray-700 mr-2">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="Relevance">Relevance</option>
                  <option value="Rating">Highest Rated</option>
                  <option value="Experience">Most Experience</option>
                  <option value="Name">Name A-Z</option>
                </select>
              </div>
            </div>

            {/* Auditor Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {sortedAuditors.length > 0 ? (
                sortedAuditors.map(auditor => (
                  <div key={auditor.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                    {/* Top Section */}
                    <div className="p-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0">
                          <img 
                            src={auditor.profilePhoto} 
                            alt={auditor.name} 
                            className="w-16 h-16 rounded-full object-cover border-2 border-gray-200"
                          />
                        </div>
                        <div className="flex items-center justify-between ml-3 w-full">
                            <div>
                              <h3 className="text-lg font-bold text-gray-900">{auditor.name}</h3>
                              <p className="text-gray-500 text-sm font-semibold">{auditor.firm}</p>
                            </div>
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                              <BadgeCheck className="h-4 w-4 text-white mr-1 fill-green-700" />
                              {auditor.status}
                            </span>
                          </div>
                      </div>
                      
                      <div className="ml-4 flex-1">
                          {/* Details Row */}
                          <div className="flex flex-col space-y-1 text-sm text-gray-500 mt-2">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2 text-gray-400 fill-gray-400" />
                              <span className="text-gray-500 text-sm font-semibold">{auditor.location}</span>
                            </div>
                            <div className="flex items-center">
                              <Briefcase className="h-4 w-4 mr-2 text-gray-400 fill-gray-400" />
                              <span className="text-gray-500 text-sm font-semibold">{auditor.experience} years of Experience</span>
                            </div>
                            <div className="flex items-center">
                              <Star className="h-4 w-4 mr-2 text-gray-400 fill-gray-400" />
                              <span> <span className='font-bold text-black mr-1'>{auditor.rating}</span>({auditor.reviewCount} Reviews)</span>
                            </div>
                            <div className="flex items-center">
                              <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-0.5 rounded">
                                Cat: {auditor.categorization}
                              </span>
                            </div>
                          </div>
                        </div>
                      {/* Specialization Tags */}
                      <div className="flex flex-wrap gap-2 mt-4">
                        {auditor.specializations.map((spec, index) => (
                          <span 
                            key={index} 
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="bg-gray-50 px-6 py-4 flex justify-between">
                      <Link to={`/auditor-profile/${auditor.id}`} className="text-blue-600 hover:text-blue-800 font-medium text-sm">
                        View Profile
                      </Link>
                      <Link to={`/request-engagement/${auditor.id}`} className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-blue-700 transition-colors inline-block">
                        Request Engagement
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500 text-lg">No auditors found matching your criteria.</p>
                  <button 
                    onClick={() => {
                      setSearchQuery('');
                      setRegion('All Regions');
                      setSpecializations([]);
                      setMinRating(0);
                      setAvailableNow(false);
                    }}
                    className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex justify-center">
              <nav className="flex items-center space-x-2">
                <button
                  onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                  className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={currentPage === 1}
                >
                  Previous
                </button>
                
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`px-3 py-2 rounded-lg border ${
                      currentPage === page
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {page}
                  </button>
                ))}
                
                <button
                  onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                  className="px-3 py-2 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled={currentPage === totalPages}
                >
                  Next
                </button>
              </nav>
            </div>
          </div>
        </div>
      </div>
  );
}