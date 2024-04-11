import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import VideoCarousel from "../videocarousel/videocarousel";

const Features = () => {
  useGSAP(() => {
    gsap.to('#title', {
      opacity: 1,
      y: 0
    })
  }, [])

  return (
    <section id="features" className="w-screen h-full common-padding overflow-hidden">
      <div className="w-full mb-12">
        <h2 id="title" className="section-heading">Heading 2</h2>
      </div>
      <VideoCarousel />
    </section>
  );
};

export default Features;
