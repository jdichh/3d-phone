import { chipImg, frameImg, frameVideo } from "@/lib/media";
import "./extendedfeatures.css";

const ExtendedFeatures = () => {
  return (
    <section className="ext-features-section">
      <div className="screen-width">
        <div id="chip" className="chip">
          <img src={chipImg} alt="chip" width={180} height={180} />
        </div>

        <hgroup className="ext-features-hgroup">
          <h2 className="ext-features-title">
            A17 Pro chip.
            <br /> A monster win for gaming.
          </h2>

          <h3 className="ext-features-subtitle">
            It's here. The biggest redesign in the history of Apple GPUs.
          </h3>
        </hgroup>

        <figure className="ext-features-figure">
          <div className="ext-features-figure-iphone-container">
            <div className="ext-features-figure-iphone-frame">
              <img
                src={frameImg}
                alt="The iPhone 15 Pro, which is currently being displayed to play a video."
                className="ext-features-figure-iphone-frame-img"
              />
            </div>
            <div className="ext-features-video-container">
              <video
                className="ext-features-video"
                playsInline
                preload="none"
                muted
                autoPlay
                loop={true}
              >
                <source src={frameVideo} type="video/webm" />
              </video>
            </div>
          </div>
          <figcaption className="ext-features-figcaption">
            Honkai: Star Rail
          </figcaption>
        </figure>

        <div className="index-text-container">
          <div className="flex items-center justify-center flex-1">
            <p className="index-text">
              A17 Pro is an entirely new class of iPhone chip that delivers our{" "}
              <span className="text-white">
                best graphic performance by far
              </span>
              .
              <br />
              <br />
              Mobile{" "}
              <span className="text-white">
                games will look and feel so immersive
              </span>
              , with incredibly detailed environments and characters. And with
              industry-leading speed and efficiency, A17 Pro takes fast and runs
              with it.
            </p>
          </div>

          <div className="flex items-center justify-center flex-1 w-full">
            <p className="index-text">
              New <br />
              <span className="index-bigtext">Pro-class GPU</span>
              <br />
              with 6 cores
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtendedFeatures;
