import '../styles/Home.css'; // ✅ adjust relative path

export default function Home() {
  return (
    <div className="home-container">
      <h1 className="home-heading">Discover Local Services & Vendors</h1>
      <p className="home-subheading">
        Your go-to platform for finding restaurants, catering, real estate, and more near you.
      </p>
      <button className="home-button">Explore Services</button>
    </div>
  );
}
