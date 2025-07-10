import DashHero from './DashHero';
import MonthlyScores from './MonthlyScores';
import CurrentProjects from './CurrentProjects';
import UpcomingEvents from './UpcomingEvents';
import CurrentLearning from './CurrentLearning';
import ContinueWatching from './ContinueWatching';
import YourLesson from './YourLesson';
import { mockData } from './mockData';

const MainContent = () => {
  return (
    <div className='flex-1 overflow-y-auto'>
      <DashHero />

      {/* Monthly Scores - Full Width */}
      <MonthlyScores scores={mockData.monthlyScores} />

      {/* Current Projects - Full Width */}
      <CurrentProjects projects={mockData.currentProjects} />

      {/* Current Learning - Full Width */}
      <CurrentLearning learningItems={mockData.currentLearning} />

      {/* Upcoming Events - Full Width */}
      <UpcomingEvents events={mockData.upcomingEvents} />

      {/* Course Content */}
      <ContinueWatching courses={mockData.courses} />

      <YourLesson />
    </div>
  );
};

export default MainContent;
