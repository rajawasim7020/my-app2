"use client";

import { useState } from "react";
import { menuItems } from "./menuData";
import MenuCard from "./MenuCard";
import CategoryButtons from "./CategoryButtons";

const categories = [
  "All",
  "Special Food",
  "Mexican",
  "Italian",
  "Japanese",
  "Drinks",
  "Lunch",
  "More Item",
];

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter(
          (item) => item.category === selectedCategory
        );

  return (
    <section className="menu-section">

      {/* Heading */}

      <h1 className="menu-title">
        Our Delicious Menu
      </h1>

      <p className="menu-subtitle">
        Choose your favourite dishes from our restaurant.
      </p>

      {/* Category Buttons */}

      <CategoryButtons
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      {/* Food Cards */}

      <div className="menu-grid">
        {filteredItems.map((item) => (
          <MenuCard
            key={item.id}
            item={item}
          />
        ))}
      </div>

    </section>
  );
}