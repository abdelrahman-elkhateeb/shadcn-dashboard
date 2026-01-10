import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Github } from 'lucide-react'
import React from 'react'

export default function Page() {
  return (
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
  )
}
