import React from 'react';
import './Blog.style.css';
import Image from '../Images/Image';
import Footer from "../Components/Footer";

export default function Blog1() {
  return (
    <>
    <div className="container-fluid p-0">
      <div className="blog-header ">
        <img src={Image.Blog1} alt="Blog Banner" className="blogs-img" />
        <div className="blog-title">
          <h1>FASHION TRENDS 2025</h1>
        </div>
      </div>

      <div className="container blog-content">
  <h4>1. Sustainable is the New Standard</h4>
  <p>
    In 2025, fashion isn’t just about looking good — it’s about doing good. Brands are shifting toward organic cotton, recycled polyester, and biodegradable materials. Consumers now expect transparency in supply chains and a clear commitment to reducing waste.
  </p>

  <h4>2. Minimalist Aesthetics with a Bold Twist</h4>
  <p>
    Clean lines and neutral tones continue to dominate, but this year, designers are adding unexpected pops of color or texture. Think structured silhouettes paired with bold accessories, or monochrome outfits elevated with a single statement piece.
  </p>

  <h4>3. Tech-Infused Fashion</h4>
  <p>
    Smart fabrics are getting even smarter. From temperature-regulating textiles to garments embedded with fitness trackers or LED patterns, 2025 fashion is merging function with futuristic flair.
  </p>

  <h4>4. Genderless Designs</h4>
  <p>
    Unisex clothing has gone mainstream. Brands are focusing on fluid fits and inclusive styles that defy traditional gender boundaries, offering freedom of expression and comfort for everyone.
  </p>

  <h4>5. Vintage Revival</h4>
  <p>
    Retro styles from the ‘90s and early 2000s are making a strong comeback. Upcycled denim, oversized blazers, and bucket hats are once again fashion staples — proving that great style is timeless.
  </p>

  <p>
    As 2025 unfolds, fashion is evolving into something more meaningful — a blend of self-expression, sustainability, and smart innovation. Whether you're into streetwear, high fashion, or comfort-first fits, this year's trends offer something for every wardrobe.
  </p>
</div>
    </div>
    <Footer/>
    </>

  );
}
