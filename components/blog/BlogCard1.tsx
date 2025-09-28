import Link from "next/link"
import { basePath } from "../../util/config";

export default function BlogCard1({ item }: any) {


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
