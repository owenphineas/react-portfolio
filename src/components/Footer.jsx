import github from '../assets/github.svg';
import linkedin from '../assets/linkedin.svg';
import envelope from '../assets/envelope-fill.svg';

function Footer() {
    return <footer className="footer">
        <div className="btn btn-link btn-floating btn-lg text-dark m-1 socials">

            <a href="https://github.com/owenphineas">
            <img src={github} />
            </a>

            <a href="https://linkedin.com/in/owen-johnson-aa0a371a3">
            <img src={linkedin} />
            </a>

            <a href="mailto:opjoh10@gmail.com">
            <img src={envelope} />
            </a>

        </div>
        <div className="copyright">
          <p>©2024 Owen Johnson All Rights Reserved</p>  
        </div>

    </footer>

}

export default Footer;