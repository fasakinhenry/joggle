import React, { useState, useEffect } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  User,
  Bell,
  Star,
  Play,
  Clock,
  CheckCircle,
  Users,
  Award,
  BookOpen,
  Target,
  TrendingUp,
  Calendar,
  ArrowRight,
} from 'lucide-react';

const Launchpad = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      title: 'Your ALX Learning Journey Starts Here',
      subtitle: 'Track your progress, achieve your goals',
      cta: 'Start Learning',
      stats: '2,500+ Active Learners',
    },
    {
      title: 'Upgrade to All Access Plus',
      subtitle:
        'Get 12 months of premium programs access for just $49 - saving you $111',
      cta: 'Unlock Now',
      stats: 'Premium Benefits',
    },
    {
      title: 'Join Our Global Community',
      subtitle: 'Connect with fellow learners and industry experts worldwide',
      cta: 'Connect Now',
      stats: '50+ Countries',
    },
  ];

  const ongoingCourses = [
    {
      title: 'Back-End Web Development',
      description:
        "Become a back-end pro and build powerful apps from the ground up. You'll learn how to program with Python and how to use data management tools like SQL.",
      duration: '12 Weeks',
      started: '30 Jun 2025',
      progress: 65,
      nextLesson: 'Django Models & Database Design',
    },
    {
      title: 'Professional Foundations',
      description:
        'Learn key leadership and professional skills that will help you navigate and succeed in the workplace.',
      duration: '8 Weeks',
      started: '15 Jul 2025',
      progress: 30,
      nextLesson: 'Effective Communication Strategies',
    },
  ];

  const completedCourses = [
    {
      title: 'Frontend Web Development',
      description: 'HTML, CSS, JavaScript fundamentals',
      completedDate: '22 Jun 2025',
      grade: 'A+',
      certificate: true,
    },
    {
      title: 'Git & Version Control',
      description: 'Essential development workflow tools',
      completedDate: '15 Jun 2025',
      grade: 'A',
      certificate: true,
    },
  ];

  const recommendedPrograms = [
    {
      title: 'Founder Academy – 6 weeks online',
      description:
        'This program is best suited for aspiring entrepreneurs looking to build their first company.',
      startDate: '14 Jul 2025',
      duration: '6 weeks',
      instructor: 'Sarah Johnson',
      spots: '12 spots left',
    },
    {
      title: 'Freelancer Academy – 2 weeks online',
      description:
        'This program was created for talented, skilled professionals looking to transition into freelancing.',
      startDate: '21 Jul 2025',
      duration: '2 weeks',
      instructor: 'Mike Chen',
      spots: '8 spots left',
    },
    {
      title: 'Data Science Bootcamp',
      description:
        'Master data analysis, machine learning, and statistical modeling for modern applications.',
      startDate: '28 Jul 2025',
      duration: '16 weeks',
      instructor: 'Dr. Lisa Park',
      spots: '5 spots left',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Header */}
      <header className='bg-white border-b border-gray-200'>
        <div className='max-w-7xl mx-auto px-6 py-4'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <div className='w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3'>
                <span className='text-white font-bold text-lg'>L</span>
              </div>
              <span className='text-2xl font-bold text-gray-900'>
                Launchpad
              </span>
            </div>

            <div className='flex items-center space-x-6'>
              <div className='flex items-center space-x-1'>
                <Star className='h-4 w-4 text-yellow-500' />
                <span className='text-sm font-medium text-gray-700'>
                  2395 points
                </span>
              </div>
              <Bell className='h-5 w-5 text-gray-500 cursor-pointer hover:text-blue-600' />
              <div className='flex items-center space-x-2'>
                <div className='w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center'>
                  <User className='h-4 w-4 text-blue-600' />
                </div>
                <span className='text-sm font-medium text-gray-700'>Henry</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <div className='bg-blue-600 text-white relative overflow-hidden'>
        <div className='absolute inset-0 bg-blue-700 opacity-10'></div>
        <div className='relative max-w-7xl mx-auto px-6 py-16'>
          <div className='max-w-3xl'>
            <h1 className='text-5xl font-bold mb-4 leading-tight'>
              {banners[currentSlide].title}
            </h1>
            <p className='text-xl mb-8 opacity-90'>
              {banners[currentSlide].subtitle}
            </p>
            <div className='flex items-center space-x-6'>
              <button className='bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors'>
                {banners[currentSlide].cta}
              </button>
              <span className='text-sm opacity-75'>
                {banners[currentSlide].stats}
              </span>
            </div>
          </div>

          {/* Slide Navigation */}
          <div className='absolute bottom-6 right-6 flex items-center space-x-4'>
            <button
              onClick={() =>
                setCurrentSlide(
                  (prev) => (prev - 1 + banners.length) % banners.length
                )
              }
              className='w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors'
            >
              <ChevronLeft className='h-5 w-5' />
            </button>
            <div className='flex space-x-2'>
              {banners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() =>
                setCurrentSlide((prev) => (prev + 1) % banners.length)
              }
              className='w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors'
            >
              <ChevronRight className='h-5 w-5' />
            </button>
          </div>
        </div>
      </div>

      <div className='max-w-7xl mx-auto px-6 py-12'>
        {/* Welcome Section */}
        <div className='bg-white rounded-xl border border-gray-200 p-8 mb-12'>
          <h2 className='text-3xl font-bold text-gray-900 mb-4'>
            Welcome back, Henry!
          </h2>
          <p className='text-gray-600 mb-8 text-lg'>
            Let's turn those lessons into action. Complete your profile to start
            earning legacy points and get personalized recommendations.
          </p>

          <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between'>
            <div className='flex-1 mb-6 lg:mb-0 lg:mr-12'>
              <div className='flex items-center justify-between mb-3'>
                <span className='text-sm font-medium text-gray-900'>
                  Profile Completion
                </span>
                <span className='text-sm font-bold text-blue-600'>75%</span>
              </div>
              <div className='w-full bg-gray-200 rounded-full h-2'>
                <div
                  className='bg-blue-600 h-2 rounded-full transition-all duration-700'
                  style={{ width: '75%' }}
                />
              </div>
              <p className='text-xs text-gray-500 mt-2'>
                3 of 4 sections completed
              </p>
            </div>
            <button className='bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors'>
              Complete Profile
            </button>
          </div>
        </div>

        {/* Current Programs */}
        <div className='mb-16'>
          <div className='flex items-center justify-between mb-8'>
            <h3 className='text-2xl font-bold text-gray-900'>
              Current Programs
            </h3>
            <button className='text-blue-600 hover:text-blue-700 font-medium flex items-center'>
              View More <ArrowRight className='h-4 w-4 ml-1' />
            </button>
          </div>

          <div className='space-y-6'>
            {ongoingCourses.map((course, index) => (
              <div
                key={index}
                className='bg-white rounded-xl border border-gray-200 p-6'
              >
                <div className='flex items-start justify-between mb-4'>
                  <div className='flex-1'>
                    <h4 className='text-xl font-bold text-gray-900 mb-2'>
                      {course.title}
                    </h4>
                    <p className='text-gray-600 mb-4 leading-relaxed'>
                      {course.description}
                    </p>
                    <div className='flex items-center space-x-6 text-sm text-gray-500'>
                      <div className='flex items-center'>
                        <Clock className='h-4 w-4 mr-1' />
                        {course.duration}
                      </div>
                      <div className='flex items-center'>
                        <Calendar className='h-4 w-4 mr-1' />
                        Started: {course.started}
                      </div>
                    </div>
                  </div>
                  <div className='ml-6 text-right'>
                    <div className='text-2xl font-bold text-blue-600 mb-1'>
                      {course.progress}%
                    </div>
                    <div className='text-sm text-gray-500'>Complete</div>
                  </div>
                </div>

                <div className='mb-4'>
                  <div className='w-full bg-gray-200 rounded-full h-2'>
                    <div
                      className='bg-blue-600 h-2 rounded-full transition-all duration-700'
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>

                <div className='flex items-center justify-between'>
                  <div>
                    <div className='text-sm font-medium text-gray-900'>
                      Next: {course.nextLesson}
                    </div>
                  </div>
                  <button className='bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors'>
                    Continue
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Completed Courses */}
        <div className='mb-16'>
          <h3 className='text-2xl font-bold text-gray-900 mb-8'>
            Completed Courses
          </h3>
          <div className='grid md:grid-cols-2 gap-6'>
            {completedCourses.map((course, index) => (
              <div
                key={index}
                className='bg-white rounded-xl border border-gray-200 p-6'
              >
                <div className='flex items-start justify-between mb-4'>
                  <div className='flex-1'>
                    <h4 className='text-lg font-bold text-gray-900 mb-2'>
                      {course.title}
                    </h4>
                    <p className='text-gray-600 mb-4'>{course.description}</p>
                    <div className='text-sm text-gray-500'>
                      Completed: {course.completedDate}
                    </div>
                  </div>
                  <div className='ml-4 text-right'>
                    <div className='bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium mb-2'>
                      {course.grade}
                    </div>
                    {course.certificate && (
                      <div className='text-xs text-blue-600'>
                        Certificate earned
                      </div>
                    )}
                  </div>
                </div>
                <div className='flex items-center'>
                  <CheckCircle className='h-5 w-5 text-green-500 mr-2' />
                  <span className='text-sm text-green-700 font-medium'>
                    Completed
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Programs */}
        <div className='mb-16'>
          <h3 className='text-2xl font-bold text-gray-900 mb-8'>
            Recommended Programs
          </h3>
          <div className='grid lg:grid-cols-3 gap-6'>
            {recommendedPrograms.map((program, index) => (
              <div
                key={index}
                className='bg-white rounded-xl border border-gray-200 p-6'
              >
                <h4 className='text-lg font-bold text-gray-900 mb-3'>
                  {program.title}
                </h4>
                <p className='text-gray-600 mb-6 leading-relaxed'>
                  {program.description}
                </p>

                <div className='space-y-2 mb-6'>
                  <div className='flex items-center justify-between text-sm'>
                    <span className='text-gray-500'>Start Date:</span>
                    <span className='font-medium text-gray-900'>
                      {program.startDate}
                    </span>
                  </div>
                  <div className='flex items-center justify-between text-sm'>
                    <span className='text-gray-500'>Duration:</span>
                    <span className='font-medium text-gray-900'>
                      {program.duration}
                    </span>
                  </div>
                  <div className='flex items-center justify-between text-sm'>
                    <span className='text-gray-500'>Instructor:</span>
                    <span className='font-medium text-gray-900'>
                      {program.instructor}
                    </span>
                  </div>
                </div>

                <div className='flex items-center justify-between'>
                  <span className='text-sm text-orange-600 font-medium'>
                    {program.spots}
                  </span>
                  <button className='bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors'>
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Explore Section */}
        <div className='grid md:grid-cols-3 gap-6 mb-16'>
          <div className='bg-white rounded-xl border border-gray-200 p-8 text-center'>
            <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <BookOpen className='h-8 w-8 text-blue-600' />
            </div>
            <h4 className='text-xl font-bold text-gray-900 mb-3'>
              Start Learning
            </h4>
            <p className='text-gray-600'>
              Access your programs and stay on track with your learning journey
              here.
            </p>
          </div>

          <div className='bg-white rounded-xl border border-gray-200 p-8 text-center'>
            <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Users className='h-8 w-8 text-blue-600' />
            </div>
            <h4 className='text-xl font-bold text-gray-900 mb-3'>
              Connect to Community
            </h4>
            <p className='text-gray-600'>
              Collaborate with fellow learners to get support and celebrate
              successes.
            </p>
          </div>

          <div className='bg-white rounded-xl border border-gray-200 p-8 text-center'>
            <div className='w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <Award className='h-8 w-8 text-blue-600' />
            </div>
            <h4 className='text-xl font-bold text-gray-900 mb-3'>
              Earn Rewards
            </h4>
            <p className='text-gray-600'>
              Check how many Legacy Points you have earned and how you can
              redeem them.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className='bg-gray-900 text-white'>
        <div className='max-w-7xl mx-auto px-6 py-12'>
          <div className='grid md:grid-cols-5 gap-8 mb-8'>
            <div className='md:col-span-2'>
              <div className='flex items-center mb-4'>
                <div className='w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center mr-3'>
                  <span className='text-white font-bold'>L</span>
                </div>
                <span className='text-xl font-bold'>Launchpad</span>
              </div>
              <p className='text-gray-400 mb-4'>
                The community of those who Do Hard Things
              </p>
            </div>

            <div>
              <h5 className='font-semibold mb-4'>Learning</h5>
              <ul className='space-y-2 text-sm text-gray-400'>
                <li>
                  <a href='#' className='hover:text-white'>
                    Home
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white'>
                    Programs
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white'>
                    Courses
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white'>
                    Resources
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className='font-semibold mb-4'>Community</h5>
              <ul className='space-y-2 text-sm text-gray-400'>
                <li>
                  <a href='#' className='hover:text-white'>
                    Forums
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white'>
                    Events
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white'>
                    Study Groups
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white'>
                    Mentorship
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className='font-semibold mb-4'>Support</h5>
              <ul className='space-y-2 text-sm text-gray-400'>
                <li>
                  <a href='#' className='hover:text-white'>
                    Help Center
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white'>
                    Contact
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white'>
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href='#' className='hover:text-white'>
                    Terms
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className='border-t border-gray-800 pt-8 text-center'>
            <p className='text-sm text-gray-400'>
              &copy; {new Date().getFullYear()} Launchpad. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Launchpad;
