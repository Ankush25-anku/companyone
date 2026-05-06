import React from "react";
import Projectdetails from "../../../components/Projectdetails";
import Projectdetails1 from "../../../components/Projectdetails1";
import Projectdetails2 from "../../../components/Projectdetails2";
import Projectdetails3 from "../../../components/Projectdetails3";
import CTASection from "../../../components/CTASection";

const page = () => {
  return (
    <div>
      <Projectdetails />
      <Projectdetails1 />
      <Projectdetails2 />

<CTASection />
    </div>
  );
};

export default page;
