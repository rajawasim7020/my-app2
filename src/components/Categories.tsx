export default function Categories() {
  const categories = [
    "Pizza",
    "Burger",
    "Biryani",
    "Chinese",
    "Desserts",
    "Drinks",
  ];

  return (
    <section className="px-8 py-16">
      <h2 className="text-4xl font-bold text-center mb-10">
        Popular Categories
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-6 gap-5">
        {categories.map((item) => (
          <div
            key={item}
            className="bg-red-600 text-white rounded-xl p-5 text-center font-bold hover:bg-red-700 transition duration-300"
          >
            {item}
          </div>
        ))}
      </div>
    </section>
  );
}