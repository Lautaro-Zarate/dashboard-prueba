import { Sidebar,SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem,} from "@/components/ui/sidebar";
import { BookUser, Check, Cloud, File, FilesIcon, HelpCircle, LayoutDashboard, LucideIcon, LucideWholeWord, Search, Settings, User } from "lucide-react";

interface SideBarItems{
    title: string;
    icon: LucideIcon;
}

const homeItems: SideBarItems[] = [
    {
        title: 'Dashboard',
        icon: LayoutDashboard,
    },
    {
        title: 'Lifecycle',
        icon: Check,
    },
    {
        title: 'Analitycs',
        icon: Cloud,
    },
    {
        title: 'Projects',
        icon: File,
    },
    {
        title: 'Team',
        icon: User,
    },
]
const documentsItems: SideBarItems[] = [
    {
        title: 'Data Library',
        icon: BookUser,
    },
    {
        title: 'Reports',
        icon: FilesIcon,
    },
    {
        title: 'Word Assistant',
        icon: LucideWholeWord,
    },
]
const otherItems: SideBarItems[] = [
    {
        title: 'Settings',
        icon: Settings,
    },
    {
        title: 'Get Helps',
        icon: HelpCircle,
    },
    {
        title: 'Search',
        icon: Search,
    },
]

// REFACTORIZAR LOS SIDEBARS

export function AppSidebar() {
    return (
        <Sidebar collapsible='none' className="w-48">
            <SidebarContent className="bg-gray-200 w-50 md:w-full">
                <SidebarHeader>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <h2 className="p-3 font-bold border-b-2 border-b-gray-400">Dashboard</h2>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarHeader>
                    <SidebarGroup>
                        <SidebarGroupLabel>Home</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {homeItems.map((item) => (
                                    <SidebarMenuButton key={item.title}>
                                        <item.icon/>
                                        <span>{item.title}</span>
                                    </SidebarMenuButton>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                    <SidebarGroup>
                            <SidebarGroupLabel>Documents</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {documentsItems.map((item) => (
                                        <SidebarMenuButton key={item.title}>
                                            <item.icon/>
                                            <span>{item.title}</span>
                                        </SidebarMenuButton>
                                    ))}
                                </SidebarMenu>
                            </SidebarGroupContent>
                    </SidebarGroup>
                    <SidebarGroup className="relative flex w-full min-w-0 flex-col p-2 mt-65">
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {otherItems.map((item) => (
                                    <SidebarMenuButton key={item.title}>
                                        <item.icon/>
                                        <span>{item.title}</span>
                                    </SidebarMenuButton>
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}