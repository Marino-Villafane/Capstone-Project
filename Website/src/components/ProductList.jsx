import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
       
function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterOption, setFilterOption] = useState('productName'); // Default filter option// ...

  const handleSearch = () => {
    // Filter products based on search criteria and update the filtered product list
    const filteredProducts = products.filter((product) => {
      if (filterOption === 'productName') {
        return product.name.toLowerCase().includes(searchQuery.toLowerCase());
      } else if (filterOption === 'category') {
        return product.category.toLowerCase().includes(searchQuery.toLowerCase());
      }
      return true; // No filter applied
    });
  
    setSelectedProduct(selectedProduct);
  };

  // Function to filter products based on search criteria
const filteredProducts = products.filter((product) => {
  // Check if product.name is defined
  const productName = product.name ? product.name.toLowerCase() : ''; 
  // Check if product.category is defined
  const productCategory = product.category ? product.category.toLowerCase() : ''; 

  if (filterOption === 'productName') {
    return productName.includes(searchQuery.toLowerCase());
  } else if (filterOption === 'category') {
    return productCategory.includes(searchQuery.toLowerCase());
  }
  return true; // No filter applied
});

// Render the filtered list of products
const productItems = filteredProducts.map((product) => (
  <div key={product.id}>
    <h2>{product.name}</h2>
    <p>Price: ${product.price}</p>
    <button onClick={() => handleProductSelect(product)}>View Details</button>
  </div>
));

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data.products); // Log the data to see the structure
        if (Array.isArray(data.products)) {
          setProducts(data.products);
        } else {
          throw new Error('Data is not in the expected format');
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error fetching data: {error.message}</p>;
  }

  return (
    <div >
      <h2>Product List</h2>
      <div>
        <input
          type="text"
          placeholder="Search by name or category"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <select
          value={filterOption}
          onChange={(e) => setFilterOption(e.target.value)}
        >
          <option value="productName">Product Name</option>
          <option value="category">Category</option>
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>
      <ul id='productlist'>
        {products.map(product => (
         <div key={product.id}>
          <p>{product.title}</p>
          <p><img src={product.thumbnail} alt={product.title}/></p>
          <p>{"$"}{product.price}</p>
          <p><Link to={`/productlist/${product.id}`}>See More...</Link></p> 
          </div>
        ))}
      </ul>
    </div>
  );
}
export default ProductList;
//       </div>
//     );
//   }
