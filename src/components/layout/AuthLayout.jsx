import React from 'react';

const AuthLayout = ({ children, title, subtitle, heroTitle, heroSubtitle }) => {
  return (
    <div className='min-h-screen flex'>
      {/* Left Side - Hero Section */}
      <div className='hidden lg:flex lg:w-1/2 relative overflow-hidden'>
        {/* Background Image */}
        <div
          className='absolute inset-0'
          style={{
            backgroundImage: "url('/joggle-image2.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center bottom',
          }}
        />

        {/* Gradient Overlay */}
        <div className='absolute inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/10 to-pink-800 opacity-80'></div>

        {/* Black Overlay for Readability */}
        <div className='absolute inset-0 bg-black/70'></div>

        {/* Background Pattern */}
        {/* <div className='absolute inset-0 opacity-10'>
          <div className='absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-lg transform rotate-12'></div>
          <div className='absolute top-40 right-32 w-24 h-24 border border-white/20 rounded-lg transform -rotate-12'></div>
          <div className='absolute bottom-32 left-32 w-28 h-28 border border-white/20 rounded-lg transform rotate-45'></div>
          <div className='absolute bottom-20 right-20 w-20 h-20 border border-white/20 rounded-lg transform -rotate-45'></div>
        </div> */}

        {/* Hero Content */}
        <div className='relative z-10 flex flex-col justify-center px-12 lg:px-16 xl:px-20 text-white'>
          {/* <div className='mb-8'>
            <h1
              className='text-white text-3xl font-bold mb-2 tracking-tight'
              style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}
            >
              joggle
            </h1>
          </div> */}

          <div className='max-w-md'>
            <h2
              className='text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight'
              style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}
            >
              {heroTitle}
            </h2>
            <p
              className='text-lg lg:text-xl text-white/90 leading-relaxed'
              style={{ fontFamily: 'Geist, sans-serif' }}
            >
              {heroSubtitle}
            </p>
          </div>

          {/* Floating Elements */}
          {/* <div className='absolute bottom-20 right-20 hidden xl:block'>
            <div className='w-16 h-16 bg-white/10 rounded-full backdrop-blur-sm border border-white/20'></div>
          </div>
          <div className='absolute top-32 right-16 hidden xl:block'>
            <div className='w-12 h-12 bg-white/10 rounded-full backdrop-blur-sm border border-white/20'></div>
          </div> */}
        </div>
      </div>

      {/* Right Side - Form Section */}
      <div className='flex-1 flex items-center justify-center px-6 sm:px-8 lg:px-12 bg-white'>
        <div className='w-full max-w-md'>
          <div className='text-center mb-8 lg:hidden'>
            <h1
              className='text-4xl font-bold text-indigo-600 my-4'
              style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}
            >
              Joggle
            </h1>
          </div>

          <div className='text-center mb-8'>
            <h2
              className='text-3xl sm:text-3xl font-bold text-gray-900 mt-2'
              style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}
            >
              {title}
            </h2>
            {subtitle && (
              <p
                className='text-gray-600 text-lg'
                style={{ fontFamily: 'Geist, sans-serif' }}
              >
                {subtitle}
              </p>
            )}
          </div>

          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
