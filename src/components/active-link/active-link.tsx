import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { cn } from "../../lib/utils";

type ActiveLink = {
    children: React.ReactNode;
} & LinkProps

export const ActiveLink = ({ children, href, ...rest }: ActiveLink) => {
    const router = useRouter();
    const isCurrentPath = router.asPath === href || router.asPath === rest.as;

    return (
        <Link href={href} className={cn('text-action-sm transition-colors hover:text-blue-300', isCurrentPath ? 'text-blue-300' : 'text-gray-100')}>{children}</Link>

    )
}