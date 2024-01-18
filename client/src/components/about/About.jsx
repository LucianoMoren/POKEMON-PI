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
            Soy Luciano Moren, un chico de 20 años de Entre Ríos, Argentina,
            enfocado en el estudio de programación. Mi día a día se centra en
            explorar diferentes lenguajes y proyectos. Con un enfoque analítico,
            disfruto resolviendo desafíos y creciendo en este campo en constante
            evolución. Más allá de la programación, hay muchas otras dimensiones
            en mi vida que estoy explorando. ¡Listo para seguir aprendiendo y
            avanzando en este viaje tecnológico!
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
