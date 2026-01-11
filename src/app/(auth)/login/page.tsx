"use client"
import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from '@/components/ui/navigation-menu'
import { Github, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'

export default function Page() {
  const { theme, setTheme } = useTheme();
  return (
    <div className='relative'>
      {/* theme menu */}
      <NavigationMenu className='absolute top-5 right-5'>
        <NavigationMenuList>
          <NavigationMenuItem>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
        {/* Left Section (Image / Branding) */}
        <section className="hidden md:flex items-center justify-center bg-muted">
          <div className="relative h-full w-full">

          </div>
        </section>

        {/* Right Section (Form) */}
        <section className="flex items-center justify-center px-6">
          <div className="w-full max-w-sm space-y-6">

            {/* Header */}
            <div className="space-y-2 text-center">
              <h1 className="text-2xl font-semibold tracking-tight">
                Welcome back
              </h1>
              <p className="text-sm text-muted-foreground">
                Enter your email to sign in to your account
              </p>
            </div>

            {/* Form */}
            <div className="space-y-4">
              <Input type="email" placeholder="Email" />
              <Input type="password" placeholder="password" />

              <Button className="w-full">
                Login
              </Button>

              <Button variant="outline" className="w-full gap-2">
                <Github className="h-4 w-4" />
                Continue with GitHub
              </Button>
            </div>

          </div>
        </section>

      </div>
    </div>

  )
}
