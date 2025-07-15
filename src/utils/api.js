import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor for token refresh
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem('refreshToken');
        if (!refreshToken) throw new Error('No refresh token');
        const response = await axios.post(`${API_URL}/refresh-token`, {
          refreshToken,
        });
        const { accessToken, refreshToken: newRefreshToken } = response.data;
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', newRefreshToken);
        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
        return api(originalRequest);
      } catch (refreshError) {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        window.location.href = '/auth/signin';
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

export const signup = async (username, email, password) => {
  return api.post('/signup', { username, email, password });
};

export const login = async (email, password) => {
  return api.post('/login', { email, password });
};

export const socialLogin = (provider) => {
  window.location.href = `${API_URL}/${provider}`;
};

export const resetPassword = async (email) => {
  return api.post('/password-reset', { email });
};

export const confirmResetPassword = async (token, newPassword) => {
  return api.post('/password-reset/confirm', { token, newPassword });
};

export const logout = async () => {
  const accessToken = localStorage.getItem('accessToken');
  await api.post(
    '/logout',
    {},
    {
      headers: { Authorization: `Bearer ${accessToken}` },
    }
  );
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};

export const deleteAccount = async () => {
  const accessToken = localStorage.getItem('accessToken');
  await api.delete('/account', {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};

export const getCurrentUser = async () => {
  const accessToken = localStorage.getItem('accessToken');
  return api.get('/me', {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
};

export default api;
