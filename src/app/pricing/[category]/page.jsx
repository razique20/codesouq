import { pricingData } from "@/app/data/PricingData";
import PricingTable from "@/components/PricingTable";
import { notFound } from "next/navigation";

export default function PricingPage({ params }) {
  const { category } = params;
  const data = pricingData[category];

  if (!data) return notFound();

  return (
    <div className="max-w-7xl mx-auto py-12 px-6">
      <h1 className="text-4xl font-bold mb-4 text-center">{data.title}</h1>
      <PricingTable plans={data.plans} />
    </div>
  );
}
