import Link from "next/link";
import { Logo } from "../logo";

export const Footer = () => {
    return (
        <footer className="bg-primary-600">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg-:px-8">
                <div className="flex justify-between md:flex-row gap-8 py-8">
                    <Logo src="/logo.svg" />
                    <nav className="flex  flex-col md:flex-row items-center gap-4 text-sm text-gray-300">
                        <Link href='/termos-de-uso' className="hover:text-gray-400">Termos de uso</Link>
                        <Link href='/politica-de-privacidade' className="hover:text-gray-400">Política de privacidade</Link>
                        <Link href='/feedback' className="hover:text-gray-400">Feedback</Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}