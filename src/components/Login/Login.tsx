// src/components/Login.tsx
import React, { useEffect } from 'react';
import { useMsal } from '@azure/msal-react';

const Login: React.FC = () => {
  const { instance, accounts, inProgress } = useMsal();

  // Handle Azure login with popup
  const handleAzureLogin = async () => {
    try {
      if (inProgress === 'none') {
        await instance.loginPopup({
          scopes: ['User.Read'], // Request user info
          prompt: 'select_account', // Forces account selection for better UX
        });
        // Log the user's name after login
        if (accounts.length > 0) {
          const userName = accounts[0].name;
          console.log('Logged in user:', userName);
        }
      }
    } catch (error) {
      console.error('Login popup error:', error);
    }
  };

  // Log the user's name when accounts change (e.g., after login)
  useEffect(() => {
    if (accounts.length > 0 && inProgress === 'none') {
      const userName = accounts[0].name;
      console.log('Current user after login:', userName);
    }
  }, [accounts, inProgress]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-gray-600 p-10 rounded-lg shadow-lg text-center text-white max-w-md w-full">
        <h2 className="text-2xl font-semibold mb-6">Sign In</h2>
        <button
          onClick={handleAzureLogin}
          className="flex items-center justify-center w-full bg-white text-blue-700 font-medium py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
          disabled={inProgress === 'login'}
        >
          <span>Login with Azure</span>
        </button>
      </div>
    </div>
  );
};

export default Login;