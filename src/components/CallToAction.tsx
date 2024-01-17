import type { FC, ReactNode } from "react";

type Props = {
    src: string;
    maxWidth: number;
    color?: string;
    children: ReactNode;
};

const CallToAction: FC<Props> = ({ src, maxWidth, color, children }) => {
    return (
        <section
            className="p-10 min-h-[720px] grid place-content-center"
            style={{
                background: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color,
            }}
        >
            <div className="flex flex-col gap-3" style={{ maxWidth: maxWidth + "px" }}>
                {children}
            </div>
        </section>
    );
};

export default CallToAction;