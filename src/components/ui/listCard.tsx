"use client";

import React, { useState } from "react";
import PostCard from "@/components/ui/card";

function ListCard() {
    const postsPerPage = 6;
    const totalPosts = 30;
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(totalPosts / postsPerPage);

    const currentPosts = [...Array(totalPosts)]
        .slice((currentPage - 1) * postsPerPage, currentPage * postsPerPage);

    return (
        <>
            <div className="grid grid-cols-2 gap-6">
                {currentPosts.map((_, i) => (
                    <PostCard key={i} />
                ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center space-x-2 mt-6">
                <div>
                    <button
                        className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50 flex items-center gap-2"
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    >
                        <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.9996 7.90984C17.9996 8.10875 17.9206 8.29952 17.7799 8.44017C17.6393 8.58082 17.4485 8.65984 17.2496 8.65984H2.55993L8.03024 14.1292C8.09992 14.1989 8.1552 14.2816 8.19291 14.3727C8.23062 14.4637 8.25003 14.5613 8.25003 14.6598C8.25003 14.7584 8.23062 14.856 8.19291 14.947C8.1552 15.0381 8.09992 15.1208 8.03024 15.1905C7.96056 15.2601 7.87783 15.3154 7.78679 15.3531C7.69574 15.3908 7.59816 15.4103 7.49961 15.4103C7.40107 15.4103 7.30349 15.3908 7.21244 15.3531C7.1214 15.3154 7.03867 15.2601 6.96899 15.1905L0.218988 8.44047C0.149256 8.37081 0.0939369 8.28809 0.0561936 8.19705C0.0184504 8.106 -0.000976562 8.0084 -0.000976562 7.90984C-0.000976562 7.81128 0.0184504 7.71368 0.0561936 7.62263C0.0939369 7.53159 0.149256 7.44887 0.218988 7.37921L6.96899 0.629216C7.10972 0.488485 7.30059 0.409424 7.49961 0.409424C7.69864 0.409424 7.88951 0.488485 8.03024 0.629216C8.17097 0.769946 8.25003 0.960818 8.25003 1.15984C8.25003 1.35886 8.17097 1.54974 8.03024 1.69047L2.55993 7.15984H17.2496C17.4485 7.15984 17.6393 7.23886 17.7799 7.37951C17.9206 7.52016 17.9996 7.71093 17.9996 7.90984Z" fill="#546E7A" />
                        </svg>
                        Trang trước
                    </button>
                </div>

                <div>
                    {[...Array(totalPages)].map((_, index) => (
                        <button
                            key={index}
                            className={`px-4 mx-0.5 py-2 rounded-md ${currentPage === index + 1 ? "bg-[#D1F7EA] text-black" : "bg-gray-100 text-gray-500"
                                }`}
                            onClick={() => setCurrentPage(index + 1)}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>

                <div>
                    <button
                        className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 disabled:opacity-50 flex items-center gap-2"
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    >
                        Trang kế tiếp
                        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20.7806 13.4405L14.0306 20.1905C13.8899 20.3312 13.699 20.4103 13.5 20.4103C13.301 20.4103 13.1101 20.3312 12.9694 20.1905C12.8286 20.0497 12.7496 19.8589 12.7496 19.6598C12.7496 19.4608 12.8286 19.2699 12.9694 19.1292L18.4397 13.6598H3.75C3.55109 13.6598 3.36032 13.5808 3.21967 13.4402C3.07902 13.2995 3 13.1088 3 12.9098C3 12.7109 3.07902 12.5202 3.21967 12.3795C3.36032 12.2389 3.55109 12.1598 3.75 12.1598H18.4397L12.9694 6.69047C12.8286 6.54974 12.7496 6.35886 12.7496 6.15984C12.7496 5.96082 12.8286 5.76995 12.9694 5.62922C13.1101 5.48849 13.301 5.40942 13.5 5.40942C13.699 5.40942 13.8899 5.48849 14.0306 5.62922L20.7806 12.3792C20.8504 12.4489 20.9057 12.5316 20.9434 12.6226C20.9812 12.7137 21.0006 12.8113 21.0006 12.9098C21.0006 13.0084 20.9812 13.106 20.9434 13.197C20.9057 13.2881 20.8504 13.3708 20.7806 13.4405Z" fill="#4D5F6E" /> </svg>
                    </button>
                </div>
            </div>
        </>
    );
}

export default ListCard;
