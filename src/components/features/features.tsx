import { useGSAP } from "@gsap/react";
import { explore1Img, explore2Img, exploreVideo } from "@/lib/media";
import SectionHeading from "../sectionheading/sectionheading";
import gsap from "gsap";

const Features = () => {
  useGSAP(() => {
    gsap.to("#title", { y: 0, opacity: 1 });
  }, []);

  return (
    <section className="h-full common-padding bg-zinc relative overflow-hidden">
        <div className="mb-24 w-full screen-width">
          <SectionHeading heading="Explore the full story." />
        </div>

        <div className="flex flex-col justify-start overflow-hidden">
          <div className="mb-24 font-semibold container pl-12 lg:pl-24 xl:pl-32 text-4xl lg:text-6xl">
            <h2>
              iPhone. <br /> Forged in titanium.
            </h2>
          </div>

          <div className="flex-center flex-col lg:container">
            <div className="relative w-full flex items-center mb-6">
              <video
                playsInline
                id="exploreVideo"
                className="w-full h-full object-cover object-center"
                preload="none"
                muted
                autoPlay
              >
                <source src={exploreVideo} type="video/mp4" />
              </video>
            </div>

            <div className="flex flex-col w-full relative">
              <div className="feature-item-container">
                <div className="overflow-hidden flex-1">
                  <img
                    src={explore1Img}
                    alt="titanium"
                    className="feature-item"
                  />
                </div>
                <div className="overflow-hidden flex-1">
                  <img
                    src={explore2Img}
                    alt="titanium 2"
                    className="feature-item"
                  />
                </div>
              </div>

              <div className="feature-text-container screen-width">
                <div className="flex-1 flex justify-center">
                  <p className="feature-text">
                    iPhone 15 Pro is{" "}
                    <span className="text-white">
                      the first iPhone to feature an aerospace-grade titanium
                      design
                    </span>
                    , using the same alloy that spacecrafts use for missions to
                    Mars.
                  </p>
                </div>

                <div className="flex-1 flex justify-center">
                  <p className="feature-text">
                    Titanium has one of the best strength-to-weight ratios of
                    any metal, making these our{" "}
                    <span className="text-white">
                      lightest Pro models ever.
                    </span>{" "}
                    You'll notice the difference the moment you pick one up.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Features;
