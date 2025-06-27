import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-screen' style={{ fontFamily: 'Cabinet Grotesk, sans-serif' }}>
      <h1 className='text-6xl font-bold'>Joggle 🚀</h1>
      <p className='mt-4 text-gray-600 text-lg' style={{ fontFamily: 'Geist, sans-serif' }}>Start by logging in or signing up.</p>
      <div className='mt-6 space-x-4' style={{ fontFamily: 'Geist, sans-serif' }}>
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
