import React from 'react';
import './AboutMe.css';
import photo from '../../images/my-photo2.jpg';

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2 className="about-me__header">Студент</h2>

      <div className="about-me__container">
        <div className="about-me__info">
          <h3 className="about-me__name">Павел</h3>
          <p className="about-me__job">Фронтенд-разработчик, 29 лет</p>
          <p className="about-me__description">
          Я родился и живу в Челябинске, закончил Институт Спорта Туризма и Сервиса Южно-Уральского государственного университета. У меня есть жена и дочь.
          Я люблю слушать музыку, а ещё увлекаюсь пауэрлтфтингом. 
          Недавно начал кодить. С 2018 года работал в турфирме «Сусанин». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.
          </p>

          <ul className="about-me__links">
            <li><a className="about-me__link" href="https://github.com/Pavel-174">Github</a></li>
          </ul>
        </div>
        <img src={photo} alt="my photo" className="about-me__photo" />
      </div>
    </section>
  );
};

export default AboutMe;