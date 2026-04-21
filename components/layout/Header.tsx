export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-semibold">Overview</h1>

      <button className="bg-black text-white px-4 py-2 rounded-lg">
        Logout
      </button>
    </div>
  );
}