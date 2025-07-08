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
  Rocket,
  Moon,
  Globe,
} from 'lucide-react';

const Launchpad = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      title: 'Welcome to Your Learning Journey',
      subtitle: 'Track your progress, achieve your goals',
      bg: 'bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700',
      image: '🚀',
    },
    {
      title: 'Unlock Premium Features',
      subtitle: 'Get 12 months of premium access for just $49',
      bg: 'bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700',
      image: '✨',
    },
    {
      title: 'Join Our Community',
      subtitle: 'Connect with fellow learners worldwide',
      bg: 'bg-gradient-to-r from-rose-600 via-pink-600 to-purple-700',
      image: '🌍',
    },
  ];

  const ongoingCourses = [
    {
      title: 'Back-End Web Development',
      description: 'Python, SQL, Django',
      duration: '12 Weeks',
      started: '30 Jun 2025',
      progress: 65,
      status: 'active',
    },
    {
      title: 'Professional Foundations',
      description: 'Soft skills and professional development',
      duration: '8 Weeks',
      started: '15 Jul 2025',
      progress: 30,
      status: 'active',
    },
  ];

  const completedCourses = [
    {
      title: 'Frontend Fundamentals',
      description: 'HTML, CSS, JavaScript',
      completedDate: '22 Jun 2025',
      grade: 'A+',
    },
    {
      title: 'Git & Version Control',
      description: 'Essential development tools',
      completedDate: '15 Jun 2025',
      grade: 'A',
    },
  ];

  const recommendedPrograms = [
    {
      title: 'Founder Academy - 6 Weeks',
      description: 'Learn to build and scale startups',
      startDate: '14 Jul 2025',
      duration: '6 weeks',
      instructor: 'Sarah Johnson',
      image: '👨‍💼',
    },
    {
      title: 'Freelancer Academy - 2 Weeks',
      description: 'Master the art of freelancing',
      startDate: '21 Jul 2025',
      duration: '2 weeks',
      instructor: 'Mike Chen',
      image: '💼',
    },
    {
      title: 'Data Science Bootcamp',
      description: 'Analytics and machine learning',
      startDate: '28 Jul 2025',
      duration: '12 weeks',
      instructor: 'Dr. Lisa Park',
      image: '📊',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className='min-h-screen bg-gray-50'>
      {/* Top Navigation */}
      <nav className='bg-white shadow-sm border-b px-6 py-4'>
        <div className='max-w-7xl mx-auto flex items-center justify-between'>
          <div className='flex items-center space-x-2'>
            <Rocket className='h-8 w-8 text-blue-600' />
            <span className='text-2xl font-bold text-gray-800'>Launchpad</span>
          </div>

          <div className='flex items-center space-x-4'>
            <span className='text-sm text-yellow-600 font-medium'>
              2395 points
            </span>
            <Bell className='h-6 w-6 text-gray-600 cursor-pointer hover:text-blue-600' />
            <div className='flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-1'>
              <User className='h-5 w-5 text-gray-600' />
              <span className='text-sm font-medium text-gray-700'>Henry</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Banner Slider */}
      <div className='relative overflow-hidden'>
        <div
          className='flex transition-transform duration-500 ease-in-out'
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {banners.map((banner, index) => (
            <div
              key={index}
              className={`w-full flex-shrink-0 ${banner.bg} text-white py-16 px-6`}
            >
              <div className='max-w-6xl mx-auto text-center'>
                <div className='text-6xl mb-4'>{banner.image}</div>
                <h1 className='text-4xl md:text-5xl font-bold mb-4'>
                  {banner.title}
                </h1>
                <p className='text-xl mb-8 opacity-90'>{banner.subtitle}</p>
                <button className='bg-white text-gray-800 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors'>
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Navigation */}
        <button
          onClick={() =>
            setCurrentSlide(
              (prev) => (prev - 1 + banners.length) % banners.length
            )
          }
          className='absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white'
        >
          <ChevronLeft className='h-6 w-6' />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % banners.length)}
          className='absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 rounded-full p-2 text-white'
        >
          <ChevronRight className='h-6 w-6' />
        </button>

        {/* Slide Indicators */}
        <div className='absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2'>
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-white' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Welcome Section */}
      <div className='max-w-6xl mx-auto px-6 py-8'>
        <div className='bg-white rounded-2xl shadow-sm p-8 mb-8'>
          <h2 className='text-3xl font-bold text-gray-800 mb-4'>
            Welcome back, Henry! 👋
          </h2>
          <p className='text-gray-600 mb-6'>
            Let's turn those lessons into action. Complete your profile to
            unlock more features.
          </p>

          <div className='flex flex-col md:flex-row items-center justify-between'>
            <div className='flex-1 mb-4 md:mb-0 md:mr-8'>
              <div className='flex items-center justify-between mb-2'>
                <span className='text-sm font-medium text-gray-700'>
                  Profile Completion
                </span>
                <span className='text-sm font-medium text-blue-600'>75%</span>
              </div>
              <div className='w-full bg-gray-200 rounded-full h-3'>
                <div
                  className='bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500'
                  style={{ width: '75%' }}
                />
              </div>
            </div>
            <button className='bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all'>
              Complete Profile
            </button>
          </div>
        </div>

        {/* Ongoing Courses */}
        <div className='mb-12'>
          <h3 className='text-2xl font-bold text-gray-800 mb-6 flex items-center'>
            <Play className='h-6 w-6 mr-2 text-blue-600' />
            Ongoing Courses
          </h3>
          <div className='grid md:grid-cols-2 gap-6'>
            {ongoingCourses.map((course, index) => (
              <div
                key={index}
                className='bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow'
              >
                <h4 className='text-xl font-semibold text-gray-800 mb-2'>
                  {course.title}
                </h4>
                <p className='text-gray-600 mb-4'>{course.description}</p>
                <div className='flex items-center text-sm text-gray-500 mb-4'>
                  <Clock className='h-4 w-4 mr-1' />
                  {course.duration} • Started: {course.started}
                </div>
                <div className='mb-4'>
                  <div className='flex items-center justify-between mb-2'>
                    <span className='text-sm font-medium text-gray-700'>
                      Progress
                    </span>
                    <span className='text-sm font-medium text-green-600'>
                      {course.progress}%
                    </span>
                  </div>
                  <div className='w-full bg-gray-200 rounded-full h-2'>
                    <div
                      className='bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full'
                      style={{ width: `${course.progress}%` }}
                    />
                  </div>
                </div>
                <button className='w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors'>
                  Continue Learning
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Completed Courses */}
        <div className='mb-12'>
          <h3 className='text-2xl font-bold text-gray-800 mb-6 flex items-center'>
            <CheckCircle className='h-6 w-6 mr-2 text-green-600' />
            Completed Courses
          </h3>
          <div className='grid md:grid-cols-2 gap-6'>
            {completedCourses.map((course, index) => (
              <div
                key={index}
                className='bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow border-l-4 border-green-500'
              >
                <h4 className='text-xl font-semibold text-gray-800 mb-2'>
                  {course.title}
                </h4>
                <p className='text-gray-600 mb-4'>{course.description}</p>
                <div className='flex items-center justify-between'>
                  <span className='text-sm text-gray-500'>
                    Completed: {course.completedDate}
                  </span>
                  <span className='bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium'>
                    Grade: {course.grade}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recommended Programs */}
        <div className='mb-12'>
          <h3 className='text-2xl font-bold text-gray-800 mb-6 flex items-center'>
            <Star className='h-6 w-6 mr-2 text-yellow-500' />
            Recommended Programs
          </h3>
          <div className='grid md:grid-cols-3 gap-6'>
            {recommendedPrograms.map((program, index) => (
              <div
                key={index}
                className='bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow'
              >
                <div className='text-4xl mb-4'>{program.image}</div>
                <h4 className='text-lg font-semibold text-gray-800 mb-2'>
                  {program.title}
                </h4>
                <p className='text-gray-600 mb-4'>{program.description}</p>
                <div className='space-y-2 mb-4'>
                  <div className='flex items-center text-sm text-gray-500'>
                    <Clock className='h-4 w-4 mr-1' />
                    {program.duration}
                  </div>
                  <div className='flex items-center text-sm text-gray-500'>
                    <Users className='h-4 w-4 mr-1' />
                    {program.instructor}
                  </div>
                </div>
                <p className='text-sm text-blue-600 mb-4'>
                  Start: {program.startDate}
                </p>
                <button className='w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-2 rounded-lg font-medium hover:from-green-700 hover:to-emerald-700 transition-all'>
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Action Cards */}
        <div className='grid md:grid-cols-3 gap-6 mb-12'>
          <div className='bg-gradient-to-br from-blue-500 to-purple-600 text-white p-6 rounded-xl'>
            <Play className='h-8 w-8 mb-4' />
            <h4 className='text-xl font-semibold mb-2'>Start Learning</h4>
            <p className='opacity-90'>
              Access your programs and stay on track with your learning journey.
            </p>
          </div>
          <div className='bg-gradient-to-br from-purple-500 to-pink-600 text-white p-6 rounded-xl'>
            <Users className='h-8 w-8 mb-4' />
            <h4 className='text-xl font-semibold mb-2'>Connect to Community</h4>
            <p className='opacity-90'>
              Collaborate with fellow learners and get support when you need it.
            </p>
          </div>
          <div className='bg-gradient-to-br from-green-500 to-emerald-600 text-white p-6 rounded-xl'>
            <Award className='h-8 w-8 mb-4' />
            <h4 className='text-xl font-semibold mb-2'>Earn Rewards</h4>
            <p className='opacity-90'>
              Collect points and redeem them for exclusive benefits and prizes.
            </p>
          </div>
        </div>
      </div>

      {/* Space-themed Footer */}
      <footer className='bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 text-white relative overflow-hidden'>
        <div className='absolute inset-0 bg-black/20'></div>
        <div className='absolute inset-0'>
          <div className='absolute top-10 left-20 w-2 h-2 bg-white rounded-full animate-pulse'></div>
          <div className='absolute top-20 right-32 w-1 h-1 bg-white rounded-full animate-pulse'></div>
          <div className='absolute bottom-32 left-40 w-1 h-1 bg-white rounded-full animate-pulse'></div>
          <div className='absolute bottom-20 right-20 w-2 h-2 bg-white rounded-full animate-pulse'></div>
          <div className='absolute top-40 left-1/3 w-1 h-1 bg-white rounded-full animate-pulse'></div>
          <div className='absolute bottom-40 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse'></div>
        </div>

        <div className='relative max-w-6xl mx-auto px-6 py-16'>
          <div className='text-center mb-12'>
            <div className='flex items-center justify-center mb-4'>
              <Rocket className='h-12 w-12 mr-4' />
              <span className='text-3xl font-bold'>Launchpad</span>
            </div>
            <p className='text-xl opacity-90'>
              The community of those who Do Hard Things
            </p>
          </div>

          <div className='grid md:grid-cols-4 gap-8 mb-12'>
            <div>
              <h5 className='font-semibold mb-4 flex items-center'>
                <Globe className='h-5 w-5 mr-2' />
                Learning
              </h5>
              <ul className='space-y-2 text-sm opacity-80'>
                <li>Courses</li>
                <li>Programs</li>
                <li>Certifications</li>
                <li>Resources</li>
              </ul>
            </div>
            <div>
              <h5 className='font-semibold mb-4 flex items-center'>
                <Users className='h-5 w-5 mr-2' />
                Community
              </h5>
              <ul className='space-y-2 text-sm opacity-80'>
                <li>Forums</li>
                <li>Study Groups</li>
                <li>Events</li>
                <li>Mentorship</li>
              </ul>
            </div>
            <div>
              <h5 className='font-semibold mb-4 flex items-center'>
                <Award className='h-5 w-5 mr-2' />
                Rewards
              </h5>
              <ul className='space-y-2 text-sm opacity-80'>
                <li>Points System</li>
                <li>Achievements</li>
                <li>Leaderboards</li>
                <li>Prizes</li>
              </ul>
            </div>
            <div>
              <h5 className='font-semibold mb-4 flex items-center'>
                <Moon className='h-5 w-5 mr-2' />
                Support
              </h5>
              <ul className='space-y-2 text-sm opacity-80'>
                <li>Help Center</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
                <li>Terms of Service</li>
              </ul>
            </div>
          </div>

          <div className='border-t border-white/20 pt-8 text-center'>
            <p className='text-sm opacity-75'>
              &copy; {new Date().getFullYear()} Launchpad. All rights reserved.
              <span className='ml-4'>🚀 Launching dreams into reality</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Launchpad;
