
import Header from "./components/Header/Header";
// import SiderBar from "./components/SideBar/SideBar";
import MainContent from "./components/MainContent/MainContent";
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import "./App.css";
const App = () => {
  return <>
    <Router>
      <Header />
      {/* <SiderBar /> */}
      <MainContent />
      <Routes>
        <Route></Route>
      </Routes>
    </Router>
  </>
}
export default App