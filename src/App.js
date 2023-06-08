import logo from "./logoSpacers.svg";
import spacers from "./SPACERS.svg";
import "./App.css";
import "@fontsource/inter/400.css";
import cyclo from "./cyclo/cycloStanding.svg";
import cycloBG from "./cyclo/cycloBackground.svg";
import ImageGallery from "react-image-gallery";
import greenAlien from "./alien/greenAlien.svg";
import astro from "./astro/astro.svg";
import astroBG from "./astro/astroBG.svg";
import greenAlienBG from "./alien/greenAlienBG.svg";
import facebook from "./socials/facebook.svg";
import instagram from "./socials/instagram.svg";
import twitter from "./socials/twitter.svg";
import { useState } from "react";

const images = [
  {
    original: greenAlien,
    background: greenAlienBG,
  },
  {
    original: astro,
    background: astroBG,
  },
  {
    original: greenAlien,
    background: cycloBG,
  },
  
];

function App() {
  // eslint-disable-next-line no-unused-vars
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleSlide = (currentIndex) => {
    setCurrentIndex(currentIndex);
  };
  return (
    <div className="screen">
      <img src={logo} className="logoSpacers" alt="Spacers" />
      <div className="mainContent">
        <p className="aboutGameText">
          Inovativna igra koja spaja AI, AR i klasičnu arkadnu akciju
        </p>
        <p className="aboutGameHeader">
          <img src={spacers} alt="SPACERS" />
        </p>
        <p className="aboutGameSubheader">3 KARAKTERA</p>
        <p className="aboutGameSubtext">
          Zaronite u svijet nevjerojatnih mogućnosti uz naš neodoljivi trio!
          Preuzmite igricu sada i otisnite se na nezaboravnu avanturu kroz
          digitalni univerzum koji ruši sve granice.
        </p>
      </div>
      <div className="aliens">
        <img
          className="alienBG"
          src={images[currentIndex].background}
          alt="characterBackground"
        />
        <ImageGallery
          className="alien"
          onSlide={handleSlide}
          items={images}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          autoPlay
          showNav={false}
        />
      </div>
      <div className="details">
        <span>Iskusite digitalni univerzum kao nikad do sad</span>
        <button>PREUZMI IGRICU</button>
      </div>
      <div className="footer">
        <div className="footerText">
          <span>Ovaj projekat je realizovan kroz izuzetnu saradnju Arcosix-a, IDK Studio i Malac Računalac, Bihać</span>
        </div>
        <div className="footerMedia">
          <span>© 2023</span>
          <div>
            <img src={facebook} alt="FB" />
            <img src={instagram} alt="IG" />
            <img src={twitter} alt="Twitter" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
