'use client'

import { SidebarTrigger, useSidebar } from '@/components/ui/sidebar'
import { ThemeToggle } from './theme-toggle'
import { Button } from '@/components/ui/button'
import { GalleryVerticalEnd } from 'lucide-react'

export function Header() {
    const { toggleSidebar } = useSidebar()

    return (
        <header className="flex h-16 shrink-0 items-center gap-2 ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
            <Button
                variant="ghost"
                size="icon"
                onClick={toggleSidebar}
            >
                <GalleryVerticalEnd className="h-4 w-4" />
            </Button>
            <div className="flex-1">
                <h1 className="text-lg font-semibold">User Dashboard</h1>
            </div>
        </header>
    )
}

