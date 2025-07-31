"use client";

import OtorButton from "@/components/layout/button";
import OtorInput from "@/components/layout/input";
import OtorLogo from "@/components/layout/logo";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { OtorBorderButton } from "@/components/ui/moving-border";
import Image from "next/image";
import { FormEvent } from "react";

const Page = () => {

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email");
    const password = formData.get("password");
    const remember = formData.get("remember") === "on";

    console.log({ email, password, remember });
    // أمير المؤمنين، هنا يمكنك ربط الأمر بـ API لتسجيل الدخول
  };

  return (
    <div className="grid grid-cols-2 w-full h-screen overflow-hidden">
      {/* Left side form */}
      <div className="h-screen my-16 mx-40 flex flex-col">
        {/* Header */}
        <div className="max-w-7xl flex justify-between">
          <OtorLogo />
          <OtorBorderButton
            borderRadius="10px"
            className="bg-white dark:bg-slate-900 text-[#14ADD6] dark:text-white border-[#14ADD6] dark:border-slate-800 text-sm cursor-pointer hover:shadow-sm"
          >
            Sign up
          </OtorBorderButton>
        </div>

        {/* Welcome */}
        <div className="flex flex-col mt-20">
          <h6 className="text-sm">Welcome back!</h6>
          <h2 className="text-[28px] font-extrabold">You can sign in</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="flex flex-col mt-12 pb-8">
          <Label htmlFor="email" className="mb-2">Email</Label>
          <OtorInput id="email" name="email" placeholder="Email" type="email" required />

          <Label htmlFor="password" className="mb-2 mt-6">Password</Label>
          <OtorInput id="password" name="password" placeholder="Password" type="password" required />

          <div className="mt-4 flex justify-between max-w-lg">
            <div className="flex gap-3 items-center">
              <Checkbox id="remember" name="remember" />
              <Label className="text-sm" htmlFor="remember">Remember Me</Label>
            </div>
            <p className="text-primary-gradient text-sm font-bold cursor-pointer hover:drop-shadow-2xl">
              I forgot my password
            </p>
          </div>

          <div className="mt-16">
            <OtorButton title="Sign In" type="submit" />
          </div>
        </form>
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
