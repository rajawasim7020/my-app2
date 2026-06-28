



type ProfileCardProps = {
  name: string;
  course: string;
  image: string;
};

export default function ProfileCard({
  name,
  course,
  image,
}: ProfileCardProps) {
  return (
    <div className="max-w-sm rounded-lg shadow-lg p-6 border">
      <img
        src={image}
        alt={name}
        className="w-60 h-60 rounded-full mx-auto"
      />

      <h2 className="text-2xl font-bold text-center mt-4">
        {name}
      </h2>

      <p className="text-center text-gray-600">
        {course}
      </p>

      <button className="mt-4 w-full bg-black text-white py-2 rounded">
        View Profile
      </button>
    </div>
  );
}