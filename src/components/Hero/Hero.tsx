import React from "react";
import shirt from "../../assets/shirts.png";

const Hero: React.FC = () => {
  return (
    <section
      className="h-[55vh] flex items-center justify-center py-3"
      style={{ backgroundColor: "hsl(21.82deg 34.74% 62.75%)" }}
    >
      <img
        src={shirt}
        alt="Centered Hero"
        className="w-full h-full object-contain"
      />
    </section>
  );
};

export default Hero;
