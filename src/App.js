//Icons
import logo from "./logoSpacers.svg";
import spacers from "./SPACERS.svg";
import cyclo from "./images/cycloStanding.svg";
import greenAlien from "./images/greenAlien.svg";
import astro from "./images/astro.svg";
import facebook from "./socials/facebook.svg";
import instagram from "./socials/instagram.svg";
import twitter from "./socials/twitter.svg";

//Css
import "@fontsource/inter/400.css";
import "./App.css";

//Other
import { useState } from "react";


const characters = [
  {
    id: 1,
    name: "Cyclo",
    background: "#501ED8",
    svg: cyclo,
  },
  {
    id: 2,
    name: "Astro",
    background: "#2F2CC8",
    svg: astro,
  },
  {
    id: 3,
    name: "Alien",
    background: "#1B991A",
    svg: greenAlien,
  },
];

function App() {
  const [currentCharacter, setCurrentCharacter] = useState(characters[0]);
  const [transitioning, setTransitioning] = useState(false);
  let startX, endX;

  const handleSwipe = (direction) => {
    if (transitioning) return;
    setTransitioning(true);

    const currentIndex = characters.findIndex(
      (character) => character.id === currentCharacter.id
    );

    let newIndex;
    if (direction === "left") {
      newIndex = currentIndex === 0 ? characters.length - 1 : currentIndex - 1;
    } else if (direction === "right") {
      newIndex = currentIndex === characters.length - 1 ? 0 : currentIndex + 1;
    }

    setCurrentCharacter(characters[newIndex]);

    setTimeout(() => {
      setTransitioning(false);
    }, 500);
  };
  return (
    <div className="screen">
      <img src={logo} className="logoSpacers" alt="Spacers" />
      <div className="mainContentBG"></div>
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
        <div
          className={`character-swiper ${transitioning ? "transitioning" : ""}`}
          style={{ backgroundColor: currentCharacter.background }}
          onTouchStart={(e) => (startX = e.touches[0].clientX)}
          onTouchMove={(e) => (endX = e.touches[0].clientX)}
          onTouchEnd={() => {
            if (startX - endX > 50) {
              handleSwipe("left");
            } else if (endX - startX > 50) {
              handleSwipe("right");
            }
          }}
        >
          <div className="character-container">
            {characters.map((character) => (
              <img
                key={character.id}
                id={character.name}
                src={character.svg}
                alt={character.name}
                className={`character ${
                  currentCharacter.id === character.id ? "active" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="details">
        <span>Iskusite digitalni univerzum kao nikad do sad</span>
        <button>PREUZMI IGRICU</button>
      </div>
      <div className="footer">
        <div className="footerText">
          <span>
            Ovaj projekat je realizovan kroz izuzetnu saradnju Arcosix-a, IDK
            Studio i Malac Računalac, Bihać
          </span>
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
