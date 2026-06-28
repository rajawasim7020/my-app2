interface Props {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

export default function CategoryButtons({
  categories,
  selected,
  onSelect,
}: Props) {
  return (
    <div className="category-buttons">
      {categories.map((category) => (
        <button
          key={category}
          className={
            selected === category
              ? "category-btn active"
              : "category-btn"
          }
          onClick={() => onSelect(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
}