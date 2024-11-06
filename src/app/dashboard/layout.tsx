"use client";

import Link from "next/link";
import Image from "next/image";
import logoImage from "@/assets/logo/logoipsum.svg";
import iconDashboard from "@/assets/icons/icon-dashboard.svg";
import iconReport from "@/assets/icons/icon-report.svg";
import iconSettingMenu from "@/assets/icons/icon-settings-menu.svg";
import iconSettings from "@/assets/icons/icon-settings.svg";
import iconUser from "@/assets/icons/icon-profile.svg";
import iconExpand from "@/assets/icons/icon-expand.svg";
import { useState } from "react";

const MenuItem: React.FC<{
  label: string;
  link?: string;
  icon: string;
  childs?: Array<{ label: string; link: string }>;
}> = ({ label, link, icon, childs }) => {
  const [isReportExpand, setIsReportExpand] = useState(false);

  return childs ? (
    <div className="mb-4">
      <div
        className="flex w-full cursor-pointer"
        onClick={() => setIsReportExpand(!isReportExpand)}
      >
        <Image alt="dashboard" src={icon} className="mr-2" />
        <label className="text-gray-700 hover:text-blue-600 cursor-pointer select-none">
          {label}
        </label>
        <div className="flex-auto">
          <Image alt="dashboard" src={iconExpand} className="float-end" />
        </div>
      </div>
      {isReportExpand && (
        <ul className="pl-8">
          {childs.map((item, index) => (
            <li className="" key={index}>
              <Link
                href={item.link}
                className="text-gray-500 hover:text-blue-600"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  ) : (
    <Link
      href={link || "dashboard"}
      className="text-gray-700 hover:text-blue-600 flex ml-0.5 mb-4"
    >
      <Image alt="dashboard" src={icon} className="mr-2" />
      {label}
    </Link>
  );
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-100">
      {/* Topbar */}
      <header className="h-16 bg-blue-400 flex items-center justify-between px-6 w-full">
        <Image alt="logo" src={logoImage} className="" width={120} />
        <div className="flex items-center space-x-4">
          <Image src={iconUser} alt="user" />
          <Image src={iconSettings} alt="user" />
        </div>
      </header>

      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="w-72 bg-blue-200 px-6 py-8">
          <nav className="">
            <MenuItem
              icon={iconDashboard}
              label="Dashboard"
              link="/dashboard"
            />
            <MenuItem
              icon={iconReport}
              label="Laporan Lalin"
              childs={[
                { label: "Laporan Per Hari", link: "/dashboard/reports" },
              ]}
            />
            <MenuItem
              icon={iconSettingMenu}
              label="Master Gerbang"
              link="/dashboard/gate-masters"
            />
          </nav>
        </aside>

        {/* Main Content */}
        <div className="w-full">
          {/* Page Content */}
          <main className="p-6 overflow-y-auto bg-white rounded-lg m-4">
            {children}
          </main>
        </div>
      </div>
    </div>
  );
}
