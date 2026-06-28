export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-10 px-8 py-20">
      <div className="flex justify-center flex-col items-center ">
        <h2 className="text-6xl md:text-7xl font-black text-center">
          Delicious Food
          <span className="text-red-600"> Delivered</span>
          <br />
          To Your Door
        </h2>

        <p className="mt-4 text-gray-600 text-center">
          Order fresh meals from your favorite restaurants in minutes.
        </p>

        <div className="flex justify-center mt-6"></div>
      </div>

      <div>
        <img
          src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
          alt="Food"
          className="w-[330px] mx-auto rounded-3xl shadow-xl transition-all duration-300 hover:scale-105"
        />
      </div>
    </section>
  );
}
