import Link from "next/link"
import { useRouter } from "next/router"

export default function BlogCard2({ item }: any) {
    const { basePath } = useRouter();
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
