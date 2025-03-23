"use client";

import React, { useState } from "react";

interface Section {
    id: string;
    title: string;
    children?: Section[];
}

const renderTableOfContents = (
    sections: Section[],
    selectedId: string | null,
    setSelectedId: (id: string) => void,
    prefix = "",
    isChild = false
) => {
    return (
        <ol className="pl-5 mt-2">
            {sections.map((item, index) => {
                const sectionNumber = isChild ? `${prefix}${index + 1}.` : `${index + 1}.`;
                const isSelected = selectedId === item.id;

                return (
                    <li key={item.id} className="mt-1">
                        <a
                            href={`#${item.id}`}
                            onClick={() => setSelectedId(item.id)}
                            className={`hover:underline ${isSelected ? "text-[#15AA7A] font-semibold" : ""}`}
                        >
                            {sectionNumber} {item.title}
                        </a>
                        {item.children && item.children.length > 0 &&
                            renderTableOfContents(item.children, selectedId, setSelectedId, sectionNumber, true)}
                    </li>
                );
            })}
        </ol>
    );
};

function Menu({ data }: { data: Section[] }) {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    return (
        <div className="mt-6 p-4 rounded-md col-span-4">
            <strong className="text-lg font-semibold">Nội Dung Bài Viết</strong>
            {renderTableOfContents(data, selectedId, setSelectedId)}
            <img className="mt-5" src="/banner_sidebar.png" alt="" />
            <img className="mt-5" src="/banner.png" alt="" />
        </div>
    );
}

export default Menu;
