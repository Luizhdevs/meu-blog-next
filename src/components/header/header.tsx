import Image from "next/image";
import Link from "next/link";
import { ActiveLink } from "../active-link";
import { Button } from "../ui/button";

export const Header = () => {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-[#003B4A] backdrop-blur supports-[backdrop-filters]:bg-[#003B4A]/60">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-80">
                <div className="flex h-16 items-center justify-between">
                    <Link href="/">
                        <Image
                            src='/logo.svg'
                            alt='Logo site'
                            width={116}
                            height={32}
                        />
                    </Link>

                    <nav className="flex items-center gap-6">
                        <ActiveLink href="/">Inicio</ActiveLink>
                        <ActiveLink href="/blog">Blog</ActiveLink>
                        <Button variant="secondary" asChild>
                            <Link href="/comecar">Começar</Link>
                        </Button>
                    </nav>
                </div>
            </div>
        </header>
    )
}