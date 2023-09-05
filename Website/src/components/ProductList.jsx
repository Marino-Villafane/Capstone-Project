// export default function ProductList() {
//     return (
//       <div className="productlist">
//         <h1>PRODUCT LIST</h1>
//         <li> Product 1</li>
//         <li>Product 2</li>
//         <li>Product 3</li>
//         <li>Product 4</li>
//         <li> Product 1</li>

//       </div>
//     )}

import React, { useState, useEffect } from 'react';
       
function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map(product => (
         <div className= "proddiv" key={product.id}>
          <p>{product.title}</p>
          <p><img src={product.thumbnail} alt={product.title}/></p>
          <p>{product.price}</p> 
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
