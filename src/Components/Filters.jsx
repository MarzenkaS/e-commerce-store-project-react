/**
 * Filters.jsx - Milestone 3
 * This component renders the search bar and category dropdown for filtering products.
 */

function Filters({
  searchTerm,
  setSearchTerm,
  selectedCategory,
  setSelectedCategory,
}) {
  return (
    <div className="filters flex justify-center gap-6 mb-6">
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Category Dropdown */}
      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="p-2 border border-gray-300 rounded shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="">All Categories</option>
        <option value="beauty">Beauty</option>
        <option value="fragrances">Fragrances</option>
        <option value="groceries">Groceries</option>
        <option value="furniture">Furniture</option>
        <option value="home-decoration">Home Decoration</option>
<option value="kitchen-accessories">Kitchen Accessories</option>
<option value="laptops">Laptops</option>
<option value="mens-shirts">Mens Shirts</option>
<option value="mens-shoes">Mens Shoes</option>
<option value="mens-watches">Mens Watches</option>
<option value="mobile-accessories">Mobile Accessories</option>
<option value="motorcycle">Motorcycle</option>
<option value="skin-care">Skin Care</option>
<option value="smartphones">Smartphones</option>
<option value="sports-accessories">Sports Accessories</option>
<option value="sunglasses">Sunglasses</option>
<option value="tablets">Tablets</option>
<option value="tops">Tops</option>
<option value="vehicle">Vehicle</option>
<option value="womens-bags">Womens Bags</option>
<option value="womens-dresses">Womens Dresses</option>
<option value="womens-jewellery">Womens Jewellery</option>
<option value="womens-shoes">Womens Shoes</option>
<option value="womens-watches">Womens Watches</option>
      </select>
    </div>
  );
}

export default Filters;
