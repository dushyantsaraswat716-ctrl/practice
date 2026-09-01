
const cars = [
  {
    name: "BMW M4 Competition",
    price: "$78,100",
    image:
      "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Mercedes AMG GT",
    price: "$118,600",
    image:
      "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Audi RS5",
    price: "$79,900",
    image:
      "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=900&q=80",
  },
];

function home() {
  return (
    <div className="app">
      {/* Navbar */}
      <header className="navbar">
        <div className="logo">
          Auto<span>Drive</span>
        </div>

        <nav>
          <a href="#home">Home</a>
          <a href="#cars">Cars</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="login-btn">Login</button>
      </header>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="small-title">FIND YOUR DREAM CAR</p>

          <h1>
            Drive Your <span>Dream</span>
            <br />
            Car Today.
          </h1>

          <p className="hero-text">
            Discover premium cars from trusted dealers. Find the perfect car
            that matches your style, needs, and budget.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">Explore Cars →</button>
            <button className="secondary-btn">Contact Us</button>
          </div>
        </div>
      </section>

      {/* Search Box */}
      <section className="search-section">
        <div className="search-box">
          <div className="input-group">
            <label>Brand</label>
            <select>
              <option>All Brands</option>
              <option>BMW</option>
              <option>Mercedes</option>
              <option>Audi</option>
              <option>Tesla</option>
            </select>
          </div>

          <div className="input-group">
            <label>Car Type</label>
            <select>
              <option>All Types</option>
              <option>SUV</option>
              <option>Sedan</option>
              <option>Sports</option>
              <option>Electric</option>
            </select>
          </div>

          <div className="input-group">
            <label>Price</label>
            <select>
              <option>Any Price</option>
              <option>Under $30k</option>
              <option>$30k - $60k</option>
              <option>$60k - $100k</option>
              <option>$100k+</option>
            </select>
          </div>

          <button className="search-btn">Search Cars</button>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="cars-section" id="cars">
        <div className="section-heading">
          <div>
            <p className="small-title">OUR COLLECTION</p>
            <h2>Featured Cars</h2>
          </div>

          <button className="view-btn">View All Cars →</button>
        </div>

        <div className="car-grid">
          {cars.map((car) => (
            <div className="car-card" key={car.name}>
              <div className="car-image">
                <img src={car.image} alt={car.name} />
                <span className="tag">Featured</span>
              </div>

              <div className="car-info">
                <h3>{car.name}</h3>

                <div className="car-details">
                  <span>⚡ Automatic</span>
                  <span>⛽ Petrol</span>
                </div>

                <div className="card-bottom">
                  <strong>{car.price}</strong>
                  <button>View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-section" id="about">
        <div className="why-content">
          <p className="small-title">WHY AUTODRIVE?</p>
          <h2>Everything You Need To Find Your Perfect Car</h2>
          <p>
            We make buying your next car simple, transparent, and enjoyable.
            Browse thousands of vehicles from verified sellers.
          </p>

          <div className="features">
            <div>
              <div className="feature-icon">✓</div>
              <h3>Trusted Dealers</h3>
              <p>Buy from verified and reliable dealers.</p>
            </div>

            <div>
              <div className="feature-icon">★</div>
              <h3>Best Prices</h3>
              <p>Competitive prices on quality vehicles.</p>
            </div>

            <div>
              <div className="feature-icon">🛡</div>
              <h3>Secure Buying</h3>
              <p>Safe and transparent car buying experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta" id="contact">
        <h2>Ready To Find Your Dream Car?</h2>
        <p>Start exploring our collection today.</p>
        <button className="primary-btn">Browse Cars →</button>
      </section>

      {/* Footer */}
      <footer>
        <div className="logo">
          Auto<span>Drive</span>
        </div>
        <p>© 2026 AutoDrive. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default home;
