import React from "react";
import Image from "next/image";
import FeaturesData from "@/data/main/home/features.json";

const Features = () => {
  return (
    <section className="my-24 space-y-10 mx-5">
      <h1 className="font-extrabold bg-custom-gradient text-transparent bg-clip-text text-3xl md:text-4xl text-center">
        Features of Multroic
      </h1>
      <div className="container grid md:grid-cols-3 gap-10 mx-auto text-center">
        {FeaturesData.map((feature) => (
          <div
            key={feature.id}
            className="border border-slate-700 p-5 shadow hover:shadow-lg space-y-2 py-12 "
          >
            <div className="relative w-full h-80">
              <Image
                src={feature.img}
                alt="create image"
                fill
                className="object-contain object-center"
              />
            </div>
            <h4 className="font-extrabold text-2xl pt-5 capitalize bg-custom-gradient text-transparent bg-clip-text">
              {feature.name}
            </h4>
            <p className="font-medium">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
