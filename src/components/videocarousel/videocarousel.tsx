import { featuresSlides } from "../../lib/constants";
const VideoCarousel = () => {

  return (
    <>
      <div className="flex items-center">
        {featuresSlides.map((feature) => (
          <div key={feature.id} id="slider" className="sm:pr-20 pr-10">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-2xl overflow-hidden bg-black">
                <video
                  id="video"
                  playsInline={true}
                  preload="auto"
                  muted
                  loop={true}
                  autoPlay={true}
                >
                  <source src={feature.video} type="video/webm" />
                </video>
              </div>
              <div className="absolute top-6 left-6 z-10">
                {feature.textLists.map((text) => (
                  <p key={text} className="text-lg md:text-xl font-medium">
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default VideoCarousel;
