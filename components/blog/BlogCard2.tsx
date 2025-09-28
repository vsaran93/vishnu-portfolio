import Link from "next/link"
import { usePathname } from "next/navigation"

export default function BlogCard2({ item }: any) {
    const pathname = usePathname();
	const basePath = pathname.split('/')[1];

    return (
        <>
            <Link href={`/blog/${item.id}`}>
                <img src={`${basePath}/assets/images/blog/${item.img}`} alt="img" className="img-fluid" />
            </Link>
            <Link href={`/blog/${item.id}`} rel="bookmark">{item.title}</Link>
            <br />
        </>
    )
}
