
// import Image from "next/image";

// interface Props {
//   item: {
//     id: number;
//     name: string;
//     image: string;
//     price: number;
//     rating: number;
    
//   };
// }

// export default function MenuCard({ item }: Props) {
//   return (
//     <div className="menu-card">

//       <div className="image-box">
//         <Image
//           src={item.image}
//           alt={item.name}
//           width={180}
//           height={180}
//           className="food-img"
//         />
//       </div>

//       <div className="card-body">

//         <div className="rating">
//           {"★".repeat(item.rating)}
//           {"☆".repeat(5 - item.rating)}
//         </div>

//         <h3>{item.name}</h3>

//         <div className="price-cart">

//           <span className="price">
//             ${item.price}
//           </span>

//           <button>
//             Add Cart
//           </button>

//         </div>

//       </div>

//     </div>
//   );
// }
import Image from "next/image";

interface Props {
  item: {
    id: number;
    name: string;
    image: string;
    price: number;
    rating: number;
    description: string; // ✅ Added
  };
}

export default function MenuCard({ item }: Props) {
  return (
    <div className="menu-card">

      <div className="image-box">
        <Image
          src={item.image}
          alt={item.name}
          width={180}
          height={180}
          className="food-img"
        />
      </div>

      <div className="card-body">

        {/* Rating */}
        <div className="rating">
          {"★".repeat(item.rating)}
          {"☆".repeat(5 - item.rating)}
        </div>

        {/* Food Name */}
        <h3>{item.name}</h3>

        {/* Description */}
        <p className="description">
          {item.description}
        </p>

        {/* Price & Button */}
        <div className="price-cart">

          <span className="price">
            ${item.price.toFixed(2)}
          </span>

          <button>
            Add Cart
          </button>

        </div>

      </div>

    </div>
  );
}