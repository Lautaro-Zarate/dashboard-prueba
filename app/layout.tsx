import "./globals.css";
import { ReactNode } from "react"
import { SidebarProvider } from "@/components/ui/sidebar"
import {AppSidebar} from "@/components/layout/AppSidebar"

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="h-screen">
        <SidebarProvider>
          <div className="flex h-screen w-full">
            <AppSidebar />
            <main className="flex-1 p-2 overflow-auto">
              {children}
            </main>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}
