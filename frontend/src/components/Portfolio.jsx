import PortfolioList from "./PortfolioList";

export default function Portfolio() {
  return (
    <section className="portfolio">
      <h1 className="portfolio__title title title--section">
        My <span>Projects</span>
      </h1>
      <PortfolioList />
    </section>
  );
}
