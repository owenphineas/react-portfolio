function Nav({ currentPage, handlePageChange }) {
    return <ul class="nav nav-tabs">
    <li class="nav-item">
      <a class={currentPage === 'About' ? 'nav-link active' : 'nav-link'} onClick={() => handlePageChange('Home')} href="#about">About Me</a>
    </li>
    <li class="nav-item">
      <a class={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'} onClick={() => handlePageChange('Portfolio')} href="#portfolio">Portfolio</a>
    </li>
    <li class="nav-item">
      <a class={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'} onClick={() => handlePageChange('Contact')} href="#contact">Contact</a>
    </li>
    <li class="nav-item">
      <a class={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'} onClick={() => handlePageChange('Resume')} href="#resume">Resume</a>
    </li>
  </ul>
}

export default Nav;