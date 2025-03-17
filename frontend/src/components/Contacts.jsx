export default function Contacts() {
  return (
    <section className="contacts">
      <h1 className="contacts__title title title--section">
        <span>Contacts</span> me
      </h1>
      <p className="contacts__text">
        * - field is <span>required</span> for entry
      </p>
      <form
        className="contancts__form form-contacts"
        action="https://formspree.io/f/mkgjgbpr"
        method="POST"
      >
        <div className="form-contacts__item">
          <label className="form-contacts__label" htmlFor="name">
            *Name
          </label>
          <input
            className="form-contacts__input"
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
            required
          />
        </div>
        <div className="form-contacts__item">
          <label className="form-contacts__label" htmlFor="email">
            *Email
          </label>
          <input
            className="form-contacts__input"
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
          />
        </div>
        <div className="form-contacts__item">
          <label className="form-contacts__label" htmlFor="phone">
            Phone
          </label>
          <input
            className="form-contacts__input"
            type="tel"
            id="phone"
            name="phone"
            placeholder="Your phone"
          />
        </div>
        <div className="form-contacts__item">
          <label className="form-contacts__label" htmlFor="tg">
            Telegram
          </label>
          <input
            className="form-contacts__input"
            type="text"
            id="tg"
            name="tg"
            placeholder="Your Telegram"
          />
        </div>

        <div className="form-contacts__item">
          <label className="form-contacts__label" htmlFor="message">
            Message
          </label>
          <textarea
            className="form-contacts__textarea"
            id="message"
            name="message"
            rows="5"
          ></textarea>
        </div>

        <div className="form-contacts__actions">
          <button className="form-contacts__button button" type="submit">
            Send
          </button>
        </div>
      </form>
    </section>
  );
}
