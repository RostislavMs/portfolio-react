export default function About() {
  function calculateAge(birthDate) {
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }

    return age;
  }

  return (
    <section className="about">
      <div className="about__body">
        <h2 className="about__title title title--section">
          <span>About</span> me
        </h2>
        <div className="about__label label">
          I`m <span>Web Developer</span>
        </div>
        <div className="about__text text">
          <p>
            Hi, I'm Rostyslav - a web developer with a passion for creating
            modern, user-friendly web applications. My specialization is
            front-end development using HTML, CSS (SCSS), minimal JavaScript,
            and tools such as Vite and the BEM methodology. I am constantly
            improving my skills and following the latest trends in web
            development.
          </p>
          <p>
            I have experience working on various types of projects. My task is
            to create a product for the client that combines aesthetics and
            functionality. In my free time, I study new technologies and improve
            my knowledge in computer graphics. My goal is to expand my
            professional arsenal and participate in interesting projects.
          </p>
        </div>
      </div>
      <div className="about__info info-about">
        <div className="info-about__item">
          <div className="info-about__label">Name:</div>
          <div className="info-about__text">Rostyslav</div>
        </div>
        <div className="info-about__item">
          <div className="info-about__label">Surname:</div>
          <div className="info-about__text">Mosiichuk</div>
        </div>
        <div className="info-about__item">
          <div className="info-about__label">Birthday:</div>
          <div className="info-about__text">16/09/2005</div>
        </div>
        <div className="info-about__item">
          <div className="info-about__label">Age:</div>
          <div className="info-about__text">
            {calculateAge(new Date(2005, 8, 16))}
          </div>
        </div>
        <div className="info-about__item">
          <div className="info-about__label">Country:</div>
          <div className="info-about__text">Ukraine</div>
        </div>
        <div className="info-about__item">
          <div className="info-about__label">City:</div>
          <div className="info-about__text">Zhytomyr</div>
        </div>
        <div className="info-about__item">
          <div className="info-about__label">Email:</div>
          <a
            href="mailto:mosijcukrostislav7@gmail.com"
            className="info-about__text"
          >
            mosijcukrostislav7@gmail.com
          </a>
        </div>
        <div className="info-about__item">
          <div className="info-about__label">Phone:</div>
          <a href="tel:+380680862716" className="info-about__text">
            +380680862716
          </a>
        </div>
      </div>
    </section>
  );
}
