type Props = {
  cartCount: number;
  setCartCount: React.Dispatch<
    React.SetStateAction<number>
  >;
};

export default function Cart({
  cartCount,
  setCartCount,
}: Props) {
  return (
    <div className="mt-8 mr-5">
      <h2>
        Total Items: {cartCount}
      </h2>

      <button
        className="border px-4 py-2 mt-4"
        onClick={() =>
          setCartCount(0)
        }
      >
        Clear Cart
      </button>
    </div>
  );
}