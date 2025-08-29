import DarkMode from "@/components/navbar/DarkMode";
import LinksDropdown from "@/components/navbar/LinksDropdown";
import Logo from "@/components/navbar/Logo";
import NavSearch from "@/components/navbar/NavSearch";
import { Skeleton } from "@/components/ui/skeleton";
import { Suspense } from "react";

const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="container flex flex-col flex-wrap gap-4 py-8 sm:flex-row sm:justify-between sm:items-center">
        <Logo />
        <Suspense fallback={<Skeleton className="w-64 h-10 rounded-md" />}>
          <NavSearch />
        </Suspense>
        <div className="flex items-center gap-4">
          <DarkMode />
          <LinksDropdown />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
