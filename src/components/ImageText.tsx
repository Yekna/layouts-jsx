import type { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  src: string;
  alt: string;
};

const ImageText: FC<Props> = ({ children, src, alt }) => {
  return (
    <section className="grid grid-cols-2 gap-5">
      <img src={src} alt={alt} className="w-full" />
      <div className="grid gap-3 place-content-center">{children}</div>
    </section>
  );
};

export default ImageText;
