import { highlightsSlides } from "../../lib/constants";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import "./videocarousel.css";

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
        className="carousel"
      >
        <CarouselContent className="lg:container gap-12">
          {highlightsSlides.map((highlight) => (
            <CarouselItem className="carousel-item" key={highlight.id}>
              <div className="carousel-item-video">
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
              <div className="carousel-item-text-container">
                {highlight.textLists.map((text) => (
                  <p key={text} className="carousel-item-text">
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
