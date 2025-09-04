import VideoCard from "./VideoCard";
import videoThumbnails from "@/assets/video-thumbnails.jpg";

const sampleVideos = [
  {
    title: "Amazing Cooking Tips That Will Change Your Life",
    channel: "ChefMaster",
    views: "1.2M",
    duration: "15:23",
    timeAgo: "2 days ago",
    thumbnail: videoThumbnails,
    verified: true
  },
  {
    title: "Top 10 Travel Destinations for 2024",
    channel: "WanderlustTV",
    views: "856K",
    duration: "12:45",
    timeAgo: "1 week ago",
    thumbnail: videoThumbnails,
    verified: true
  },
  {
    title: "Tech Review: Latest Smartphone Features",
    channel: "TechGuru",
    views: "2.1M",
    duration: "18:30",
    timeAgo: "3 days ago",
    thumbnail: videoThumbnails,
    verified: true
  },
  {
    title: "Learn Programming in 30 Minutes",
    channel: "CodeAcademy",
    views: "3.5M",
    duration: "28:15",
    timeAgo: "5 days ago",
    thumbnail: videoThumbnails,
    verified: true
  },
  {
    title: "Epic Gaming Moments Compilation",
    channel: "GamersUnited",
    views: "987K",
    duration: "20:11",
    timeAgo: "1 day ago",
    thumbnail: videoThumbnails,
    verified: false
  },
  {
    title: "Relaxing Nature Sounds for Sleep",
    channel: "NatureSounds",
    views: "4.2M",
    duration: "60:00",
    timeAgo: "2 weeks ago",
    thumbnail: videoThumbnails,
    verified: true
  },
  {
    title: "Fitness Workout - Full Body in 20 Minutes",
    channel: "FitLife",
    views: "1.8M",
    duration: "22:33",
    timeAgo: "4 days ago",
    thumbnail: videoThumbnails,
    verified: true
  },
  {
    title: "Music Production Tutorial for Beginners",
    channel: "BeatMakers",
    views: "645K",
    duration: "35:42",
    timeAgo: "1 week ago",
    thumbnail: videoThumbnails,
    verified: false
  },
  {
    title: "Documentary: The Future of Technology",
    channel: "ScienceChannel",
    views: "2.7M",
    duration: "45:18",
    timeAgo: "3 days ago",
    thumbnail: videoThumbnails,
    verified: true
  },
  {
    title: "Comedy Sketch: Office Life",
    channel: "LaughFactory",
    views: "1.4M",
    duration: "8:24",
    timeAgo: "6 days ago",
    thumbnail: videoThumbnails,
    verified: false
  },
  {
    title: "Art Tutorial: Digital Painting Basics",
    channel: "ArtMaster",
    views: "892K",
    duration: "32:17",
    timeAgo: "1 week ago",
    thumbnail: videoThumbnails,
    verified: true
  },
  {
    title: "News Update: Global Climate Change",
    channel: "WorldNews",
    views: "5.1M",
    duration: "12:08",
    timeAgo: "2 hours ago",
    thumbnail: videoThumbnails,
    verified: true
  }
];

const VideoGrid = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {sampleVideos.map((video, index) => (
          <VideoCard key={index} {...video} />
        ))}
      </div>
    </div>
  );
};

export default VideoGrid;