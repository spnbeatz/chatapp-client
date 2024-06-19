import { SideBar } from "@/components/sidebar";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex flex-col h-screen bg-background">
      <div className="flex flex-row justify-start relative h-full">
        <SideBar />
        <main className="mx-auto w-full flex-grow h-full px-4">
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
