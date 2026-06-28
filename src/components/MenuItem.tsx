import Image from "next/image";

type MenuItemProps = {
  item: {
    id: number;
    name: string;
    image: string;
    price: number;
    rating: number;
    description: string;
  };
};

export default function MenuItem({ item }: MenuItemProps) {
  return (
    <div className="food-card">
      {/* Food Image */}
      <div className="food-image">
        <Image
          src={item.image}
          alt={item.name}
          width={180}
          height={180}
        />
      </div>

      {/* Food Name */}
      <h3>{item.name}</h3>

      {/* Rating */}
      <div className="rating">
        {"★".repeat(item.rating)}
        {"☆".repeat(5 - item.rating)}
      </div>

      {/* Description */}
      <p>{item.description}</p>

      {/* Price & Button */}
      <div className="price-cart">
        <h4>${item.price.toFixed(2)}</h4>

        <button>Add To Cart</button>
      </div>
    </div>
  );
}