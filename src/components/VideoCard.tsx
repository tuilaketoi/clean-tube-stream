import { Play, Eye, Clock } from "lucide-react";

interface VideoCardProps {
  title: string;
  channel: string;
  views: string;
  duration: string;
  timeAgo: string;
  thumbnail: string;
  verified?: boolean;
}

const VideoCard = ({ title, channel, views, duration, timeAgo, thumbnail, verified = false }: VideoCardProps) => {
  return (
    <div className="group cursor-pointer">
      <div className="relative bg-video-card rounded-lg overflow-hidden mb-3 hover:bg-video-card-hover transition-colors">
        <div className="aspect-video bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center relative">
          <img 
            src={thumbnail} 
            alt={title}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.parentElement!.querySelector('.fallback')!.classList.remove('hidden');
            }}
          />
          <div className="fallback hidden absolute inset-0 bg-gradient-to-br from-gray-700 to-gray-900 flex items-center justify-center">
            <Play className="h-12 w-12 text-white/60" />
          </div>
          
          {/* Duration badge */}
          <div className="absolute bottom-2 right-2 bg-black/80 text-white px-2 py-1 rounded text-xs font-medium">
            {duration}
          </div>
          
          {/* Play button overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
            <Play className="h-12 w-12 text-white/0 group-hover:text-white/80 transition-colors" />
          </div>
        </div>
        
        <div className="p-3">
          <h3 className="text-foreground font-medium text-sm leading-tight mb-2 line-clamp-2 group-hover:text-brand-orange transition-colors">
            {title}
          </h3>
          
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-1">
              <span className={verified ? "text-brand-orange" : ""}>{channel}</span>
              {verified && <div className="w-1 h-1 bg-brand-orange rounded-full" />}
            </div>
          </div>
          
          <div className="flex items-center gap-3 text-xs text-muted-foreground mt-1">
            <div className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              <span>{views}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="h-3 w-3" />
              <span>{timeAgo}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;