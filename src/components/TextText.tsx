import type { FC, ReactNode } from "react";

type Props = {
    children: ReactNode;
    columns: number;
    title: string;
};

const TextText: FC<Props> = ({ children, columns, title }) => {
    return (
        <section className="grid gap-5" >
            <h1 className="text-center text-2xl">{title}</h1>
            <div className="grid gap-5" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}>
                {children}
            </div>
        </section>
    );
};

export default TextText;