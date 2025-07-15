import React from 'react';
import AuthLayout from '../../layout/AuthLayout';

const CheckEmail = () => {
  return (
    <AuthLayout
      title='Check Your Email'
      subtitle='We sent you an email to verify your account or reset your password'
      heroTitle='Almost there, Joggler!'
      heroSubtitle='Check your inbox to continue your journey to the stars.'
    >
      <div className='text-center'>
        <p className='text-gray-600 mb-4'>
          Please check your email for a link to verify your account or reset your password.
          If you don’t see it, check your spam folder.
        </p>
        <a
          href='/auth/signin'
          className='text-blue-600 hover:text-blue-500 font-medium'
        >
          Back to Sign In
        </a>
      </div>
    </AuthLayout>
  );
};

export default CheckEmail;