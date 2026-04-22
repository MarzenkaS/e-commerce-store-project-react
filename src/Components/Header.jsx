import { useState } from "react";
/**
 * Header.jsx - Milestone 3
 * This component renders the website header with the title and a navigation bar.
 * The navigation includes links and the cart view button.
 */

function Header({ cart, setCart }) {
  const [showCartDropdown, setShowCartDropdown] = useState(false);

  const handleRemoveFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  {/* grouping cart */}
  const groupedCart = cart.reduce((acc, item) => {
    const existingItem = acc.find((product) => product.id === item.id);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      acc.push({ ...item, quantity: 1 });
    }

    return acc;
  }, []);

  return (
    <header className="bg-orange-400 text-white p-4 flex justify-between items-center">
      {/* Website Title */}
      <h1 className="text-2xl font-bold underline">All in One Store</h1>

      {/* Navigation and Cart */}
      <nav className="flex items-center space-x-6">
        <a href="/" className="hover:underline">
          Home
        </a>
        <a href="/products" className="hover:underline">
          Products
        </a>
        <a href="/about-us" className="hover:underline">
          About Us
        </a>
        <a href="/privacy-policy" className="hover:underline">
          Privacy Policy
        </a>

        <div className="relative">
          <button
            onClick={() => setShowCartDropdown((prev) => !prev)}
            className="bg-white text-orange-400 py-1 px-3 rounded hover:bg-orange-400 hover:text-white"
          >
            🛒 Cart
          </button>

          {cart.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full shadow">
              {cart.length}
            </span>
          )}

          {showCartDropdown && (
            <div className="absolute right-0 mt-3 w-72 bg-white text-gray-800 rounded-lg shadow-lg p-4 z-50">
              <h2 className="font-bold text-lg mb-3">Your Cart</h2>

              {cart.length === 0 ? (
                <p className="text-sm text-gray-500">Your cart is empty.</p>
              ) : (
                <ul className="space-y-3 max-h-64 overflow-y-auto">
                  {groupedCart.map((item) => (
                    <li
                      key={item.id}
                      className="flex justify-between items-start gap-2 border-b pb-2"
                    >
                      <div>
                        <p className="text-sm font-semibold">
                          {item.title}{" "}
                          <span className="text-gray-500">
                            x{item.quantity}
                          </span>
                        </p>
                        <p className="text-sm text-gray-500">
                          {(item.price * item.quantity).toFixed(2)} €
                        </p>
                      </div>

                      <button
                        onClick={() => handleRemoveFromCart(item.id)}
                        className="text-sm text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </nav>
    </header>
  );
}

export default Header;
