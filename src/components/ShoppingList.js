import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // Add state for selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Handle change from the <select> dropdown
  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value); // Update selected category
  }

  // Filter items before displaying
  const itemsToDisplay = items.filter((item) => {
    // If "All" is selected, return everything
    if (selectedCategory === "All") return true;

    // Otherwise, return items matching the selected category
    return item.category === selectedCategory;
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        {/* Dropdown menu to select category */}
        <select name="filter" onChange={handleCategoryChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>

      <ul className="Items">
        {/* Render only filtered items */}
        {itemsToDisplay.map((item) => (
          <Item
            key={item.id}
            name={item.name}
            category={item.category}
          />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
