import React from 'react';
import { MsalProvider, useIsAuthenticated, useMsal } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';
import Header from './components/Header/Header';
import SiderBar from './components/SideBar/SideBar';
import MainContent from './components/MainContent/MainContent';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HealthCare from './components/HealthCare/HealthCare';
import AutoMotive from './components/AutoMotive/AutoMotive';
import Financial from './components/Financial/Financial';
import ECommerce from './components/ECommerce/ECommerce';
import Retail from './components/Retail/Retail';
import Travel from './components/Travel/Travel';
import RealEstate from './components/RealEstate/RealEstate';
import Manufacturing from './components/Manufacturing/Manufacturing';
import Login from './components/Login/Login';
import Others from './components/Others/Others';
 
// MSAL Configuration
const msalConfig = {
  auth: { 
    clientId: 'b9d51768-362f-4a20-b256-24ef6c874dea',
    
    authority: 'https://login.microsoftonline.com/a0ced141-38cb-47e3-8c33-2458ecae7f0c',
    redirectUri: 'https://eslamwordworks.github.io/WWAI-Demo/',
  },
  cache: {
    cacheLocation: 'sessionStorage',
    storeAuthStateInCookie: false,
  }, 
};

const msalInstance = new PublicClientApplication(msalConfig);

// Higher-order component to wrap the app
const AppContent: React.FC = () => {
  const isAuthenticated = useIsAuthenticated();
  const { accounts } = useMsal(); // Get accounts from MSAL

  if (!isAuthenticated) {
    return <Login />;
  }

  // Extract the user's name from the accounts array (if available)
  const userName = accounts.length > 0 ? accounts[0].name : 'User';

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <SiderBar userName={userName} /> {/* Pass userName to SideBar */}
        <div className="flex-1 p-4 pt-[64px] bg-[#FCFCFD] md:ml-[264px]">
          <Routes>
            <Route path="" element={<MainContent />} />
            <Route path="introduction" element={<MainContent />} />
            <Route path="health-care" element={<HealthCare />} />
            <Route path="automotive" element={<AutoMotive />} />
            <Route path="financial" element={<Financial />} />
            <Route path="e-commerce" element={<ECommerce />} />
            <Route path="retail" element={<Retail />} />
            <Route path="travel" element={<Travel />} />
            <Route path="real-estate" element={<RealEstate />} />
            <Route path="manufacturing" element={<Manufacturing />} />
            <Route path="others" element={<Others />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

// Wrap the app with MsalProvider
const App: React.FC = () => {
  return (
    <MsalProvider instance={msalInstance}>
      <AppContent />
    </MsalProvider>
  );
};

export default App;