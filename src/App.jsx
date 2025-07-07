import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import SignIn from './components/auth/SignIn';
import SignUp from './components/auth/SignUp';
import Landing from './pages/Landing';

// Import Cosmos components
import Dashboard from './pages/cosmos/Dashboard';
import Lesson from './pages/cosmos/Lesson';
import Task from './pages/cosmos/Task';
import Inbox from './pages/cosmos/Inbox';
import Group from './pages/cosmos/Group';
import Settings from './pages/cosmos/Settings';
import DashboardLayout from './layout/DashboardLayout';

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
          <Route path='tasks' element={<Task />} />
          <Route path='inbox' element={<Inbox />} />
          <Route path='lessons' element={<Lesson />} />
          <Route path='group' element={<Group />} />
          <Route path='settings' element={<Settings />} />
        </Route>

        {/* Redirect unknown routes to dashboard */}
        <Route path='*' element={<Navigate to='/cosmos' replace />} />
      </Routes>
    </Router>
  );
}

export default App;
