// src/components/Button.tsx

interface ButtonProps {
  title: string;
}

export default function Button({ title }: ButtonProps) {
  return (
    <button className="px-4 py-2 bg-black text-white rounded">
      {title}
    </button>
  );
}