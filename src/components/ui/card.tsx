import Image from "next/image";
import Link from "next/link";
import React from "react";

const post = {
    id: 1,
    title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
    category: "Quản Lý Sản Xuất",
    date: "17/11/2022",
    readingTime: "10 phút đọc",
    image: "https://s3-alpha-sig.figma.com/img/fb49/59c7/3f1f17145ea689bd38538129e6319827?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tkJcLhC4ViBGXzlxV-2ePkPNfR-Ix6f0QRNpj2cAcPDH3Gw9jlk4cL2R1Nxvkba1-gvG9mZu6xqF5mrMAz9rte45Y9rvU6k74oPWkPngAcNAG7QU9tgAE4MzlLURafh5MCmJpokHxTJMUUArH5eWwaE~fcL5leX-SvDcWbaLTczBgx0ztopfryPPURe96rsCgE8zMgNq2HGnp4fupP-iTdfWuFhfKO8wFsoGtv4bQVNRcrpI0ovX0RJOu73SGg9w11-6myzp3bddMGtsuO6jIUklOQeWBRaC~uU2bixriemITukOt-0r6w~ax4wOf2vArK7NTyFVftxV7wABkqDwhg__",
    link: "/blog/bom-quan-trong-trong-quan-ly-san-xuat"
};

const CalendarIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.5 3.40991H17.25V2.65991C17.25 2.461 17.171 2.27023 ..." fill="#667F93" />
    </svg>
);

const ClockIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0.659912C8.07164 0.659912 6.18657 1.23174 4.58319 2.30308 ..." fill="#667F93" />
    </svg>
);



export default function PostCard() {
    return (
        <div className="rounded-lg shadow-md overflow-hidden bg-white">
            <Link href={post.link} scroll={true}>
                <Image
                    src={post.image}
                    alt={post.title}
                    width={500}
                    height={300}
                    className="w-full h-auto object-cover rounded-4xl"
                />
            </Link>
            <div className="p-4">
                <span className="bg-blue-100 text-blue-600 text-sm font-medium px-3 py-1 rounded-full">
                    {post.category}
                </span>
                <h3 className="mt-2 text-lg font-semibold hover:text-blue-500">
                    <Link href={post.link} scroll={true}>{post.title}</Link>
                </h3>
                <div className="flex items-center text-gray-500 text-sm mt-2">
                    <div className="flex items-center mr-4">
                        <CalendarIcon className="w-4 h-4 mr-1" />
                        {post.date}
                    </div>
                    <div className="flex items-center">
                        <ClockIcon className="w-4 h-4 mr-1" />
                        {post.readingTime}
                    </div>
                </div>
                <Link scroll={true} href={post.link} className="text-blue-600 mt-3 inline-block hover:underline">
                    Khám phá thêm →
                </Link>
            </div>
        </div>
    );
}
