import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Landing from './pages/Landing';

// Cosmos Portal
import Dashboard from './pages/cosmos/Dashboard';
import Resources from './pages/cosmos/Resources';
import Events from './pages/cosmos/Events';
import Certifications from './pages/cosmos/Certifications';
import Career from './pages/cosmos/Career';
import Leaderboard from './pages/cosmos/Leaderboard';
import AI from './pages/cosmos/AI';
import Projects from './pages/cosmos/Projects';
import Lesson from './pages/cosmos/Lesson';
import Task from './pages/cosmos/Task';
import Inbox from './pages/cosmos/Inbox';
import Group from './pages/cosmos/Group';
import Settings from './pages/cosmos/Settings';
import DashboardLayout from './layout/DashboardLayout';

// Launchpad (Hub)
import Launchpad from './pages/Launchpad';

// 404 Not Found Page
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/auth/signin' element={<SignIn />} />
        <Route path='/auth/signup' element={<SignUp />} />

        {/* Cosmos Portal Routes */}
        <Route path='/cosmos' element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='dashboard' element={<Dashboard />} />
          <Route path='tasks' element={<Task />} />
          <Route path='resources' element={<Resources />} />
          <Route path='certifications' element={<Certifications />} />
          <Route path='events' element={<Events />} />
          <Route path='career' element={<Career />} />
          <Route path='leaderboard' element={<Leaderboard />} />
          <Route path='ai-assistant' element={<AI />} />
          <Route path='projects' element={<Projects />} />
          <Route path='inbox' element={<Inbox />} />
          <Route path='lessons' element={<Lesson />} />
          <Route path='group' element={<Group />} />
          <Route path='settings' element={<Settings />} />
        </Route>

        {/* Launchpad Route */}
        <Route path='/launchpad' element={<Launchpad />} />

        {/* Catch-all */}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
