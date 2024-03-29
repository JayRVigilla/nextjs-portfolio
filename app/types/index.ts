import { StaticImageData } from "next/image";


export interface ImageData {
  src: string | StaticImageData;
  alt: string;
  picWidth?: string;
  fit?: "cover" | "contain" |  "fill" | undefined;
}

export interface LinkData {
  href: string;
  text: string;
}