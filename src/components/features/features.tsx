import { explore1Img, explore2Img, exploreImg } from "@/lib/media";
import "./features.css";

const Features = () => {
  return (
    <section id="features-section">
      <div className="screen-width">
        <div className="mb-24">
          <h2 className="features-section-heading" id="title">
            Explore the full story.
          </h2>
        </div>

        <div className="features-inner-div">
          <div className="features-h2">
            <h2>
              iPhone. <br /> Forged in titanium.
            </h2>
          </div>

          <div className="features-media-container">
            <div className="features-img-container">
              <img src={exploreImg} className="features-img" alt="A picture of a corner of the iPhone 15." />
            </div>

            <div className="features-data-container">
              <div className="feature-img-container">
                <div className="features-img-div-container">
                  <img
                    src={explore1Img}
                    alt="A picture of the cameras of the iPhone 15."
                    className="feature-div-img"
                  />
                </div>
                <div className="features-img-div-container">
                  <img
                    src={explore2Img}
                    alt="A picture of the Action Button of the iPhone 15."
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
