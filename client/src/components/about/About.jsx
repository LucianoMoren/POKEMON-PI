import React from "react";
import style from "./about.module.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import image from "../../assets/images/bg/bg-white.svg";

function About() {
  return (
    <div className={style.parent}>
      <div className={style.divImage}></div>
      <div className={style.divParagraph}>
        <div>
          <p className={style.paragraph}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed,
            dolore dolor! Quo nisi cupiditate laborum accusantium consequuntur
            inventore, ratione adipisci quidem dolorum excepturi earum dolore
            culpa temporibus quia. Repudiandae, repellendus!
          </p>
        </div>
      </div>
      <footer className={style.footer}>
        <div className={style.contact}>Contact me</div>
        <div className={style.icons}>
          <a
            href="https://www.linkedin.com/in/lucianomoren/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className={style.icon} />
          </a>
          <a
            href="https://github.com/LucianoMoren"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className={style.icon} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default About;
