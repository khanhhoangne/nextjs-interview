import Link from "next/link";

const categories = [
    { id: 1, name: "Tất cả", count: 108 },
    { id: 2, name: "Thiết Kế Website", count: 36 },
    { id: 3, name: "Thiết Kế App Mobile", count: 13 },
    { id: 4, name: "Quản Lý Sản Xuất", count: 25 },
    { id: 5, name: "Quản Lý Bán Hàng", count: 22 },
    { id: 6, name: "Báo Chí Nói Về FOSO", count: 7 },
    { id: 7, name: "Tin Tức FOSO", count: 5 }
];

export default function CategoryList() {
    return (
        <>
            <h1 className="text-xl font-semibold mb-2">Danh Mục</h1>
            <ul className="space-y-2">
                {categories.map((category) => (
                    <li key={category.id} className="flex justify-between">
                        <Link href={`/category/${category.id}`} className="hover:underline">
                            {category.name}
                        </Link>
                        <span className="text-gray-500">{category.count}</span>
                    </li>
                ))}
            </ul>
            <img className="mt-5" src="/banner_sidebar.png" alt="" />
            <img className="mt-5" src="/banner.png" alt="" /></>

    );
}