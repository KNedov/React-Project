import NoPhoneMsg from "../no-phone-msg/NoPhoneMsg";
import ProductCard from "../product-card/ProductCard";
import './Catalog.css'

export default function Catalog() {
    
    return(

        <main className="products-page">
  <div className="container">
    {/* Catalog Intro Section */}
    <section className="catalog-intro">
      <h1>Our Product Catalog</h1>
      <p className="intro-description">
        Explore our premium selection of smartphones and tablets. All devices
        come with warranty and pass strict quality control checks.
      </p>
    </section>
    {/* Category Tabs */}
    <div className="category-tabs">
      <button className="tab-btn active">Smartphones</button>
      <button className="tab-btn">Tablets</button>
    </div>
    {/* Products Grid */}
    <div className="products-grid">
      {/* Smartphones */}
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>
      <ProductCard/>

      <NoPhoneMsg/>
    </div>
  </div>
</main>

    )
}