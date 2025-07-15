import React, { useState, useEffect } from 'react';
import { Mail, Lock } from 'lucide-react';
import AuthLayout from '../../layout/AuthLayout';
import axios from 'axios';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { resetPassword, confirmResetPassword } from '../../utils/api';

const ResetPassword = () => {
  const [formData, setFormData] = useState({
    email: '',
    token: '',
    newPassword: '',
  });
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState('');
  const [isResetRequest, setIsResetRequest] = useState(true);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get('token');
    if (token) {
      setFormData((prev) => ({ ...prev, token }));
      setIsResetRequest(false);
    }
  }, [searchParams]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
    setServerError('');
  };

  const validatePassword = (password) => {
    const minLength = password.length >= 8;
    const hasUppercase = /[A-Z]/.test(password);
    const hasLowercase = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    return minLength && hasUppercase && hasLowercase && hasNumber;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (isResetRequest) {
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(formData.email))
        newErrors.email = 'Email is invalid';
    } else {
      if (!formData.token) newErrors.token = 'Reset token is required';
      if (!formData.newPassword)
        newErrors.newPassword = 'New password is required';
      else if (!validatePassword(formData.newPassword))
        newErrors.newPassword =
          'Password must be at least 8 characters with uppercase, lowercase, and number';
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        if (isResetRequest) {
          await resetPassword(formData.email);
          navigate('/auth/check-email');
        } else {
          await confirmResetPassword(formData.token, formData.newPassword);
          navigate('/auth/signin');
        }
      } catch (error) {
        setServerError(
          error.response?.data?.error || 'Operation failed. Please try again.'
        );
        if (error.response?.status === 429) {
          setServerError('Too many requests. Please try again later.');
        }
      }
    }
  };

  return (
    <AuthLayout
      title={isResetRequest ? 'Reset Your Password' : 'Set New Password'}
      subtitle={
        isResetRequest
          ? 'Enter your email to receive a reset link'
          : 'Enter your new password'
      }
      heroTitle='Recover Your Joggle Account'
      heroSubtitle='Get back to learning with a secure password reset.'
    >
      {serverError && (
        <p className='text-red-500 text-sm mb-4 text-center'>{serverError}</p>
      )}
      <form onSubmit={handleSubmit} className='space-y-4'>
        {isResetRequest ? (
          <>
            {/* Email */}
            <div>
              <label
                htmlFor='email'
                className='block text-md font-medium text-gray-700 mb-1'
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
          </>
        ) : (
          <>
            {/* New Password */}
            <div>
              <label
                htmlFor='newPassword'
                className='block text-md font-medium text-gray-700 mb-1'
              >
                New Password <span className='text-red-500'>*</span>
              </label>
              <div className='relative'>
                <Lock className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5' />
                <input
                  type='password'
                  id='newPassword'
                  name='newPassword'
                  value={formData.newPassword}
                  onChange={handleInputChange}
                  placeholder='Enter new password'
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-colors ${
                    errors.newPassword ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
              </div>
              <p className='text-[13px] text-gray-500 mt-3'>
                Must be at least 8 characters, contain uppercase, lowercase, and
                number
              </p>
              {errors.newPassword && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors.newPassword}
                </p>
              )}
            </div>
          </>
        )}

        {/* Submit */}
        <button
          type='submit'
          className='w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 focus:ring-1 focus:ring-blue-500 focus:ring-offset-0 transition-colors cursor-pointer outline-none'
        >
          {isResetRequest ? 'Send Reset Link' : 'Reset Password'}
        </button>
      </form>

      <div className='text-center mt-4'>
        <p className='text-sm text-gray-600'>
          Back to{' '}
          <a
            href='/auth/signin'
            className='text-blue-600 hover:text-blue-500 font-medium'
          >
            Sign in
          </a>
        </p>
      </div>
    </AuthLayout>
  );
};

export default ResetPassword;
