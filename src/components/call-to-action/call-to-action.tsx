import { ArrowRight, Store } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"

export const CallToAction = () => {
    return (
        <section className="py-24 bg-primary-500">
            <div className="container">
                <div className="flex flex-col items-center gap-6 text-center">

                    <div className="p-4 bg-gray-400 w-fit rounded-full">
                        <Store className="text-blue-200" />
                    </div>
                    <h2 className="text-gray-500 text-balance text-heading-xl">Crie uma loja online e inicie suas vendas ainda hoje</h2>

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