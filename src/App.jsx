import Header from "./components/header";
import SubHeader from "./components/Subheader";
import Nav from './components/Navigation';
import Footer from "./components/Footer";
import './index.css';

import { Outlet } from 'react-router-dom'


function App() {
  return <div>
    <Nav />
    <Header />
    <SubHeader />
    <Outlet />
    <Footer />
  </div>
  
}

export default App;