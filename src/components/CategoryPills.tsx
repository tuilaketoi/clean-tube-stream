import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

const categories = [
  "All",
  "Music",
  "Gaming", 
  "Education",
  "Travel",
  "Technology",
  "Cooking",
  "Sports",
  "News",
  "Entertainment",
  "Science",
  "Health",
  "Art",
  "Comedy",
  "Documentary",
  "Lifestyle"
];

const CategoryPills = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  return (
    <div className="border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-4 py-3">
        <ScrollArea className="w-full">
          <div className="flex gap-2 pb-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "secondary"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={`
                  whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition-colors
                  ${activeCategory === category 
                    ? "bg-brand-orange hover:bg-brand-orange-hover text-background" 
                    : "bg-category-pill hover:bg-video-card-hover text-foreground"
                  }
                `}
              >
                {category}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default CategoryPills;