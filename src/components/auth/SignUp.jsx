import React, { useState } from 'react';
import { Eye, EyeOff, User, Mail, Lock } from 'lucide-react';
import AuthLayout from '../../layout/AuthLayout';

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validatePassword = (password) => {
    const minLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return minLength && hasUppercase && hasLowercase && hasNumber && hasSymbol;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validation
    if (!formData.firstName.trim())
      newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Email is invalid';
    if (!formData.password) newErrors.password = 'Password is required';
    else if (!validatePassword(formData.password))
      newErrors.password = 'Password requirements not met';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Handle successful signup
      console.log('Sign up successful:', formData);
    }
  };

  const handleSocialSignUp = (provider) => {
    console.log(`Sign up with ${provider}`);
  };

  return (
    <AuthLayout
      title='Sign up for Joggle'
      subtitle='Enter your details to get started with us'
      heroTitle='Reach the stars with Joggle!'
      heroSubtitle='Your gateway to gaining in-demand skills and joining our talent community!'
    >
      {/* Social Sign Up Options */}
      <div className='mb-6'>
        <div className='flex items-center gap-4 mb-4'>
          <div className='flex-1 border-t border-gray-200'></div>
          <span className='text-sm text-gray-600 whitespace-nowrap'>
            Social sign in options
          </span>
          <div className='flex-1 border-t border-gray-200'></div>
        </div>

        <div className='flex gap-4 justify-center'>
          {/* Google */}
          <button
            onClick={() => handleSocialSignUp('Google')}
            className='flex items-center justify-center cursor-pointer w-full h-12 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors'
          >
            <svg className='w-5 h-5' viewBox='0 0 24 24'>
              <path
                fill='#4285F4'
                d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
              />
              <path
                fill='#34A853'
                d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
              />
              <path
                fill='#FBBC05'
                d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
              />
              <path
                fill='#EA4335'
                d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
              />
            </svg>
          </button>

          {/* LinkedIn */}
          <button
            onClick={() => HandleSocialSignUp('LinkedIn')}
            className='flex items-center justify-center cursor-pointer w-full h-12 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors'
          >
            <svg
              className='w-5 h-5 text-blue-600'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' />
            </svg>
          </button>

          {/* Facebook */}
          <button
            onClick={() => HandleSocialSignUp('Facebook')}
            className='flex items-center justify-center cursor-pointer w-full h-12 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors'
          >
            <svg
              className='w-5 h-5 text-blue-600'
              fill='currentColor'
              viewBox='0 0 24 24'
            >
              <path d='M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' />
            </svg>
          </button>
        </div>
      </div>

      {/* Manual Sign Up Form */}
      <div className='mb-4'>
        <div className='flex items-center gap-4 mb-4'>
          <div className='flex-1 border-t border-gray-300'></div>
          <span className='text-sm text-gray-600 whitespace-nowrap'>
            Manual sign in
          </span>
          <div className='flex-1 border-t border-gray-300'></div>
        </div>

        <form onSubmit={handleSubmit} className='space-y-4'>
          {/* First Name */}
          <div>
            <label
              htmlFor='firstName'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              First Name <span className='text-red-500'>*</span>
            </label>
            <div className='relative'>
              <User className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
              <input
                type='text'
                id='firstName'
                name='firstName'
                value={formData.firstName}
                onChange={handleInputChange}
                placeholder='Enter your first name'
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.firstName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
            </div>
            {errors.firstName && (
              <p className='text-red-500 text-sm mt-1'>{errors.firstName}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor='lastName'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              Last Name <span className='text-red-500'>*</span>
            </label>
            <div className='relative'>
              <User className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
              <input
                type='text'
                id='lastName'
                name='lastName'
                value={formData.lastName}
                onChange={handleInputChange}
                placeholder='Enter your last name'
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.lastName ? 'border-red-500' : 'border-gray-300'
                }`}
              />
            </div>
            {errors.lastName && (
              <p className='text-red-500 text-sm mt-1'>{errors.lastName}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor='email'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              Email <span className='text-red-500'>*</span>
            </label>
            <div className='relative'>
              <Mail className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleInputChange}
                placeholder='Enter your email'
                className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
            </div>
            {errors.email && (
              <p className='text-red-500 text-sm mt-1'>{errors.email}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor='password'
              className='block text-sm font-medium text-gray-700 mb-1'
            >
              Password <span className='text-red-500'>*</span>
            </label>
            <div className='relative'>
              <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
              <input
                type={showPassword ? 'text' : 'password'}
                id='password'
                name='password'
                value={formData.password}
                onChange={handleInputChange}
                placeholder='Create a password'
                className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-colors ${
                  errors.password ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              <button
                type='button'
                onClick={() => setShowPassword(!showPassword)}
                className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600'
              >
                {showPassword ? (
                  <EyeOff className='w-5 h-5' />
                ) : (
                  <Eye className='w-5 h-5' />
                )}
              </button>
            </div>
            <p className='text-[13px] text-gray-500 mt-3'>
              Must be at least 8 characters, contain uppercase, lowercase,
              numeric and symbol characters
            </p>
            {errors.password && (
              <p className='text-red-500 text-sm mt-1'>{errors.password}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type='submit'
            onClick={() => window.location.href = '/launchpad'}
            className='w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:ring-1 focus:ring-blue-500 focus:ring-offset-0 transition-colors cursor-pointer outline-none'
          >
            Sign up
          </button>
        </form>
      </div>

      {/* Sign In Link */}
      <div className='text-center'>
        <p
          className='text-sm text-gray-600'
          style={{ fontFamily: 'Geist, sans-serif' }}
        >
          Don't have an account?{' '}
          <a
            href='/auth/signin'
            className='text-blue-600 hover:text-blue-500 font-medium'
          >
            Sign in
          </a>
        </p>
        <p
          className='text-xs text-gray-500 mt-2'
          style={{ fontFamily: 'Geist, sans-serif' }}
        >
          Struggling to log in or sign up?
        </p>
      </div>
    </AuthLayout>
  );
};

export default SignUp;
