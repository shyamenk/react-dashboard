import Link from "next/link";
import React from "react";
import CalendarIcon from "../assets/CalendarIcon";
import ChartIcon from "../assets/ChartIcon";
import DashboardIcon from "../assets/DashboardIcon";
import DocumentIcon from "../assets/DocumentIcon";
import InvoiceIcon from "../assets/InvoiceIcon";
import Logo from "../assets/Logo";
import NotificationIcon from "../assets/NotificationIcon";
import SettingsIcon from "../assets/SettingsIcon";

type MenuItem = {
  href: string;
  label: string;
  icon?: React.ReactElement;
};

const menuItems: MenuItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: <DashboardIcon /> },
  { href: "/uploads", label: "Upload", icon: <ChartIcon /> },
  { href: "/invoice", label: "Invoice", icon: <InvoiceIcon /> },
  { href: "/shedule", label: "Shedule", icon: <DocumentIcon /> },
  { href: "/calendar", label: "Calendar", icon: <CalendarIcon /> },
  { href: "/notification", label: "Notification", icon: <NotificationIcon /> },
  { href: "/settings", label: "Settings", icon: <SettingsIcon /> },
];

const Sidebar = () => {
  return (
    <div className="w-[218px] pt-[46px] bg-white max-h-screen h-full">
      <div className="pl-[53px]">
        <Logo />
      </div>
      <ul className="flex flex-col pl-[33px] pt-[24px]">
        {menuItems.map((menuItem, index) => (
          <li key={index}>
            <Link href={menuItem.href}>
              <div className="flex items-center gap-[14px] py-[20px]">
                {menuItem.icon && React.cloneElement(menuItem.icon, { className: "icon-class" })}
                <span className="text-menu-link font-semibold text-base">{menuItem.label}</span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
