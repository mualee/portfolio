import { Github, Facebook , MessageCircleMore, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="flex items-center justify-center py-6 border-t md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 px-20 sm:px-5 md:h-24 md:flex-row">
        <p className="text-sm leading-loose text-center text-muted-foreground md:text-left">
          © {currentYear} Mua LEE. All rights reserved. Built with{" "}
          <Heart className="inline-block w-4 h-4 text-red-500 transition-transform duration-300 hover:scale-110 hover:text-red-600 " />
        </p>
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" asChild>
            <a href="https://github.com/mualee" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-4 h-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://facebook.com/mualee.vf" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Facebook className="w-4 h-4" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a href="https://wa.me/8562055188317" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
              <MessageCircleMore className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </footer>
  )
}

