// src/utils/icons.tsx

import Image from "next/image";
import { IconEnum } from "@/constants/icons";
import  React  from "react";


export function getIconImage(
  name: IconEnum,
  className: string = "w-6 h-6 object-contain text-red-900 ",
  width: number = 24,
  height: number = 24
){
  const src = `/icons/${name}.svg`;

  return (
    <Image
      src={src}
      alt={`Icon: ${name}`}
      width={width}
      height={height}
      className={className}
    />
  );
}




export function getLogo({
  name = "logo",          
  className = "object-contain",
  width = 35.5,
  height = 35.5,
  alt = "Logo",              // النص البديل الافتراضي
}: {
  name?: string;
  className?: string;
  width?: number;
  height?: number;
  alt?: string;
}) {
  const src = `/logo/${name}.svg`;

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  );
}