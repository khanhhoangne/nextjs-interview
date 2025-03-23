import React from "react";

interface BreadcrumbItem {
  label: string;
  href: string;
  isCurrent: boolean;
}

interface BreadcrumbsProps {
  breadcrumbs: BreadcrumbItem[];
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ breadcrumbs }) => {
  return (
    <nav className="flex items-center text-gray-600 text-sm">
      {breadcrumbs.map((item, index) => (
        <React.Fragment key={index}>
          <a
            href={item.isCurrent ? '#' : item.href}
            className={item.isCurrent ? "font-bold" : "hover:text-[#10805B]"}
          >
            {item.label}
          </a>
          {index < breadcrumbs.length - 1 && <span className="mx-2">{">"}</span>}
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;
