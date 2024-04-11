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
            delay: 5000,
            stopOnInteraction: false,
          }),
        ]}
        opts={{
          align: "center",
        }}
        className="max-w-full flex-center w-full h-full bg-black lg:bg-zinc"
      >
        <CarouselContent className="lg:container gap-12">
          {featuresSlides.map((feature) => (
            <CarouselItem
              className="relative lg:basis-9/12"
              key={feature.id}
            >
              <div className="w-full h-full max-h-[500px] flex-center overflow-hidden bg-black lg:rounded-3xl ">
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
              <div className="absolute top-6 pl-6 z-10">
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
