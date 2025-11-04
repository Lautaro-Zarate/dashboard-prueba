import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/layout/AppSidebar";

export default function Home({children}: {children: React.ReactNode}) {
    return (
        <div className="flex h-screen">
        <SidebarProvider>
            <AppSidebar/>
            <main className="flex-1 p-4 overflow-auto">{children}</main>
        </SidebarProvider>
        </div>
    );
}
