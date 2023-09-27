import React, { useState, useEffect } from "react";
// import "./styles/layouts.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function HomePage() {
  const [products, setProducts] = useState([]);
  const [comments, setComments] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    // Fetch top-rated products from the API
    fetch("https://dummyjson.com/products?limit=10")
      .then((response) => response.json())
      .then((data) => setProducts(data.products))
      .catch((error) =>
        console.error("Error fetching top-rated products:", error)
      );

    // Fetch customer comments from the API
    fetch("https://dummyjson.com/comments?limit=10")
      .then((response) => response.json())
      .then((data) => setComments(data.comments))
      .catch((error) =>
        console.error("Error fetching customer comments:", error)
      );
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send a request to your server)
    console.log("Form data submitted:", formData);
  };



  
  return (
    <div className="App">
      <header>
        <h1>Welcome to Yory Ecommerce Store</h1>
      </header>

      <section className="top-rated-products">
        <h2>Featured Products</h2>
        <Slider
          dots={true}
          infinite={true}
          speed={500}
          slidesToShow={4} // Adjust the number of products to show per slide
          slidesToScroll={3}
          autoplay={true}
        >
          {products.map((product) => (
            <div key={product.id} className="product">
              <img src={product.images[0]} alt={product.name} />
              <h3>{product.title}</h3>
              <p>Price: ${product.price}</p>
              <button>Shop Now</button>
            </div>
          ))}
        </Slider>
      </section>

      <section className="customer-comments">
        <h2>Customer Reviews</h2>
        <div className="review-list">
          <Slider
            dots={true}
            infinite={true}
            speed={500}
            slidesToShow={5} // Adjust the number of products to show per slide
            slidesToScroll={1}
            autoplay={true}
          >
            {comments.map((review) => (
              <div key={review.id} className="review">
                <p>{review.body}</p>
                <p>- {review.customerName}</p>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
