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
  Activity,
  Zap,
  MessageCircle,
  Video,
  Trophy,
  Flame,
  BarChart3,
  PlusCircle,
} from 'lucide-react';

const Launchpad = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const banners = [
    {
      title: 'Welcome to Joggle LaunchPad',
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

  const recentActivity = [
    {
      type: 'lesson',
      title: 'Completed Django Forms & Validation',
      course: 'Back-End Web Development',
      time: '2 hours ago',
      points: 50,
    },
    {
      type: 'quiz',
      title: 'Python Functions Assessment',
      course: 'Back-End Web Development',
      time: '1 day ago',
      points: 75,
    },
    {
      type: 'discussion',
      title: 'Posted in Database Design Discussion',
      course: 'Back-End Web Development',
      time: '2 days ago',
      points: 25,
    },
    {
      type: 'achievement',
      title: "Earned 'Python Fundamentals' Badge",
      course: 'Back-End Web Development',
      time: '3 days ago',
      points: 100,
    },
  ];

  const upcomingEvents = [
    {
      title: 'Live Q&A: Advanced Django Patterns',
      instructor: 'Dr. Michael Rodriguez',
      date: 'July 10, 2025',
      time: '2:00 PM WAT',
      type: 'webinar',
    },
    {
      title: 'Peer Code Review Session',
      instructor: 'Community Led',
      date: 'July 12, 2025',
      time: '11:00 AM WAT',
      type: 'workshop',
    },
    {
      title: 'Career Services: Resume Workshop',
      instructor: 'Jennifer Adams',
      date: 'July 15, 2025',
      time: '4:00 PM WAT',
      type: 'workshop',
    },
  ];

  const studyGroups = [
    {
      name: 'Django Developers Circle',
      members: 24,
      nextMeeting: 'July 9, 2025',
      topic: 'Building REST APIs',
      active: true,
    },
    {
      name: 'Python Beginners Support',
      members: 18,
      nextMeeting: 'July 11, 2025',
      topic: 'Object-Oriented Programming',
      active: true,
    },
    {
      name: 'Career Transition Group',
      members: 32,
      nextMeeting: 'July 13, 2025',
      topic: 'Interview Preparation',
      active: false,
    },
  ];

  const achievements = [
    {
      title: 'Fast Learner',
      description: 'Completed 5 lessons in one week',
      earned: 'June 28, 2025',
      type: 'bronze',
    },
    {
      title: 'Community Helper',
      description: 'Answered 10 questions in forums',
      earned: 'June 25, 2025',
      type: 'silver',
    },
    {
      title: 'Streak Master',
      description: '7-day learning streak',
      earned: 'June 22, 2025',
      type: 'gold',
    },
  ];

  const weeklyStats = {
    lessonsCompleted: 8,
    timeSpent: '12.5 hours',
    pointsEarned: 425,
    streak: 5,
  };

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
              <span className='text-sm opacity-90'>
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

        {/* Quick Stats */}
        <div className='grid md:grid-cols-4 gap-6 mb-12'>
          <div className='bg-white rounded-xl border border-gray-200 p-6'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-sm text-gray-500 mb-1'>This Week</p>
                <p className='text-2xl font-bold text-gray-900'>
                  {weeklyStats.lessonsCompleted}
                </p>
                <p className='text-sm text-gray-600'>Lessons Completed</p>
              </div>
              <div className='w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center'>
                <BookOpen className='h-6 w-6 text-blue-600' />
              </div>
            </div>
          </div>

          <div className='bg-white rounded-xl border border-gray-200 p-6'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-sm text-gray-500 mb-1'>Time Spent</p>
                <p className='text-2xl font-bold text-gray-900'>
                  {weeklyStats.timeSpent}
                </p>
                <p className='text-sm text-gray-600'>This Week</p>
              </div>
              <div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center'>
                <Clock className='h-6 w-6 text-green-600' />
              </div>
            </div>
          </div>

          <div className='bg-white rounded-xl border border-gray-200 p-6'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-sm text-gray-500 mb-1'>Points Earned</p>
                <p className='text-2xl font-bold text-gray-900'>
                  {weeklyStats.pointsEarned}
                </p>
                <p className='text-sm text-gray-600'>This Week</p>
              </div>
              <div className='w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center'>
                <Star className='h-6 w-6 text-yellow-600' />
              </div>
            </div>
          </div>

          <div className='bg-white rounded-xl border border-gray-200 p-6'>
            <div className='flex items-center justify-between'>
              <div>
                <p className='text-sm text-gray-500 mb-1'>Learning Streak</p>
                <p className='text-2xl font-bold text-gray-900'>
                  {weeklyStats.streak}
                </p>
                <p className='text-sm text-gray-600'>Days</p>
              </div>
              <div className='w-12 h-12 bg-red-100 rounded-full flex items-center justify-center'>
                <Flame className='h-6 w-6 text-red-600' />
              </div>
            </div>
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

        {/* Recent Activity & Upcoming Events */}
        <div className='grid lg:grid-cols-2 gap-8 mb-16'>
          <div className='bg-white rounded-xl border border-gray-200 p-6'>
            <div className='flex items-center justify-between mb-6'>
              <h3 className='text-xl font-bold text-gray-900'>
                Recent Activity
              </h3>
              <Activity className='h-5 w-5 text-gray-400' />
            </div>

            <div className='space-y-4'>
              {recentActivity.map((activity, index) => (
                <div key={index} className='flex items-start space-x-3'>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      activity.type === 'lesson'
                        ? 'bg-blue-100'
                        : activity.type === 'quiz'
                        ? 'bg-green-100'
                        : activity.type === 'discussion'
                        ? 'bg-purple-100'
                        : 'bg-yellow-100'
                    }`}
                  >
                    {activity.type === 'lesson' && (
                      <Play className='h-4 w-4 text-blue-600' />
                    )}
                    {activity.type === 'quiz' && (
                      <CheckCircle className='h-4 w-4 text-green-600' />
                    )}
                    {activity.type === 'discussion' && (
                      <MessageCircle className='h-4 w-4 text-purple-600' />
                    )}
                    {activity.type === 'achievement' && (
                      <Trophy className='h-4 w-4 text-yellow-600' />
                    )}
                  </div>
                  <div className='flex-1'>
                    <p className='text-sm font-medium text-gray-900'>
                      {activity.title}
                    </p>
                    <p className='text-xs text-gray-500'>{activity.course}</p>
                    <div className='flex items-center justify-between mt-1'>
                      <span className='text-xs text-gray-400'>
                        {activity.time}
                      </span>
                      <span className='text-xs text-blue-600 font-medium'>
                        +{activity.points} pts
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className='w-full mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm'>
              View All Activity
            </button>
          </div>

          <div className='bg-white rounded-xl border border-gray-200 p-6'>
            <div className='flex items-center justify-between mb-6'>
              <h3 className='text-xl font-bold text-gray-900'>
                Upcoming Events
              </h3>
              <Calendar className='h-5 w-5 text-gray-400' />
            </div>

            <div className='space-y-4'>
              {upcomingEvents.map((event, index) => (
                <div
                  key={index}
                  className='border border-gray-100 rounded-lg p-4'
                >
                  <div className='flex items-start justify-between mb-2'>
                    <h4 className='font-medium text-gray-900 text-sm leading-tight'>
                      {event.title}
                    </h4>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        event.type === 'webinar'
                          ? 'bg-blue-100 text-blue-800'
                          : 'bg-green-100 text-green-800'
                      }`}
                    >
                      {event.type}
                    </span>
                  </div>
                  <p className='text-xs text-gray-500 mb-2'>
                    {event.instructor}
                  </p>
                  <div className='flex items-center justify-between text-xs text-gray-600'>
                    <span>{event.date}</span>
                    <span>{event.time}</span>
                  </div>
                </div>
              ))}
            </div>

            <button className='w-full mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors text-sm'>
              View All Events
            </button>
          </div>
        </div>

        {/* Study Groups & Achievements */}
        <div className='grid lg:grid-cols-2 gap-8 mb-16'>
          <div className='bg-white rounded-xl border border-gray-200 p-6'>
            <div className='flex items-center justify-between mb-6'>
              <h3 className='text-xl font-bold text-gray-900'>Study Groups</h3>
              <Users className='h-5 w-5 text-gray-400' />
            </div>

            <div className='space-y-4'>
              {studyGroups.map((group, index) => (
                <div
                  key={index}
                  className='border border-gray-100 rounded-lg p-4'
                >
                  <div className='flex items-start justify-between mb-2'>
                    <h4 className='font-medium text-gray-900 text-sm'>
                      {group.name}
                    </h4>
                    <div
                      className={`w-2 h-2 rounded-full ${
                        group.active ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                    />
                  </div>
                  <p className='text-xs text-gray-500 mb-3'>
                    {group.members} members
                  </p>
                  <div className='flex items-center justify-between text-xs'>
                    <span className='text-gray-600'>
                      Next: {group.nextMeeting}
                    </span>
                    <span className='text-blue-600 font-medium'>
                      {group.topic}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <button className='w-full mt-4 border border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-50 transition-colors text-sm flex items-center justify-center'>
              <PlusCircle className='h-4 w-4 mr-2' />
              Join New Group
            </button>
          </div>

          <div className='bg-white rounded-xl border border-gray-200 p-6'>
            <div className='flex items-center justify-between mb-6'>
              <h3 className='text-xl font-bold text-gray-900'>
                Recent Achievements
              </h3>
              <Award className='h-5 w-5 text-gray-400' />
            </div>

            <div className='space-y-4'>
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className='border border-gray-100 rounded-lg p-4'
                >
                  <div className='flex items-start space-x-3'>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                        achievement.type === 'gold'
                          ? 'bg-yellow-100'
                          : achievement.type === 'silver'
                          ? 'bg-gray-100'
                          : 'bg-orange-100'
                      }`}
                    >
                      <Trophy
                        className={`h-4 w-4 ${
                          achievement.type === 'gold'
                            ? 'text-yellow-600'
                            : achievement.type === 'silver'
                            ? 'text-gray-600'
                            : 'text-orange-600'
                        }`}
                      />
                    </div>
                    <div>
                      <h4 className='font-medium text-gray-900 text-sm'>
                        {achievement.title}
                      </h4>
                      <p className='text-xs text-gray-500 mb-1'>
                        {achievement.description}
                      </p>
                      <span className='text-xs text-gray-400'>
                        Earned: {achievement.earned}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className='w-full mt-4 text-blue-600 hover:text-blue-700 font-medium text-sm'>
              View All Achievements
            </button>
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
