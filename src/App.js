import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import Footer from "./components/Footer";
import data from "./data";

export default function App() {
  // Get the data from data.js and return a new array cards modified with new props
  const cards = data.map((item) => {
    return (
      // Add to every array item new property via React
      // Array of JSX elements
      <Card
        // When import data with .map the JSX object MUST have a unique key
        // key property is always required
        key={item.id}
        // Destructure the item into individual props
        {...item}

        // Instead of passing every props, I pass the whole item and so its structure
        // item={item}

        // img={item.coverImg}
        // rating={item.stats.rating}
        // reviewCount={item.stats.reviewCount}
        // location={item.location}
        // title={item.title}
        // price={item.price}
        // openSpots={item.openSpots}
      />
    );
  });

  return (
    <div>
      <Navbar />
      <Hero />
      {/* Section where to put the experiences cards */}
      {/* Look at CSS */}
      <section className="cards-list">{cards}</section>
      <Footer />
    </div>
  );
}
