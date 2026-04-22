/**
 * Header.jsx - Milestone 3
 * This component renders the website header with the title and a navigation bar.
 * The navigation includes links and the cart view button.
 */

function Header({ cart }) {
  return (
    <header className="bg-orange-400 text-white p-4 flex justify-between items-center" cart={cart}>
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
          <button className="bg-white text-orange-400 py-1 px-3 rounded hover:bg-orange-400 hover:text-white">
            View Cart ({cart.length})
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;
