import "./BurgerParallax.css";
import panTop from "../../assets/img/burgerBreadTop.png";
import texto from "../../assets/img/middleBurger.png";
import panBot from "../../assets/img/burgerBreadBot.png";
import arrow from "../../assets/img/arrow.png";
import patty from "../../assets/img/pattyDraw.png";
import espatula from "../../assets/img/espatulaDraw.png";
import camion from "../../assets/img/camionDraw.png";
import coca from "../../assets/img/cocaDraw.png";
import papas from "../../assets/img/friedDraw.png";

import { useEffect, useState } from "react";

export const BurgerParallax = () => {
  const [scrollY, setScrollY] = useState(0);

  const minScroll = 0;
  const maxScroll = 2000;

  useEffect(() => {
    const handleScroll = () => {
      const newScrollY = window.scrollY;
      if (newScrollY < minScroll) {
        setScrollY(minScroll);
      } else if (newScrollY > maxScroll) {
        setScrollY(maxScroll);
      } else {
        setScrollY(newScrollY);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollY]);

  return (
    <>
      <div className="burger">
        <img
          src={panTop}
          style={{
            transform: `translateY(${scrollY > minScroll ? scrollY * .99 : 0}px)`
          }}
          alt="Pan Superior"
          className={`pan-top`}
        />
        <img
          src={texto}
          alt="Contenido en Medio"
          style={{
            transform: `translateY(${scrollY > minScroll ? scrollY * 1.03 : 0}px) scale(${0.32 + (scrollY / 10000)})`
          }}
          className={`content-in-middle ${scrollY > 200 ? "" : "hideBurger"}`}
        />
        <img
          src={panBot}
          style={{
            transform: `translateY(${scrollY > minScroll ? scrollY * 1.08 : 0}px)`
          }}
          alt="Pan Inferior"
          className={`pan-bottom`}
        />
      </div>
      <img className="arrow" src={arrow} alt="arrow" />
      <img className="espatula" src={espatula} alt="espatula" />
      <img className="patty" src={patty} alt="patty" />
      <img className="camion" src={camion} alt="camion" />
      <img className="coca" src={coca} alt="coca" />
      <img className="papas" src={papas} alt="papas" />

    </>
  );
};
