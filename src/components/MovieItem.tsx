import Image from "next/image";
import Link from "next/link";

interface MovieItemProps {
    id: number;
    title?: string;
    posterImgUrl: string;
}

export default function MovieItem({ id, title, posterImgUrl }: MovieItemProps) {
    return (
        <Link href={`/movie/${id}`} className="block">
            <div className="relative aspect-[2/3] w-48 overflow-hidden rounded-lg">
                <Image
                    src={posterImgUrl}
                    alt={title ?? ""}
                    fill
                    className="object-cover transition-transform"
                />
            </div>
            <h3 className="mt-2 text-sm font-medium text-white">{title}</h3>
        </Link>
    );
}
