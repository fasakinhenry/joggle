export const mockData = {
  courses: [
    {
      id: 1,
      title: "Beginner's Guide to Becoming a Professional Front-End Developer",
      instructor: 'Leonardo Samuel',
      role: 'Mentor',
      image: '/api/placeholder/300/200',
      category: 'FRONT END',
      progress: 75,
    },
    {
      id: 2,
      title: 'Optimizing User Experience with the Best UI/UX Design',
      instructor: 'Bayu Saito',
      role: 'Mentor',
      image: '/api/placeholder/300/200',
      category: 'UI/UX DESIGN',
      progress: 60,
    },
    {
      id: 3,
      title: 'Rebranding and Refresh Company Image',
      instructor: 'Padhang Satrio',
      role: 'Mentor',
      image: '/api/placeholder/300/200',
      category: 'BRANDING',
      progress: 45,
    },
  ],
  monthlyScores: [
    {
      month: 'January 2024',
      score: 98.5,
      specialization: 'Short Specializations',
      status: 'Validated',
      lessons: [
        { name: 'Advanced React Hooks', score: 95, completed: true },
        { name: 'State Management', score: 100, completed: true },
        { name: 'Component Optimization', score: 90, completed: true }
      ]
    },
    {
      month: 'February 2024',
      score: 87.3,
      specialization: 'SE Foundations',
      status: 'Validated',
      lessons: [
        { name: 'Data Structures', score: 85, completed: true },
        { name: 'Algorithms', score: 90, completed: true },
        { name: 'System Design', score: 88, completed: true }
      ]
    },
    {
      month: 'March 2024',
      score: 92.1,
      specialization: 'AI Career Essentials',
      status: 'Validated',
      lessons: [
        { name: 'Machine Learning Basics', score: 94, completed: true },
        { name: 'Neural Networks', score: 88, completed: true },
        { name: 'AI Ethics', score: 95, completed: true }
      ]
    }
  ],
  currentProjects: [
    {
      id: 1,
      title: 'Check Your Understanding: Welcome to Week 2',
      progress: 85,
      dueDate: '2024-07-15',
      status: 'in-progress',
      type: 'Assessment'
    },
    {
      id: 2,
      title: 'Personal Mission Statement',
      progress: 60,
      dueDate: '2024-07-18',
      status: 'in-progress',
      type: 'Project'
    },
    {
      id: 3,
      title: 'Self Regulation Techniques',
      progress: 100,
      dueDate: '2024-07-10',
      status: 'completed',
      type: 'Assignment'
    }
  ],
  upcomingEvents: [
    {
      id: 1,
      title: 'Weekly Peer Review Session',
      date: '2024-07-12',
      time: '10:00 AM',
      type: 'Review'
    },
    {
      id: 2,
      title: 'Monthly Progress Assessment',
      date: '2024-07-15',
      time: '2:00 PM',
      type: 'Assessment'
    },
    {
      id: 3,
      title: 'Career Guidance Workshop',
      date: '2024-07-20',
      time: '4:00 PM',
      type: 'Workshop'
    }
  ],
  currentLearning: [
    { name: 'Welcome to Week 2', progress: 100, type: 'Introduction' },
    { name: 'The Daily 3', progress: 85, type: 'Exercise' },
    { name: 'Core Values', progress: 70, type: 'Reflection' },
    { name: 'Time Management', progress: 45, type: 'Skill' },
    { name: 'Peer Coaching', progress: 30, type: 'Collaboration' }
  ]
};
