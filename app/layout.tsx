import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from './components/theme-provider'
import { SidebarProvider } from '@/components/ui/sidebar'
import { AppSidebar } from './components/app-sidebar'
import { Header } from './components/header'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'User Dashboard',
  description: 'A user dashboard with theme switching capabilities and customizable sidebar',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <SidebarProvider>
            <div className="flex min-h-screen bg-background">
              <AppSidebar />
              <div className="flex flex-col flex-1">
                <Header />
                <main className="flex-1">
                  {children}
                </main>
              </div>
            </div>
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

