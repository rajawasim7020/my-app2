interface ButtonProps {
  title: string;
}

export default function Button3({ title }: ButtonProps) {
  return (
    <button className="px-6 py-4 bg-[#6f00ff] text-black rounded" >
      {title}
    </button>
    
  );
}