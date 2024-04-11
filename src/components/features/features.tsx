import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import VideoCarousel from "../videocarousel/videocarousel";
import SectionHeading from "../sectionheading/sectionheading";
import { rightImg, watchImg } from "@/lib/media";

const Features = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
    });
    gsap.to(".link", { 
      opacity: 1, 
      y: 0, 
      duration: 0.75, 
      stagger: 0.25 });
  }, []);

  return (
    <section id="features" className="common-padding overflow-hidden bg-zinc">
      <div className="w-full container mb-12 lg:flex justify-between">
        <SectionHeading heading="Get the highlights." />
        <div className="lg:flex lg:items-end gap-5 ">
          <p className="link">
            Watch the film
            <img src={watchImg} alt="watch" className="ml-2" />
          </p>
          <p className="link">
            Watch the event
            <img src={rightImg} alt="right" className="ml-2" />
          </p>
        </div>
      </div>
      <VideoCarousel />
    </section>
  );
};

export default Features;
