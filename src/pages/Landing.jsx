import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className='text-center mt-20'>
      <h1 className='text-4xl font-bold'>Welcome to Our App 🚀</h1>
      <p className='mt-4 text-gray-600'>Start by logging in or signing up.</p>
      <div className='mt-6 space-x-4'>
        <Link
          to='/auth/login'
          className='bg-blue-600 text-white px-4 py-2 rounded'
        >
          Login
        </Link>
        <Link to='/auth/signup' className='bg-gray-200 px-4 py-2 rounded'>
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Landing;
