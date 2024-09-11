import Header from "./components/header";
import SubHeader from "./components/Subheader";
import Nav from './components/Navigation';
import Footer from "./components/Footer";
import './index.css';

import { Outlet } from 'react-router-dom'

const projects = [
  {
    id: 1,
    projectName: 'Social Media API',
    skills: 'JavaScript, MongoDB, Mongoose',
    url: 'https://github.com/owenphineas/social-media-api',
    image: ''
  },
  {
    id: 2,
    projectName: 'Employee Tracker',
    skills: 'JavaScript, Node, SQL',
    url: 'https://github.com/owenphineas/employee-tracker',
    image: ''
  },
  {
    id: 3,
    projectName: 'eCommerce Backend',
    skills: 'JavaScript, SQL, Sequelize',
    url: 'https://github.com/owenphineas/ecommerce-back-end',
    image: ''
  }
]


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