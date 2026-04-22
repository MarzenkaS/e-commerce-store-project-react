/**
 * ProductCard.jsx - Milestone 2
 * This component is responsible for rendering individual product cards.
 * It receives product data as props and displays the product image, title, price, and an "Add to Cart" button.
 */

function ProductCard({
  product,
  onAddToCart,
  onViewDetails,
  onRemoveFromCart,
}) {
  return (
    <div className="p-4 bg-orange-100 shadow-md rounded-lg flex flex-col items-center">
      {/* Product Image */}
      <img
        src={product.thumbnail}
        alt={product.title}
        className="w-32 h-32 object-cover mb-4"
      />

      {/* Product Title */}
      <h3 className="text-lg font-bold text-gray-800">{product.title}</h3>

      {/* Product Price */}
      <p className="text-gray-600">{product.price.toFixed(2)} €</p>

      {/*  Buttons */}
      <div className="mt-3 relative w-full flex items-center justify-center">
        {/*  Add to Cart Button */}
        <div className="flex gap-4">
          <button
            onClick={() => onAddToCart(product)}
            className="bg-orange-400 text-white py-1 px-3 rounded hover:bg-white hover:text-orange-400"
          >
            Add to Cart
          </button>
          {/*  View more Button */}
          <button
            onClick={() => onViewDetails(product)}
            className="bg-white text-orange-500 py-1 px-3 rounded hover:bg-orange-400 hover:text-white"
          >
            View more
          </button>
        </div>

        {/* Remove Button */}
        <button
          onClick={() => onRemoveFromCart(product)}
          className="absolute right-0 p-2 rounded text-lg bg-orange-100 text-white hover:bg-white"
          title="Remove from cart"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
