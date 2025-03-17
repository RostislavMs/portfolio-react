export default function Skills() {
  return (
    <section className="skills">
      <h2 className="skills__title title title--section">
        My <span>Skills</span>
      </h2>
      <div className="skills__items">
        <div className="skills__item item-skill html">
          <div className="item-skill__info">
            <h3 className="item-skill__title">HTML</h3>
            <p className="item-skill__num">90%</p>
          </div>
          <div className="item-skill__progress"></div>
        </div>
        <div className="skills__item item-skill css">
          <div className="item-skill__info">
            <h3 className="item-skill__title">CSS</h3>
            <p className="item-skill__num">80%</p>
          </div>
          <div className="item-skill__progress"></div>
        </div>
        <div className="skills__item item-skill scss">
          <div className="item-skill__info">
            <h3 className="item-skill__title">Scss</h3>
            <p className="item-skill__num">50%</p>
          </div>
          <div className="item-skill__progress"></div>
        </div>
        <div className="skills__item item-skill js">
          <div className="item-skill__info">
            <h3 className="item-skill__title">js</h3>
            <p className="item-skill__num">30%</p>
          </div>
          <div className="item-skill__progress"></div>
        </div>
        <div className="skills__item item-skill react">
          <div className="item-skill__info">
            <h3 className="item-skill__title">React</h3>
            <p className="item-skill__num">15%</p>
          </div>
          <div className="item-skill__progress"></div>
        </div>
        <div className="skills__item item-skill photoshop">
          <div className="item-skill__info">
            <h3 className="item-skill__title">Photoshop</h3>
            <p className="item-skill__num">7%</p>
          </div>
          <div className="item-skill__progress"></div>
        </div>
        <div className="skills__item item-skill vite">
          <div className="item-skill__info">
            <h3 className="item-skill__title">vite</h3>
            <p className="item-skill__num">5%</p>
          </div>
          <div className="item-skill__progress"></div>
        </div>
        <div className="skills__item item-skill php">
          <div className="item-skill__info">
            <h3 className="item-skill__title">php</h3>
            <p className="item-skill__num">5%</p>
          </div>
          <div className="item-skill__progress"></div>
        </div>
      </div>
    </section>
  );
}
