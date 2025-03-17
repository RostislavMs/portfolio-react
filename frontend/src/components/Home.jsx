import { Link } from "react-router-dom";

export default function Home() {
  return (
    <section className="home">
      <div className="home__body">
        <h1 className="home__title title">
          Welcome to <span>my website</span>
        </h1>
        <div className="home__label label">
          My name is <span>Rostyslav Mosiichuk</span>
        </div>
        <div className="home__text text">
          <p>
            Hello! I'm a web developer with experience in designing responsive
            and interactive websites. In my work, I use modern tools and
            technologies to turn ideas into functional web products. Here you
            will find examples of my work and projects that demonstrate my
            skills and approach to development. If you need a high-quality
            website or have any questions, don't hesitate to contact me!
          </p>
        </div>
        <div className="home__actions">
          <Link to="contacts" className="home__btn button">
            Contact me
          </Link>
        </div>
      </div>
      <div className="home__image">
        <img src="./home.png" alt="" />
      </div>
    </section>
  );
}
