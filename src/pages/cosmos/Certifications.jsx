const Certifications = () => {
  return (
    <div className='flex flex-col lg:flex-row flex-1 overflow-auto gap-6 p-4 sm:p-6'>
      {/* Main Content */}
      <div className='flex-1 rounded-2xl sm:p-6 overflow-auto bg-white shadow-sm'>
        <h1 className='text-3xl font-bold text-gray-900 mb-6'>
          Certifications
        </h1>
        <p className='text-gray-600 mb-4'>
          Explore various certifications to enhance your skills and career.
        </p>
        {/* Certification content goes here */}
        <div className='space-y-4'>
          <div className='bg-gray-100 p-4 rounded-lg'>
            <h2 className='text-xl font-semibold'>Certification Name</h2>
            <p className='text-gray-500'>Description of the certification.</p>
          </div>
          {/* Repeat for more certifications */}
        </div>
      </div>

      {/* Right Panel – stacked below on mobile, side on desktop */}
      <div className='w-full lg:w-80 rounded-2xl bg-white shadow-sm sm:p-6'>
        {/* Right panel content like filters, stats, etc. */}
        <h2 className='text-xl font-semibold mb-4'>Filters</h2>
        {/* Filter options go here */}
      </div>
    </div>
  );
};

export default Certifications;
