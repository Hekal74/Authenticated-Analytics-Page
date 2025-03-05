
import Header from "./components/Header/Header";
import SiderBar from "./components/SideBar/SideBar";
import MainContent from "./components/MainContent/MainContent";
import { Route, Routes } from 'react-router-dom';
import "./App.css";
import HealthCare from "./components/HealthCare/HealthCare";
import AutoMotive from "./components/AutoMotive/AutoMotive";
import Financial from "./components/Financial/Financial";
import ECommerce from "./components/ECommerce/ECommerce";
const App = () => {
  return <>
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 ">
        <SiderBar />
        <div className=" flex-1  p-4 pt-[64px] bg-[#FCFCFD] ">
          <Routes>
            <Route path='' element={<MainContent />} />
            <Route path='introduction' element={<MainContent />} />
            <Route path='health-care' element={<HealthCare />} />
            <Route path='automotive' element={<AutoMotive />} />
            <Route path='financial' element={<Financial />} />
            <Route path='e-commerce' element={<ECommerce />} />
          </Routes>
        </div>
      </div>
    </div>
  </>
}
export default App