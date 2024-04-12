import { highlightsSlides } from "../../lib/constants";
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
          {highlightsSlides.map((highlight) => (
            <CarouselItem
              className="relative lg:basis-9/12"
              key={highlight.id}
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
                  <source src={highlight.video} type="video/webm" />
                </video>
              </div>
              <div className="absolute top-8 pl-8 z-10">
                {highlight.textLists.map((text) => (
                  <p key={text} className="text-lg md:text-xl font-semibold leading-6">
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
