import { Search, Menu, User, Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  return (
    <header className="bg-background border-b border-border px-4 py-3">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo and menu */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon">
            <Menu className="h-5 w-5" />
          </Button>
          <div className="flex items-center gap-2">
            <div className="bg-brand-orange text-background px-3 py-1 rounded font-bold text-lg">
              VideoHub
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#" className="text-foreground hover:text-brand-orange transition-colors">HOME</a>
          <a href="#" className="text-muted-foreground hover:text-brand-orange transition-colors">VIDEOS</a>
          <a href="#" className="text-muted-foreground hover:text-brand-orange transition-colors">CATEGORIES</a>
          <a href="#" className="text-muted-foreground hover:text-brand-orange transition-colors">LIVE</a>
          <a href="#" className="text-muted-foreground hover:text-brand-orange transition-colors">CREATORS</a>
          <a href="#" className="text-muted-foreground hover:text-brand-orange transition-colors">TRENDING</a>
          <a href="#" className="text-muted-foreground hover:text-brand-orange transition-colors">COMMUNITY</a>
        </nav>

        {/* Search and user actions */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search videos..." 
                className="pl-10 w-64 bg-input border-border"
              />
            </div>
            <Button 
              variant="secondary" 
              className="bg-brand-orange hover:bg-brand-orange-hover text-background"
            >
              Search
            </Button>
          </div>
          
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Bell className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon" className="hidden md:flex">
            <Settings className="h-5 w-5" />
          </Button>
          
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;