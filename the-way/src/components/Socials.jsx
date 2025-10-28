import { Facebook, Instagram, Youtube, Play } from "lucide-react";

const Card = ({ children, className, onClick }) => (
  <div
    onClick={onClick}
    className={`bg-white rounded-xl overflow-hidden shadow-sm ${className}`}
  >
    {children}
  </div>
);

const CardContent = ({ children, className }) => (
  <div className={className}>{children}</div>
);

const Socials = () => {
  // Instagram posty / reels
  const posts = [
    { id: 1, url: "https://www.instagram.com/thewayccg/p/DQESeUoiDFW/", thumb: `${process.env.PUBLIC_URL}/materials/intagrampost1.jpg`, type: "image" },
    { id: 2, url: "https://www.instagram.com/thewayccg/reel/DQESx-jiF8u/", thumb: `${process.env.PUBLIC_URL}/materials/intagrampost2.jpg`, type: "video" },
    { id: 3, url: "https://www.instagram.com/thewayccg/reel/DQIE3NIiGuZ/", thumb: `${process.env.PUBLIC_URL}/materials/intagrampost3.jpg`, type: "video" },
  ];

  return (
    <section className="bg-[#f9f6ef] rounded-2xl shadow-md py-16 mx-10 my-10">
      <div className="flex flex-col items-center max-w-6xl px-4 mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl font-bold text-[#3b2a1a] mb-3">
          Sleduj nás na sociálnych sieťach
        </h2>
        <p className="text-[#5b4634] mb-6 max-w-2xl">
            Každé shliadnutie nám umožní rásť a prinášať viac obsahu pre Vás.
        </p>

        {/* Social Buttons */}
        <div className="flex mb-10 space-x-4">
          <a href="https://www.instagram.com/thewayccg" target="_blank" className="p-3 rounded-full border border-[#d6b67c] hover:bg-[#fff7e5] transition">
            <Instagram className="w-7 h-7 text-[#c19448]" />
          </a>
          <a href="https://www.facebook.com/profile.php?id=61574830625101" target="_blank" className="p-3 rounded-full border border-[#d6b67c] hover:bg-[#fff7e5] transition">
            <Facebook className="w-7 h-7text-[#3b5998]" />
          </a>
          <a href="https://www.youtube.com/@thewayccg" target="_blank" className="p-3 rounded-full border border-[#d6b67c] hover:bg-[#fff7e5] transition">
            <Youtube className="w-7 h-7 text-[#c4302b]" />
          </a>
        </div>

        {/* Gallery */}
        <div className="grid w-full grid-cols-2 gap-5 h sm:grid-cols-3">
          {posts.map((post) => (
            <Card
              key={post.id}
              onClick={() => window.open(post.url, "_blank", "noopener,noreferrer")}
              className="overflow-hidden rounded-xl  shadow-sm border border-[#e0d2b1] hover:shadow-md hover:scale-[1.02] transition cursor-pointer bg-white"
            >
              <CardContent className="relative p-0">
            
                {post.type === "video" && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-black/40">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                )}



                <img src={post.thumb} alt={`Post ${post.id}`} className="object-cover w-full h-[200px] md:h-[500px]" />
                <div className="absolute flex items-center justify-center w-8 h-8 text-xs text-white rounded-full top-2 right-2 bg-black/20">
                  <Instagram className="  text-[#c19448]" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Socials;
