// src/components/Button.tsx

interface ButtonProps {
  title: string;
}

export default function Button2({ title }: ButtonProps) {
  return (
    <button className="px-6 py-4 bg-[#FFD700] text-black rounded" >
      {title}
    </button>
    
  );
}