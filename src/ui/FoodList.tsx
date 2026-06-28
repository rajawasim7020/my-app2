type Props = {
  cartCount: number;
  setCartCount: React.Dispatch<
    React.SetStateAction<number>
  >;
};

export default function FoodList({
  cartCount,
  setCartCount,
}: Props) {
  return (
    <div className="space-y-4">
      <button
        className="border px-4 py-2"
        onClick={() =>
          setCartCount(cartCount + 1)
        }
      >
        Add Pizza
      </button>

      <button
        className="border px-4 py-2"
        onClick={() =>
          setCartCount(cartCount + 1)
        }
      >
        Add Burger
      </button>
    </div>
  );
}