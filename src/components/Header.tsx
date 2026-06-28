// export default function Header() {
//   return (
//     <header className="flex justify-between items-center px-8  py-6">
//       <h1 className="text-3xl font-bold text-red-600">Foodie</h1>

//       <nav className="flex gap-6">
//         {/* <a href="#">Home</a>
//         <a href="#">Menu</a>
//         <a href="#">Offers</a>
//         <a href="#">About</a>
//         <a href="#">Contact</a> */}
//       </nav>
//       <nav className="flex gap-8 ml-[100px]">
//   <a
//     href="#"
//     className="text-blue-600 text-xl font-semibold transition-all duration-300 hover:text-red-500"
//   >
//     Home
//   </a>

//   <a
//     href="#"
//     className="text-blue-600 text-xl font-semibold transition-all duration-300 hover:text-red-500"
//   >
//     Menu
//   </a>

//   <a
//     href="#"
//     className="text-blue-600 text-xl font-semibold transition-all duration-300 hover:text-red-500"
//   >
//     Offers
//   </a>

//   <a
//     href="#"
//     className="text-blue-600 text-xl font-semibold transition-all duration-300 hover:text-red-500"
//   >
//     About
//   </a>

//   <a
//     href="#"
//     className="text-blue-600 text-xl font-semibold transition-all duration-300 hover:text-red-500"
//   >
//     Contact
//   </a>
// </nav>

//       <div className="flex items-center gap-4">
 

//   <img
//   src="/palnate_image.jpg"
//   alt="Profile"
//   className="w-12 h-12 rounded-full border-2 border-red-600 object-cover"
// />
// </div>
//     </header>
//   );
// }
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-8 py-6">
      <h1 className="text-3xl font-bold text-red-600">Foodie</h1>

      <nav className="flex gap-8 ml-[100px]">

        <Link
          href="/"
          className="text-blue-600 text-xl font-semibold transition-all duration-300 hover:text-red-500"
        >
          Home
        </Link>

        <Link
          href="/menu"
          className="text-blue-600 text-xl font-semibold transition-all duration-300 hover:text-red-500"
        >
          Menu
        </Link>

        <Link
          href="/offers"
          className="text-blue-600 text-xl font-semibold transition-all duration-300 hover:text-red-500"
        >
          Offers
        </Link>

        <Link
          href="/about"
          className="text-blue-600 text-xl font-semibold transition-all duration-300 hover:text-red-500"
        >
          About
        </Link>

        <Link
          href="/contact"
          className="text-blue-600 text-xl font-semibold transition-all duration-300 hover:text-red-500"
        >
          Contact
        </Link>

      </nav>

      <div className="flex items-center gap-4">
        <img
          src="/palnate_image.jpg"
          alt="Profile"
          className="w-12 h-12 rounded-full border-2 border-red-600 object-cover"
        />
      </div>
    </header>
  );
}



 
       
       