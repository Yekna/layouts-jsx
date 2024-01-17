import type { FC, ReactNode } from "react";

type Props = {
    images: {
        src: string;
        alt: string;
    }[],
    columns: number;
};

const ImageImage: FC<Props> = ({ images, columns }) => {
    return (
        <section className="grid gap-5" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
            {images.map(({ src, alt }) => <img src={src} alt={alt} className="w-full" />)}
        </section>
    );
};

export default ImageImage;
