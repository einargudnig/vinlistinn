import { Instagram, Facebook } from "lucide-react";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <div className="flex flex-col items-center justify-center w-full h-24 border-t p-2">
      <div className="flex flex-row justify-between">
        <a
          className="flex items-center justify-center hover:bg-gray-300 rounded-md p-2"
          href="https://www.facebook.com/vinlistinn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook className="h-6 w-6 mr-2" /> @vinlistinn
        </a>
        <a
          className="flex items-center justify-center hover:bg-gray-300 rounded-md p-2"
          href="https://www.instagram.com/vinlistinn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram className="h-6 w-6 mr-2" /> @vinlistinn
        </a>
        </div>
        <p className="text-sm text-gray-500 mb-2">
          &copy; 2023 Vinlistinn ehf. All rights reserved.
        </p>
    </div>
  )
}