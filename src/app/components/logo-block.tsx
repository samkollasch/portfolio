import { Paragraph } from "./paragraph";
import Image from "next/image";

const logos = [
  { name: "Tumi", src: "/logos/Tumi.svg", url: "#" },
  { name: "Ulta", src: "/logos/Ulta.svg", url: "#" },
  { name: "UGG", src: "/logos/UGG.svg", url: "#" },
  { name: "Allbirds", src: "/logos/allbirds.svg", url: "#" },
  { name: "HOKA", src: "/logos/HOKA.svg", url: "#" },
  { name: "CrateAndBarrel", src: "/logos/CrateAndBarrel.svg", url: "#" },
  { name: "EddieBauer", src: "/logos/EddieBauer.svg", url: "#" },
  { name: "Lovesac", src: "/logos/Lovesac.svg", url: "#" },
  { name: "The Farmers Dog", src: "/logos/TheFarmersDog.svg", url: "#" },
  { name: "Ollie", src: "/logos/Ollie.svg", url: "#" },
  { name: "Rothys", src: "/logos/Rothys.svg", url: "#" },
  { name: "Tecovas", src: "/logos/Tecovas.svg", url: "#" },
];

export default function LogoBlock() {
  return (
    <div className="flex flex-col justify-center gap-12 text-center py-12 md:py-16">
      <div className="mx-auto max-w-[600px]">
        <Paragraph size="2xl">
          Trusted by the world’s most customer-focused brands
        </Paragraph>
      </div>
      <div className="px-6 md:mx-auto md:max-w-7xl md:px-12">
        <div className="grid grid-cols-3 gap-4 sm:gap-6 md:grid-cols-4 md:gap-8 lg:gap-x-16 lg:gap-y-12">
          {logos &&
            logos.length > 0 &&
            logos.map((logo, index) => (
              <div key={index} className="flex items-center justify-center">
                <Image
                  src={logo.src}
                  width={150}
                  height={60}
                  alt={logo.name}
                  className="h-[35px] w-full max-w-[80px] object-contain sm:h-[40px] sm:max-w-[100px] md:h-[50px] md:max-w-[150px]"
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
