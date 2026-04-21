type Props = {
  title: string;
  amount: string;
  dark?: boolean;
};

export default function StatCard({ title, amount, dark }: Props) {
  return (
    <div
      className={`p-5 rounded-xl ${
        dark ? "bg-[#1c1b1f] text-white" : "bg-white"
      }`}
    >
      <p className="text-sm">{title}</p>
      <h2 className="text-2xl font-bold mt-2">{amount}</h2>
    </div>
  );
}