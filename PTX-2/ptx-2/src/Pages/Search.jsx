import React, { useState ,useEffect} from "react";
import Image from "../Images/Image"; 
import { useNavigate } from "react-router-dom"; 
import Footer from "../Components/Footer";
import './Search.style.css'

export default function Search() {
  useEffect(() => {
    document.title = "Search - Pakistan Textile Exchnage";
  }, []);

  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const products = [
    { id: 1, image: Image.image1, title: "HEAVY BOX S/S TEE 9OZ", price: "$30" },
    { id: 2, image: Image.image2, title: "LIGHTWEIGHT COTTON TEE", price: "$50" },
    { id: 3, image: Image.image3, title: "PREMIUM HOODIE", price: "$35" },
    { id: 4, image: Image.image4, title: "CLASSIC DENIM JACKET", price: "$25" },
    { id: 5, image: Image.image5, title: "HEAVY BOX S/S TEE", price: "$18" },
    { id: 6, image: Image.image6, title: "LIGHTWEIGHT COTTON TEE", price: "$18" },
    { id: 7, image: Image.image7, title: "PREMIUM HOODIE", price: "$30" },
    { id: 8, image: Image.image8, title: "CLASSIC DENIM JACKET", price: "$25" },
    { id: 9, image: Image.image9, title: "PREMIUM HOODIE", price: "$12" },
    { id: 10, image: Image.image10, title: "PT-8000", price: "$25" },
    { id: 11, image: Image.image11, title: "PT-1800", price: "$12" },
    { id: 12, image: Image.image12, title: "PT-5000", price: "$25" },
    { id: 13, image: Image.image12, title: "PT-3056", price: "$14" },
    { id: 14, image: Image.image14, title: "PT-2000", price: "$29" },
    { id: 15, image: Image.image15, title: "PT-2050", price: "$10" },
  ];

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().trim().includes(searchTerm.toLowerCase().trim())
  );

  return (
    <>
      <div className="space"></div>
      <div className="space"></div>
      <div className="container text-center">
        <h2>Search Products</h2>
        <input
          type="text"
          className="form-control w-50 mx-auto mt-3"
          placeholder="Search for a product..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <div className="container-fluid mt-4">
        <div className="row">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={`${product.id}-${product.title}`} className="col-sm-12 col-md-6 col-lg-3 mb-4">
                <div className="search-custom-card text-center">
                  <img src={product.image} className="card-img-top" alt={product.title} loading="lazy" />
                  <p className="card-text">{product.title}</p>
                  <button
                    className="btn btn-dark"
                    onClick={() =>
                      navigate(`/ProductDetails/${product.id}`, { state: { product } })
                    }
                  >
                    View Product
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <h3 className="text-danger mt-3">Product Not Found</h3>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
}
