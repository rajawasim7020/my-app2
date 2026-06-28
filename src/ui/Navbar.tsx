type Props = {
  cartCount: number;
};

export default function Navbar({
  cartCount,
}: Props) {
  return (
    <div className="flex justify-between mb-8">
      <h1 className="text-2xl font-bold">
        Food App
      </h1>

      <h2>
        Cart: {cartCount}
      </h2>
    </div>
  );
}