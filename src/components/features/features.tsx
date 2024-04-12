import { useGSAP } from "@gsap/react";
import { explore1Img, explore2Img, exploreVideo } from "@/lib/media";
import SectionHeading from "../sectionheading/sectionheading";
import gsap from "gsap";
import "./features.css";

const Features = () => {
  useGSAP(() => {
    gsap.to("#title", { y: 0, opacity: 1 });
  }, []);

  return (
    <section id="features-section">
      <div className="screen-width">
        <div className="mb-24">
          <SectionHeading heading="Explore the full story." />
        </div>

        <div className="features-inner-div">
          <div className="features-h2">
            <h2>
              iPhone. <br /> Forged in titanium.
            </h2>
          </div>

          <div className="features-media-container">
            <div className="features-video-container">
              <video
                playsInline
                id="exploreVideo"
                className="features-video"
                preload="none"
                muted
                autoPlay
              >
                <source src={exploreVideo} type="video/webm" />
              </video>
            </div>

            <div className="features-data-container">
              <div className="feature-img-container">
                <div className="features-img-div-container">
                  <img
                    src={explore1Img}
                    alt="titanium"
                    className="feature-div-img"
                  />
                </div>
                <div className="features-img-div-container">
                  <img
                    src={explore2Img}
                    alt="titanium 2"
                    className="feature-div-img"
                  />
                </div>
              </div>

              <div className="index-text-container">
                <div className="index-text-container-div">
                  <p className="index-text">
                    iPhone 15 Pro is{" "}
                    <span className="text-white">
                      the first iPhone to feature an aerospace-grade titanium
                      design
                    </span>
                    , using the same alloy that spacecrafts use for missions to
                    Mars.
                  </p>
                </div>

                <div className="index-text-container-div">
                  <p className="index-text">
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
      </div>
    </section>
  );
};

export default Features;
