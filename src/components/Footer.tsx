export default function Footer() {
  return (
    
    
    <footer className="bg-red-600 text-white py-10 px-8 mt-20">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold">Foodie</h2>

          <p className="mt-3">
            Delicious meals delivered to your doorstep.
          </p>
        </div>

        <button className="bg-white text-red-600 px-6 py-3 rounded-full font-bold cursor-pointer hover:bg-gray-100 hover:scale-105 transition-all duration-300">
  Order Now
</button>
      </div>

      <p className="mt-8 text-sm">
        © 2026 Foodie. All rights reserved.
      </p>
    </footer>
  );
}
