const Launchpad = () => {
  return (
    <div className='bg-[#f8fbfd] min-h-screen text-gray-800'>
      {/* Hero Header */}
      <div className='bg-gradient-to-br from-indigo-600 to-blue-500 text-white py-12 px-6 md:px-16'>
        <h1 className='text-3xl md:text-4xl font-bold mb-2'>
          Your Learning Launchpad
        </h1>
        <p className='text-lg'>
          Track your progress, discover programs, and achieve your goals.
        </p>
      </div>

      {/* Intro Card */}
      <div className='max-w-5xl mx-auto mt-8 p-6 bg-white rounded-xl shadow-md space-y-4'>
        <h2 className='text-xl font-semibold'>Welcome back, Henry!</h2>
        <p className='text-gray-600'>
          Let’s turn those lessons into action. Complete your profile to start
          earning legacy points and get personalized recommendations.
        </p>
        <div className='flex items-center justify-between'>
          <div className='w-full md:w-1/2'>
            <p className='text-sm text-gray-500 mb-1'>Profile Completion</p>
            <div className='w-full bg-gray-200 rounded-full h-2.5'>
              <div
                className='bg-blue-600 h-2.5 rounded-full'
                style={{ width: '10%' }}
              ></div>
            </div>
            <p className='text-xs mt-1 text-blue-600'>10% Complete</p>
          </div>
          <button className='bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 mt-4 md:mt-0'>
            Complete Profile
          </button>
        </div>
      </div>

      {/* Ongoing Courses */}
      <div className='max-w-5xl mx-auto mt-10'>
        <h3 className='text-2xl font-semibold mb-4'>Ongoing Courses</h3>
        <div className='grid md:grid-cols-2 gap-6'>
          <div className='bg-white p-5 rounded-xl shadow'>
            <h4 className='font-semibold text-lg'>Back-End Web Development</h4>
            <p className='text-sm text-gray-600 mt-1'>Python, SQL, Django</p>
            <p className='text-sm text-gray-500 mt-2'>
              12 Weeks • Started: 30 Jun 2025
            </p>
            <button className='mt-4 text-sm bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700'>
              Continue Learning
            </button>
          </div>
          <div className='bg-white p-5 rounded-xl shadow opacity-50'>
            <h4 className='font-semibold text-lg'>Advanced Backend Projects</h4>
            <p className='text-sm text-gray-600 mt-1'>Coming Soon</p>
            <p className='text-sm text-gray-500 mt-2'>
              Unlock after completion
            </p>
          </div>
        </div>
      </div>

      {/* Recommended Programs (Carousel) */}
      <div className='max-w-5xl mx-auto mt-12'>
        <h3 className='text-2xl font-semibold mb-4'>Recommended Programs</h3>
        <div className='overflow-x-auto flex space-x-4 pb-4'>
          {[
            { title: 'Founder Academy – 6 Weeks', start: '14 Jul 2025' },
            { title: 'Founder Academy – 2 Weeks', start: 'Rolling' },
            { title: 'Freelancer Academy – 2 Weeks', start: '21 Jul 2025' },
          ].map((program, idx) => (
            <div
              key={idx}
              className='min-w-[300px] bg-white rounded-xl shadow p-4 flex flex-col justify-between'
            >
              <h4 className='text-lg font-semibold mb-1'>{program.title}</h4>
              <p className='text-sm text-gray-500'>Start: {program.start}</p>
              <button className='mt-4 text-sm bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700'>
                Enroll Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Explore Section */}
      <div className='max-w-5xl mx-auto mt-12 grid md:grid-cols-3 gap-6'>
        {[
          {
            title: 'Start Learning',
            desc: 'Access your program and stay on track.',
            color: 'bg-blue-50',
          },
          {
            title: 'Connect to Community',
            desc: 'Collaborate with fellow learners.',
            color: 'bg-purple-50',
          },
          {
            title: 'Earn Rewards',
            desc: 'Redeem your hard-earned points.',
            color: 'bg-green-50',
          },
        ].map((item, idx) => (
          <div key={idx} className={`${item.color} p-6 rounded-xl shadow`}>
            <h5 className='text-lg font-semibold mb-2'>{item.title}</h5>
            <p className='text-sm text-gray-600'>{item.desc}</p>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className='mt-16 text-center text-xs text-gray-500 py-8'>
        &copy; {new Date().getFullYear()} Launchpad. All rights reserved.
      </div>
    </div>
  );
};

export default Launchpad;
