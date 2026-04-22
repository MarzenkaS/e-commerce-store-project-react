/**
 * Main.jsx - Milestone 3
 * This component fetches products dynamically from the Fake Store API and displays them.
 * Implements search and category filter functionality.
 */

import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import Filters from "./Filters";

function Main({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
  cart,
  setCart,
}) {
  // State for storing products
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };
  const handleRemoveFromCart = (product) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== product.id));
  };
  const handleViewDetails = (product) => {
    setSelectedProduct(product);
  };

  // Fetch products from the Fake Store API
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("https://dummyjson.com/products?limit=0");
        const data = await response.json();
        setProducts(data.products);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
      }
    }

    fetchProducts();
  }, []); // Empty dependency array ensures the fetch runs once

  // Filter products based on search term and selected category
  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory
      ? product.category === selectedCategory
      : true;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="p-6 bg-gray-100 min-h-screen">
      {/* Filters Section */}
      <Filters
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        cart={cart}
        setCart={setCart}
      />

      {/* View More */}

      {selectedProduct && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50" /* bg-orange-100 view on whole page plus inset-0 */
          onClick={() => setSelectedProduct(null)} /* close clicking on bg */
        >
          <div
            className="bg-white p-6 rounded-lg shadow-lg w-80 text-center"
            onClick={(e) =>
              e.stopPropagation()
            } /* prevent closing when clicking inside the modal */
          >
            <h2 className="text-xl font-bold">{selectedProduct.title}</h2>

            <img
              src={selectedProduct.thumbnail}
              alt={selectedProduct.title}
              className="w-40 h-40 object-cover mx-auto my-4"
            />

            <p className="text-gray-700">{selectedProduct.description}</p>

            <p className="font-semibold mt-2">
              {selectedProduct.price.toFixed(2)} €
            </p>

            <div className="mt-4 flex justify-center gap-3">
              {/* Add To Cart button */}
              <button
                onClick={() => handleAddToCart(selectedProduct)}
                className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-white hover:text-orange-400"
              >
                Add to Cart
              </button>

              {/* Close button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-white hover:text-orange-400"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Product Listings */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {loading ? (
          <p className="text-center col-span-full">Loading products...</p>
        ) : (
          filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onViewDetails={handleViewDetails}
              onRemoveFromCart={handleRemoveFromCart}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default Main;
