function Nav({ currentPage, handlePageChange }) {
  return <ul className="nav nav-tabs">
      <li className="nav-item">
          <a className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'} onClick={() => handlePageChange('Home')} href="home">Home</a>
      </li>
      <li className="nav-item"></li>
      <li className="nav-item">
          <a className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} onClick={() => handlePageChange('Portfolio')} href="portfolio">Portfolio</a>
      </li>
      <li className="nav-item">
      <a className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} onClick={() => handlePageChange('Resume')} href="resume">Resume</a>
      </li>
      <li className="nav-item buffer-right"></li>
  </ul>
}

export default Nav;