import Image from "next/image"
import Link from "next/link"

export const PostCard = () => {
    return (
        <Link href={`/blog/`} className="w-full max-w-2xl rounded-3xl border-[1px] border-blue-200 bg-primary-900 overflow-hidden transition-all duration-300 hover:border-[1px] hover:border-blue-300">
            {/* POST CONTENT  */}
            <div className="p-2 rounded-md overflow-hidden">
                {/* Image container  */}
                <div className="relative">
                    <div className="absolute top-0 right-0 px-3 py-1">
                        <span className="text-gray-300 text-body-xs">20/12/2024</span>
                    </div>
                    <Image
                        src={`/assets/primeiro-post.png`}
                        alt=""
                        width={288}
                        height={144}
                        className="w-full h-40 object-cover object-center"
                    />
                </div>
                {/* POST INFO  */}
                <div className="px-2 mt-4 space-y-4">
                    <h2 className="text-heading-sm text-gray-500 line-clamp-3">Transformando seu negocio em uma loja virtual</h2>
                    <p className="text-gray-400 text-body-sm line-clamp-3"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Et enim est beatae suscipit ullam mollitia ipsa harum facilis nemo atque. </p>

                    {/* POST FOOTER  */}
                    <div className="flex items-center gap-3 border-t border-gray-400 py-4">
                        <div className="relative h-5 w-5 md:h-6 md:w-6 overflow-hidden rounded-full border-blue-200 border-[1px]">
                            <Image
                                src={`/customer01.png`}
                                alt=""
                                fill
                                className="object-cover rounded-md"
                            />
                        </div>
                        <span className="text-body-sm text-gray-400">Luiz Henrique</span>
                    </div>
                </div>
            </div>
        </Link>
    )
}