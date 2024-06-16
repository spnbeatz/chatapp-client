import { Link } from "@nextui-org/link";

import { Navbar } from "@/components/navbar";
import { SideBar } from "@/components/sidebar";
import { ThemeSwitch } from "@/components/theme-switch";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen bg-background">
{/*       <Navbar /> */}
      <div className="flex flex-row justify-start relative h-full">
{/*         <SideBar /> */}
        <main className="mx-auto w-full flex-grow h-full">
          {children}
        </main>
      </div>

{/*       <footer className="absolute bottom-0 w-full flex items-center justify-center py-3">
        <Link
          isExternal
          className="flex items-center gap-1 text-current"
          href="https://nextui-docs-v2.vercel.app?utm_source=next-pages-template"
          title="nextui.org homepage"
        >
          <span className="text-default-600">Powered by</span>
          <p className="text-primary">NextUI</p>
        </Link>
      </footer> */}
    </div>
  );
}
