import Image from "next/image";
import Link from "next/link";

type LayoutProps = {
    src: string;
}

export const Logo = ({ src }: LayoutProps) => {
    return (
        <Link href="/" title="Pagina Inicial">
            <Image
                src={src}
                alt='Logo site'
                width={116}
                height={32}
            />
        </Link>
    )
}