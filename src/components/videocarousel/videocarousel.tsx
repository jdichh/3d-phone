import { featuresSlides } from "../../lib/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const VideoCarousel = () => {
  return (
    <>
      <Carousel
        plugins={[
          Autoplay({
            delay: 4000,
            stopOnInteraction: false,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {featuresSlides.map((feature) => (
            <CarouselItem
              className="relative basis-8/12 px-5 lg:px-10"
              key={feature.id}
            >
              <div className="w-full h-full flex-center rounded-2xl overflow-hidden bg-black">
                <video
                  id="video"
                  playsInline={true}
                  preload="auto"
                  muted
                  loop={true}
                  autoPlay={true}
                  className="aspect-square"
                >
                  <source src={feature.video} type="video/webm" />
                </video>
              </div>
              <div className="absolute top-6 pl-4 z-10">
                {feature.textLists.map((text) => (
                  <p key={text} className="text-lg md:text-xl font-medium">
                    {text}
                  </p>
                ))}
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </>
  );
};

export default VideoCarousel;
