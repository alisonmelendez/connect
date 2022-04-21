import { useEffect, useState } from "react";
import "./ScrollButton.scss";

function ScrollButton() {
  // The back-to-top button is hidden at the beginning
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' 
    });
  };

  return (
    <>

      {showButton && (
        <button onClick={scrollToTop} className="back-to-top">
          <img src="https://img.icons8.com/metro/26/000000/long-arrow-up.png"/>        
        </button>
      )}
    </>
  );
};

export default ScrollButton;