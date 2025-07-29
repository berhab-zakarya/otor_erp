"use client";

import OtorButton from "@/components/layout/button";
import Image from "next/image";

const Page = () => {
  return (
    <div className="grid grid-cols-2 w-full h-screen overflow-hidden">

<div className="h-screen my-16 mx-32 flex">
<OtorButton title="Sign In"/>
</div>

      {/* Right side image */}
      <div className="flex-1 h-full relative">
        <Image
          src="/images/login_image.png"
          alt="login image"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Page;
