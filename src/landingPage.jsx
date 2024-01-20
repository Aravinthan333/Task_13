import "./landingPage.css";
import PropTypes from "prop-types";

const featuresObj = [
  {
    image: "bx bx-window-alt",
    title: "Fully Responsive",
    describe: "This theme will look great on any device, no matter the size!",
  },
  {
    image: "bx bx-layer",
    title: "Bootstrap 5 Ready",
    describe: "Featuring the latest build of the new Bootstrap 5 framework!",
  },
  {
    image: "bx bx-terminal",
    title: "Easy to Use",
    describe:
      "Ready to use with your own content, or customize the source files!",
  },
];

const Feature = ({ image, title, describe }) => {
  return (
    <div className="feature">
      <i className={image}></i>
      {/* #0D6EFD -- icon color */}
      <h5>{title}</h5>
      <p>{describe}</p>
    </div>
  );
};

Feature.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  describe: PropTypes.string,
};

const Features = () => {
  return (
    <div className="features">
      {featuresObj.map((e) => (
        <Feature key={e.title} {...e} />
      ))}
    </div>
  );
};

//-------------------------------------------------------------------------------------------------------------------------------------------------------------

const cardObj = [
  {
    img: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-1.jpg",
    name: "Margaret E.",
    review: '"This is fantastic! Thanks so much guys!"',
  },
  {
    img: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-2.jpg",
    name: "Fred S",
    review: `"Bootstrap is amazing. I've been using it to create lots of super nice landing pages."`,
  },
  {
    img: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/testimonials-3.jpg",
    name: "Sarah W.",
    review: `"Thanks so much for making these free resources available to us!"`,
  },
];

const Card = ({ img, name, review }) => {
  return (
    <div className="card">
      <img src={img} alt="Image" />
      <h5>{name}</h5>
      <p>{review}</p>
    </div>
  );
};

Card.propTypes = {
  img: PropTypes.string,
  name: PropTypes.string,
  review: PropTypes.string,
};

const Cards = () => {
  return (
    <div className="oCards">
      <h2>What people are saying...</h2>
      <div className="cards">
        {cardObj.map((e) => (
          <Card className="cards" key={e.name} {...e} />
        ))}
      </div>
    </div>
  );
};

// ------------------------------------------------------------------------------------------------------------------------------------------------------------

const productObj = [
  {
    img: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-1.jpg",
    title: "Fully Responsive Design",
    describe:
      "When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!",
  },
  {
    img: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-2.jpg",
    title: "Updated For Bootstrap 5",
    describe:
      "Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 5!",
  },
  {
    img: "https://startbootstrap.github.io/startbootstrap-landing-page/assets/img/bg-showcase-3.jpg",
    title: "Easy to Use & Customize",
    describe:
      "Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!",
  },
];

const AboutProduct = ({ img, title, describe }) => {
  return (
    <>
      <div className="product">
        <span className="describe">
          <h2>{title}</h2>
          <p>{describe}</p>
        </span>
        <span className="images">
          <img src={img} />
        </span>
      </div>
    </>
  );
};

AboutProduct.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  describe: PropTypes.string,
};

const AboutProducts = () => {
  return (
    <div className="products">
      {productObj.map((ee) => (
        <AboutProduct key={ee.title} {...ee} />
      ))}
    </div>
  );
};

//----------------------------------------------------------------------------------------------------------------------------------------------------------

const Slides = () => {
  return (
    <div className="slides">
      <span className="slidesinner">
        <p>Generate more leads with a professional landing page!</p>
        <span className="slidesInp">
          <input type="mail" placeholder="Email Address"></input>
          <button>Submit</button>
        </span>
      </span>
    </div>
  );
};

//----------------------------------------------------------------------------------------------------------------------------------------------------------

const Footer = () => {
  return (
    <div className="navbar footer">
      <span className="menu">
        <ul>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Terms of Use</a>
          </li>
          <li>
            <a href="#">Privacy Policy</a>
          </li>
        </ul>
        <p>&copy; Your Website 2024. All Rights reserved.</p>
      </span>
      <span className="contact">
        <i className="bx bxl-facebook-circle"></i>
        <i className="bx bxl-twitter"></i>
        <i className="bx bxl-instagram"></i>
      </span>
    </div>
  );
};

//----------------------------------------------------------------------------------------------------------------------------------------------------------

const LandingPage = () => {
  return (
    <>
      <div className="navbar">
        <p>Start Bootstrap</p>
        <span>Sign Up</span>
      </div>

      <Slides />

      <div>
        <Features />
      </div>

      <div>
        <AboutProducts />
      </div>

      <div>
        <Cards />
      </div>

      <Slides />

      <Footer />
    </>
  );
};

export default LandingPage;
