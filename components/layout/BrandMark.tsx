import Image from "next/image";
import { site } from "@/content";

export function BrandMark() {
  return (
    <>
      <Image className="wordmark__image" src="/images/brand/vertigo-mark.png" alt="" width={184} height={363} />
      <span>{site.brand}</span>
    </>
  );
}
