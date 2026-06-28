
// export default function Counter() {

//     const [count, setCount] = useState(0);
    


//   return (<div>

//     <h2>{count}</h2>
//     <button onClick={() => setCount(count + 1)}>
//         Increment
//       </button>
//   </div>
//   );
// }
// import Counter from "@/ui/pages/labs/Counter";

// export default function Page() {
//   return <Counter />;
// }
"use client";

import { useState } from "react";
import Navbar from "@/ui/Navbar";
import FoodList from "@/ui/FoodList";
import Cart from "@/ui/Cart";

export default function Home() {
  const [cartCount, setCartCount] = useState(0);

  return (
    <main className="p-8">
      <Navbar cartCount={cartCount} />

      <FoodList
        cartCount={cartCount}
        setCartCount={setCartCount}
      />

      <Cart
        cartCount={cartCount}
        setCartCount={setCartCount}
      />
    </main>
  );
}