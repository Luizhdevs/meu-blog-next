import { ArrowRight, Store } from "lucide-react"
import Link from "next/link"
import { Button } from "../../../../components/ui/button"

export const CallToAction = () => {
    return (
        <section className="relative py-24 bg-gradient-to-b from-primary-400 to-primary-600">
            <div className="absolute inset-0 bg-[url('/backgound-footer.svg')] bg-cover bg-center bg-no-repeat opacity-90"></div>

            <div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 p-4 bg-gray-400 w-fit rounded-full">
                <Store className="text-blue-200" />
            </div>
            <div className="container relative">
                <div className="flex flex-col items-center gap-6 text-center">

                    <h2 className="text-white text-balance text-heading-xl font-sans">Crie uma loja online e inicie suas vendas ainda hoje</h2>

                    <Button variant="primary" asChild className="mt-4">
                        <Link href='/criar-loja'>
                            <ArrowRight />
                            Criar loja grátis
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}