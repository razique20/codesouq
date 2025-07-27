// app/pricing/[category]/page.jsx
import { pricingData } from "@/app/data/PricingData";
import PricingTable from "@/components/PricingTable";
import { notFound } from "next/navigation";

export default function PricingPage({ params }) {
  const { category } = params;
  const data = pricingData[category];

  if (!data) {
    return notFound();
  }

  return (
    <div className="max-w-7xl mx-auto py-12 px-6 min-h-screen items-center">
      <h1 className="text-4xl font-bold mb-7 text-center">{data.title}</h1>
      <p className="text-lg text-center text-gray-600 mb-10">
        {data.description}
      </p>
      <PricingTable plans={data.plans || []} />
    </div>
  );
}
