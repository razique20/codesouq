"use client";

import { Carousel } from "./carousel.jsx";
export function CarouselDemo() {
  const slideData = [
    {
      title: "Website Development",
      button: "Contact Us",
      src: "../assets/services/website.jpg",
    },
    {
      title: "App Development",
      button: "Contact Us",
      src: "../assets/services/mobileapp.jpg",
    },
    {
      title: "AI Agents",
      button: "Contact Us",
      src: "../assets/services/agent.jpg",
    },
    {
      title: "Cloud Solution",
      button: "Contact Us",
      src: "../assets/services/cloud.jpg",
    },
    {
      title: "Digital Marketing",
      button: "Contact Us",
      src: "../assets/services/digital.jpg",
    },
    {
      title: "Ecommerce Development",
      button: "Contact Us",
      src: "../assets/services/ecommerce.jpg",
    },
  ];
  return (
    <div className="relative overflow-hidden w-full h-full py-20">
      <Carousel slides={slideData} />
    </div>
  );
}
