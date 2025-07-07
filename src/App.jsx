import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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
import DashboardLayout from './components/layout/DashboardLayout';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/auth/signin' element={<SignIn />} />
        <Route path='/auth/signup' element={<SignUp />} />

        {/* Cosmos Portal Routes */}
        <Route path='/cosmos' element={<Dashboard />} />
        <Route path='/cosmos/dashboard' element={<Dashboard />} />
        <Route path='/cosmos/lesson' element={<Lesson />} />
        <Route path='/cosmos/task' element={<Task />} />
        <Route path='/cosmos/inbox' element={<Inbox />} />
        <Route path='/cosmos/group' element={<Group />} />
        <Route path='/cosmos/settings' element={<Settings />} />

        <Route path='/dashboard' element={<DashboardLayout />}>
          <Route index element={<Home />} /> {/* /dashboard */}
          <Route path='home' element={<Home />} />
          <Route path='inbox' element={<Inbox />} />
          {/* More routes can be nested here */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
