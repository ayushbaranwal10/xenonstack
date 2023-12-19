// src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import logo from "../../src/assets/Logo.svg"
import logoname from "../../src/assets/logoName.svg"
import cardImage1 from "../../src/assets/cardImage1.png"
import cardImage2 from "../../src/assets/cardImage2.png"
import cardImage3 from "../../src/assets/cardImage3.png"
import cardImage4 from "../../src/assets/cardImage4.png"
import cardImage5 from "../../src/assets/cardImage5.png"
import cardImage6 from "../../src/assets/cardImage6.png"
import cardImage7 from "../../src/assets/cardImage7.png"
import cardImage8 from "../../src/assets/cardImage8.png"
import cardImage9 from "../../src/assets/cardImage9.png"
import featureImageBg1 from "../../src/assets/featureImageBg1.svg"
import featuresImage1 from "../../src/assets/featuresImage1.png"
import featureImageBg2 from "../../src/assets/featureImageBg2.png"
import featuresImage2 from "../../src/assets/featuresImage2.png"
import mail from "../../src/assets/mail.png"
import twitter from "../../src/assets/twitter.png"
import facebook from "../../src/assets/facebook.png"
import instagram from "../../src/assets/instagram.png"



const Navbar = () => {
  return (

    <>
    {/* nav bar */}
    <header>
      <nav>
        <img src={logo} alt="LOGO" />
        <ul>


        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Register</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        </ul>
      </nav>
      <hr />
      <div>
        <h1>
          Home That Makes <br /> You Living Life!
        </h1>
        <p>
          Are you looking for amazing Real estate? Don't <br /> worry! We got it
          for you!
        </p>
        <button>Learn More</button>
      </div>
    </header>
    {/* multiple logo section */}
    <section className="logos">
      <img src={logoname} alt="Logo" />
      <img src={logoname} alt="Logo" />
      <img src={logoname} alt="Logo" />
      <img src={logoname} alt="Logo" />
      <img src={logoname} alt="Logo" />
    </section>
    {/* section for displaying all our real state properties in a card */}
    <section className="cards-wrapper-section">
      <h1>
        Our Best Estate, <br />
        are Modern!
      </h1>
      <div className="cards-wrapper">
        <div className="card">
          <img src={cardImage1} alt="cardImage1" />
          <div className="card-box">
            <div>
              <h3>Mixtownia</h3>
              <p>$205,500</p>
            </div>
            <button>Detail</button>
          </div>
        </div>
        <div className="card">
          <img src={cardImage2} alt="cardImage2" />
          <div className="card-box">
            <div>
              <h3>Mixtownia</h3>
              <p>$205,500</p>
            </div>
            <button>Detail</button>
          </div>
        </div>
        <div className="card">
          <img src={cardImage3} alt="cardImage3" />
          <div className="card-box">
            <div>
              <h3>Mixtownia</h3>
              <p>$205,500</p>
            </div>
            <button>Detail</button>
          </div>
        </div>
        <div className="card">
          <img src={cardImage4} alt="cardImage4" />
          <div className="card-box">
            <div>
              <h3>Mixtownia</h3>
              <p>$205,500</p>
            </div>
            <button>Detail</button>
          </div>
        </div>
        <div className="card">
          <img src={cardImage5} alt="cardImage5" />
          <div className="card-box">
            <div>
              <h3>Mixtownia</h3>
              <p>$205,500</p>
            </div>
            <button>Detail</button>
          </div>
        </div>
        <div className="card">
          <img src={cardImage6} alt="cardImage6" />
          <div className="card-box">
            <div>
              <h3>Mixtownia</h3>
              <p>$205,500</p>
            </div>
            <button>Detail</button>
          </div>
        </div>
        <div className="card">
          <img src={cardImage7} alt="cardImage7" />
          <div className="card-box">
            <div>
              <h3>Mixtownia</h3>
              <p>$205,500</p>
            </div>
            <button>Detail</button>
          </div>
        </div>
        <div className="card">
          <img src={cardImage8} alt="cardImage8" />
          <div className="card-box">
            <div>
              <h3>Mixtownia</h3>
              <p>$205,500</p>
            </div>
            <button>Detail</button>
          </div>
        </div>
        <div className="card">
          <img src={cardImage9} alt="cardImage9" />
          <div className="card-box">
            <div>
              <h3>Mixtownia</h3>
              <p>$205,500</p>
            </div>
            <button>Detail</button>
          </div>
        </div>
      </div>
    </section>
    {/* section for first feature */}
    <section className="feature-section first-feature-section">
      <div>
        <img src={featureImageBg1} alt="bg1" />
        <img src={featuresImage1} alt="feature img 1" />
      </div>
      <div>
        <h1>
          Modern, Trendy <br /> Affordable
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur <br />
          adipisicing elit. Optio, sunt voluptatum. Facere <br /> doloribus
          molestiae corporis?
        </p>
        <button>Early Bird Book</button>
      </div>
    </section>
    {/* section for second feature */}
    <section className="feature-section second-feature-section">
      <div>
        <h1>
          Unique House <br /> for Long Term!
        </h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing <br />
          elit. Voluptatum, rerum.
        </p>
        <button>Early Bird Book</button>
      </div>
      <div>
        <img src={featureImageBg2} alt="bg2" />
        <img src={featuresImage2} alt="feature img 2" />
      </div>
    </section>
    {/* section for creating the newsletter */}
    <section className="newsletter">
      <h1>
        Subscribe to Our Newsletter <br /> For Weekly Article Update.
      </h1>
      <p>
        We have real estate-related blog so we can share our thoughts and rutinity
        in our blog that <br /> updated weekly. We will not spam you, we promise.
      </p>
      <form>
        <div>
          <img src={mail} alt="mail" />
          <input type="text" placeholder="Enter e-mail address" />
        </div>
        <button>Subscribe</button>
      </form>
    </section>
    {/* Footer */}
    <footer>
      <div>
        <img src={logo} alt="LOGO" />
        <div>
          <img src={twitter} alt="twitter" />
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
        </div>
        <p>
          2022 Award winning Real estate <br /> and Lorem ipsum dolor sit amet
        </p>
      </div>
      {/* Footer links */}
      <div className="footer-links">
        <div className="footer-links-content">
          <ul>
            <li>
              <a href="#">Location</a>
            </li>
            <li>
              <a href="#">America</a>
            </li>
            <li>
              <a href="#">Asia</a>
            </li>
            <li>
              <a href="#">Europe</a>
            </li>
            <li>
              <a href="#">Africa</a>
            </li>
          </ul>
        </div>
        <div className="footer-links-content">
          <ul>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">About Me</a>
            </li>
            <li>
              <a href="#">Teams</a>
            </li>
            <li>
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
          </ul>
        </div>
        <div className="footer-links-content">
          <ul>
            <li>
              <a href="#">Legals</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
            <li>
              <a href="#">Disclaimer</a>
            </li>
            <li>
              <a href="#">Terms</a>
            </li>
            <li>
              <a href="#">Company</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  </>
  
  );
};

export default Navbar;
