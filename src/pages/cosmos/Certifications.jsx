import React, { useState } from 'react';
import { Rocket, Filter, BadgeCheck, Download, Star, Award, Lock } from 'lucide-react';

const Certifications = () => {
  const [activeTab, setActiveTab] = useState('certifications');
  const [filters, setFilters] = useState({
    category: 'all',
    difficulty: 'all',
    status: 'all',
  });

  const certifications = [
    {
      id: 1,
      title: 'Introduction to Rocket Science',
      description: 'Learn the basics of rocket propulsion and space travel.',
      category: 'Science',
      difficulty: 'Beginner',
      progress: 85,
      enrolled: true,
      level: 'Novice Astronaut',
    },
    {
      id: 2,
      title: 'Advanced Stellar Navigation',
      description: 'Master navigation techniques for interstellar voyages.',
      category: 'Navigation',
      difficulty: 'Intermediate',
      progress: 45,
      enrolled: true,
      level: 'Junior Navigator',
    },
    {
      id: 3,
      title: 'Galactic Engineering',
      description: 'Design and build structures for space colonies.',
      category: 'Engineering',
      difficulty: 'Advanced',
      progress: 10,
      enrolled: false,
      level: 'Apprentice Engineer',
    },
  ];

  const certificates = [
    {
      id: 1,
      title: 'Rocket Science Certificate',
      issuedDate: 'June 15, 2025',
      format: 'PDF',
    },
    {
      id: 2,
      title: 'Stellar Navigation Certificate',
      issuedDate: 'July 1, 2025',
      format: 'PDF',
    },
  ];

  const userJourney = [
    { milestone: 'Enrolled in First Course', date: 'May 20, 2025', completed: true },
    { milestone: 'Reached 50% Progress', date: 'June 10, 2025', completed: true },
    { milestone: 'Earned First Certificate', date: 'June 15, 2025', completed: true },
    { milestone: 'Achieved Intermediate Level', date: 'July 5, 2025', completed: false },
  ];

  const availableBadges = [
    { id: 1, name: 'Nova Explorer', image: '/badges/nova-explorer.png', criteria: 'Complete 1 certification', locked: false },
    { id: 2, name: 'Stellar Pioneer', image: '/badges/stellar-pioneer.png', criteria: 'Complete 2 certifications', locked: true },
    { id: 3, name: 'Galaxy Trailblazer', image: '/badges/galaxy-trailblazer.png', criteria: 'Complete 3 certifications', locked: true },
  ];

  const [userBadges, setUserBadges] = useState(availableBadges.filter(badge => !badge.locked && !availableBadges.some(b => b.id < badge.id && b.locked)));

  const filteredCerts = certifications.filter((cert) => {
    return (
      (filters.category === 'all' || cert.category === filters.category) &&
      (filters.difficulty === 'all' || cert.difficulty === filters.difficulty) &&
      (filters.status === 'all' || (filters.status === 'enrolled' ? cert.enrolled : !cert.enrolled))
    );
  });

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleDownload = (cert) => {
    console.log(`Downloading ${cert.title} as ${cert.format}`);
    // Add actual download implementation
  };

  const awardBadge = (badgeId) => {
    const badgeToAward = availableBadges.find(badge => badge.id === badgeId && !badge.locked && !userBadges.some(b => b.id === badgeId));
    if (badgeToAward) {
      setUserBadges([...userBadges, badgeToAward]);
      console.log(`Awarded ${badgeToAward.name} to user`);
    }
  };

  return (
    <div className='flex flex-col lg:flex-row flex-1 overflow-auto gap-6 p-4 sm:p-6 bg-gray-50'>
      {/* Main Content */}
      <div className='flex-1 rounded-2xl p-6 overflow-auto bg-white shadow-sm border border-gray-200'>
        <div className='border-b border-gray-200 mb-6'>
          <nav className='-mb-px flex space-x-8'>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`${
                activeTab === 'certifications'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 text-sm font-medium`}
            >
              Certifications
            </button>
            <button
              onClick={() => setActiveTab('documents')}
              className={`${
                activeTab === 'documents'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 text-sm font-medium`}
            >
              Documents
            </button>
            <button
              onClick={() => setActiveTab('badges')}
              className={`${
                activeTab === 'badges'
                  ? 'border-b-2 border-blue-600 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              } whitespace-nowrap py-4 px-1 text-sm font-medium`}
            >
              Badges
            </button>
          </nav>
        </div>

        {activeTab === 'certifications' && (
          <>
            <h1 className='text-3xl font-bold text-gray-900 mb-6'>Certifications</h1>
            <p className='text-gray-600 mb-4'>
              Explore various certifications to enhance your skills and career.
            </p>
            <div className='space-y-4'>
              {filteredCerts.map((cert) => (
                <div
                  key={cert.id}
                  className='bg-gray-50 p-4 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors'
                >
                  <div className='flex justify-between items-start'>
                    <div>
                      <h2 className='text-xl font-semibold text-gray-900'>{cert.title}</h2>
                      <p className='text-gray-600'>{cert.description}</p>
                      <p className='text-sm text-gray-500 mt-1'>
                        Category: {cert.category} | Difficulty: {cert.difficulty} | Level: {cert.level}
                      </p>
                    </div>
                    <div className='text-right'>
                      <p className='text-sm text-gray-600'>Progress: {cert.progress}%</p>
                      <div className='w-24 bg-gray-200 h-2 rounded-full mt-1'>
                        <div
                          className='bg-blue-600 h-2 rounded-full'
                          style={{ width: `${cert.progress}%` }}
                        />
                      </div>
                      <button
                        className={`mt-2 px-3 py-1 rounded text-sm ${
                          cert.enrolled
                            ? 'bg-blue-600 text-white hover:bg-blue-700'
                            : 'bg-gray-200 text-gray-700 border border-gray-300 hover:bg-gray-300'
                        }`}
                        disabled={!cert.enrolled}
                      >
                        {cert.enrolled ? 'Start Course' : 'Enroll'}
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeTab === 'documents' && (
          <div className='space-y-4'>
            <h1 className='text-3xl font-bold text-gray-900 mb-6'>Certificates</h1>
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className='bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow'
              >
                <div className='flex justify-between items-center'>
                  <div>
                    <h2 className='text-xl font-semibold text-gray-900'>{cert.title}</h2>
                    <p className='text-sm text-gray-600'>Issued: {cert.issuedDate}</p>
                  </div>
                  <select
                    onChange={(e) => handleDownload({ ...cert, format: e.target.value })}
                    className='p-1 border border-gray-200 rounded text-sm text-gray-700 bg-white'
                    defaultValue={cert.format}
                  >
                    <option value='PDF'>PDF</option>
                    <option value='PNG'>PNG</option>
                    <option value='DOCX'>DOCX</option>
                  </select>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'badges' && (
          <div className='space-y-6'>
            <h1 className='text-3xl font-bold text-gray-900 mb-6'>Badges</h1>
            <div>
              <h2 className='text-xl font-semibold text-gray-900 mb-4'>Available Badges</h2>
              <div className='space-y-4'>
                {availableBadges.map((badge) => (
                  <div
                    key={badge.id}
                    className='bg-gray-50 p-4 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors flex justify-between items-center'
                  >
                    <div className='flex items-center'>
                      <img
                        src={badge.image}
                        alt={badge.name}
                        className='w-18 h-18 mr-2 object-cover rounded-full'
                      />
                      <div>
                        <h3 className='text-lg font-semibold text-gray-900'>{badge.name}</h3>
                        <p className='text-sm text-gray-600'>{badge.criteria}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => awardBadge(badge.id)}
                      className={`px-3 py-1 rounded text-sm ${
                        badge.locked || userBadges.some(b => b.id === badge.id)
                          ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}
                      disabled={badge.locked || userBadges.some(b => b.id === badge.id)}
                    >
                      {badge.locked ? <Lock className='w-4 h-4' /> : 'Award'}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h2 className='text-xl font-semibold text-gray-900 mb-4'>Your Badges</h2>
              <div className='grid grid-cols-2 gap-4'>
                {userBadges.map((badge) => (
                  <div
                    key={badge.id}
                    className='bg-gray-50 p-4 rounded-lg border border-gray-200 hover:bg-gray-100 transition-colors flex items-center'
                  >
                    <img
                      src={badge.image}
                      alt={badge.name}
                      className='w-12 h-12 mr-2 object-cover rounded-full'
                    />
                    <h3 className='text-lg font-semibold text-gray-900'>{badge.name}</h3>
                  </div>
                ))}
                {userBadges.length === 0 && (
                  <p className='text-gray-500'>No badges earned yet. Complete certifications to unlock badges!</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Right Panel */}
      <div className='w-full lg:w-80 rounded-2xl bg-white shadow-sm p-6 border border-gray-200'>
        <h2 className='text-xl font-semibold text-gray-900 mb-4'>Filters</h2>
        <div className='space-y-4'>
          <div>
            <label className='text-sm text-gray-600 mb-1 block'>Category</label>
            <select
              name='category'
              value={filters.category}
              onChange={handleFilterChange}
              className='w-full p-2 border border-gray-200 rounded bg-white text-gray-900'
            >
              <option value='all'>All Categories</option>
              <option value='Science'>Science</option>
              <option value='Navigation'>Navigation</option>
              <option value='Engineering'>Engineering</option>
            </select>
          </div>
          <div>
            <label className='text-sm text-gray-600 mb-1 block'>Difficulty</label>
            <select
              name='difficulty'
              value={filters.difficulty}
              onChange={handleFilterChange}
              className='w-full p-2 border border-gray-200 rounded bg-white text-gray-900'
            >
              <option value='all'>All Levels</option>
              <option value='Beginner'>Beginner</option>
              <option value='Intermediate'>Intermediate</option>
              <option value='Advanced'>Advanced</option>
            </select>
          </div>
          <div>
            <label className='text-sm text-gray-600 mb-1 block'>Status</label>
            <select
              name='status'
              value={filters.status}
              onChange={handleFilterChange}
              className='w-full p-2 border border-gray-200 rounded bg-white text-gray-900'
            >
              <option value='all'>All Statuses</option>
              <option value='enrolled'>Enrolled</option>
              <option value='not-enrolled'>Not Enrolled</option>
            </select>
          </div>
        </div>
        {/* User Journey */}
        <div className='mt-6'>
          <h3 className='text-lg font-semibold text-gray-900 mb-2'>User Journey</h3>
          <ul className='space-y-2'>
            {userJourney.map((step, index) => (
              <li key={index} className='flex items-center text-sm'>
                <span
                  className={`w-2 h-2 rounded-full mr-2 ${
                    step.completed ? 'bg-green-500' : 'bg-gray-300'
                  }`}
                />
                <span className={step.completed ? 'text-gray-700' : 'text-gray-400'}>
                  {step.milestone} ({step.date})
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
