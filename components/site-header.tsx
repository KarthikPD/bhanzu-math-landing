import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/Group.svg" alt="Bhanzu" width={120} height={40} className="object-contain" priority />
        </Link>
        <Button className="bg-[#F15D22] hover:bg-[#d95422] text-white rounded-full px-8 py-6 text-base font-medium">
          Book Free Demo
        </Button>
      </div>
    </header>
  )
}
