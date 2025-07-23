import { pricingData } from "../data/PricingData";

export default function PricingHome() {
  const categories = Object.keys(pricingData);

  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-3xl font-bold mb-6 text-center">Choose a Pricing Category</h1>
      <ul className="space-y-4">
        {categories.map((key) => (
          <li key={key} className="rounded-2xl border border-white/20 backdrop-blur-md bg-black/20 shadow-xl p-6" >
            <a href={`/pricing/${key}`} className="text-white cursor-pointer text-lg">
              {pricingData[key].title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
