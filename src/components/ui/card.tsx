import Image from "next/image";
import Link from "next/link";

const post = {
    id: 1,
    title: "Tại sao BOM quan trọng trong quản lý sản xuất?",
    category: "Quản Lý Sản Xuất",
    date: "17/11/2022",
    readingTime: "10 phút đọc",
    image: "https://s3-alpha-sig.figma.com/img/fb49/59c7/3f1f17145ea689bd38538129e6319827?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tkJcLhC4ViBGXzlxV-2ePkPNfR-Ix6f0QRNpj2cAcPDH3Gw9jlk4cL2R1Nxvkba1-gvG9mZu6xqF5mrMAz9rte45Y9rvU6k74oPWkPngAcNAG7QU9tgAE4MzlLURafh5MCmJpokHxTJMUUArH5eWwaE~fcL5leX-SvDcWbaLTczBgx0ztopfryPPURe96rsCgE8zMgNq2HGnp4fupP-iTdfWuFhfKO8wFsoGtv4bQVNRcrpI0ovX0RJOu73SGg9w11-6myzp3bddMGtsuO6jIUklOQeWBRaC~uU2bixriemITukOt-0r6w~ax4wOf2vArK7NTyFVftxV7wABkqDwhg__",
    link: "/blog/bom-quan-trong-trong-quan-ly-san-xuat"
};

const CalendarIcon = (props:any) => (
    <svg {...props} width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.5 3.40991H17.25V2.65991C17.25 2.461 17.171 2.27023 17.0303 2.12958C16.8897 1.98893 16.6989 1.90991 16.5 1.90991C16.3011 1.90991 16.1103 1.98893 15.9697 2.12958C15.829 2.27023 15.75 2.461 15.75 2.65991V3.40991H8.25V2.65991C8.25 2.461 8.17098 2.27023 8.03033 2.12958C7.88968 1.98893 7.69891 1.90991 7.5 1.90991C7.30109 1.90991 7.11032 1.98893 6.96967 2.12958C6.82902 2.27023 6.75 2.461 6.75 2.65991V3.40991H4.5C4.10218 3.40991 3.72064 3.56795 3.43934 3.84925C3.15804 4.13056 3 4.51209 3 4.90991V19.9099C3 20.3077 3.15804 20.6893 3.43934 20.9706C3.72064 21.2519 4.10218 21.4099 4.5 21.4099H19.5C19.8978 21.4099 20.2794 21.2519 20.5607 20.9706C20.842 20.6893 21 20.3077 21 19.9099V4.90991C21 4.51209 20.842 4.13056 20.5607 3.84925C20.2794 3.56795 19.8978 3.40991 19.5 3.40991ZM6.75 4.90991V5.65991C6.75 5.85882 6.82902 6.04959 6.96967 6.19024C7.11032 6.33089 7.30109 6.40991 7.5 6.40991C7.69891 6.40991 7.88968 6.33089 8.03033 6.19024C8.17098 6.04959 8.25 5.85882 8.25 5.65991V4.90991H15.75V5.65991C15.75 5.85882 15.829 6.04959 15.9697 6.19024C16.1103 6.33089 16.3011 6.40991 16.5 6.40991C16.6989 6.40991 16.8897 6.33089 17.0303 6.19024C17.171 6.04959 17.25 5.85882 17.25 5.65991V4.90991H19.5V7.90991H4.5V4.90991H6.75ZM19.5 19.9099H4.5V9.40991H19.5V19.9099Z" fill="#667F93" />
    </svg>
);

const ClockIcon = (props:any) => (
    <svg {...props} width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 0.659912C8.07164 0.659912 6.18657 1.23174 4.58319 2.30308C2.97982 3.37443 1.73013 4.89717 0.992179 6.67875C0.254225 8.46033 0.061142 10.4207 0.437348 12.312C0.813554 14.2034 1.74215 15.9406 3.10571 17.3042C4.46928 18.6678 6.20656 19.5964 8.09787 19.9726C9.98919 20.3488 11.9496 20.1557 13.7312 19.4177C15.5127 18.6798 17.0355 17.4301 18.1068 15.8267C19.1782 14.2233 19.75 12.3383 19.75 10.4099C19.7473 7.82489 18.7192 5.34652 16.8913 3.51864C15.0634 1.69075 12.585 0.662642 10 0.659912ZM10 18.6599C8.36831 18.6599 6.77326 18.1761 5.41655 17.2695C4.05984 16.363 3.00242 15.0745 2.378 13.5671C1.75358 12.0596 1.5902 10.4008 1.90853 8.80042C2.22685 7.20007 3.01259 5.73006 4.16637 4.57628C5.32016 3.4225 6.79017 2.63676 8.39051 2.31843C9.99085 2.00011 11.6497 2.16348 13.1571 2.78791C14.6646 3.41233 15.9531 4.46975 16.8596 5.82646C17.7661 7.18316 18.25 8.77822 18.25 10.4099C18.2475 12.5972 17.3775 14.6942 15.8309 16.2408C14.2843 17.7874 12.1873 18.6574 10 18.6599ZM16 10.4099C16 10.6088 15.921 10.7996 15.7803 10.9402C15.6397 11.0809 15.4489 11.1599 15.25 11.1599H10C9.80109 11.1599 9.61033 11.0809 9.46967 10.9402C9.32902 10.7996 9.25 10.6088 9.25 10.4099V5.15991C9.25 4.961 9.32902 4.77023 9.46967 4.62958C9.61033 4.48893 9.80109 4.40991 10 4.40991C10.1989 4.40991 10.3897 4.48893 10.5303 4.62958C10.671 4.77023 10.75 4.961 10.75 5.15991V9.65991H15.25C15.4489 9.65991 15.6397 9.73893 15.7803 9.87958C15.921 10.0202 16 10.211 16 10.4099Z" fill="#667F93" />
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
