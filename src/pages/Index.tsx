import Header from "@/components/Header";
import CategoryPills from "@/components/CategoryPills";
import VideoGrid from "@/components/VideoGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <CategoryPills />
      <div className="pb-8">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h2 className="text-2xl font-bold text-foreground mb-6">Hot videos internationally 🌍</h2>
        </div>
        <VideoGrid />
      </div>
    </div>
  );
};

export default Index;
