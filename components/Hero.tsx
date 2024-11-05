"use client";

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Hero() {
  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      {/* Hero Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070')",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Hero Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center items-start">
        <div className="max-w-2xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover the Latest News & Stories
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Stay informed with our curated collection of breaking news, in-depth
            analysis, and compelling stories from around the world.
          </p>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-2xl flex gap-2">
          <Input
            type="text"
            placeholder="Search articles..."
            className="bg-white/95"
          />
          <Button>
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
        </div>
      </div>
    </div>
  );
}
