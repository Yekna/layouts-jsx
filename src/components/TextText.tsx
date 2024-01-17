import type { FC, ReactNode } from "react";

type Props = {
    children: ReactNode;
    columns: number;
};

const TextText: FC<Props> = ({ children, columns }) => {
    return (
        <section className="grid gap-5" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
            {children}
        </section>
    );
};

export default TextText;