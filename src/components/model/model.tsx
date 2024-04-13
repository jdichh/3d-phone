import { useState, useRef, useEffect, MutableRefObject } from "react";
import { yellowImg } from "@/lib/media";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "@/lib/constants";
import gsap from "gsap";
import ModelView from "./phonemodel/modelview";
import * as THREE from "three";
import "./model.css";

const Model = () => {
  // default phone states
  const [phoneSize, setPhoneSize] = useState("small");
  const [model, setModel] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
    title2: "iPhone 15 Pro Max in Natural Titanium",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  });

  // 3js camera control tracker
  const cameraControlSmallPhone = useRef();
  const cameraControlLargePhone = useRef();

  // models & model config tracker
  const smallPhoneRef = useRef(new THREE.Group());
  const largePhoneRef = useRef(new THREE.Group());

  const tl = gsap.timeline();
  const easeSetting = "power2.inOut";

  useEffect(() => {
    const gsapTimelineAnim = (
      timeline: gsap.core.Timeline,
      rotationRef: MutableRefObject<THREE.Group<THREE.Object3DEventMap>>,
      target1: string,
      target2: string,
      animProps: { transform: string; duration: number },
      
    ) => {
      timeline.to(rotationRef.current.rotation, {
        y: Math.PI,
        duration: 1,
        ease: easeSetting,
      });

      timeline.to(
        target1,
        {
          ...animProps,
          ease: easeSetting,
        },
        "<"
      );

      timeline.to(
        target2,
        {
          ...animProps,
          ease: easeSetting,
        },
        "<"
      );
    };

    if (phoneSize === "large") {
      gsapTimelineAnim(tl, smallPhoneRef, "#view1", "#view2", {
        transform: "translateX(-100%)",
        duration: 1.5,
      });
    }

    if (phoneSize === "small") {
      gsapTimelineAnim(tl, largePhoneRef, "#view2", "#view1", {
        transform: "translateX(0)",
        duration: 1.5,
      });
    }

  }, [phoneSize]);

  return (
    <section className="model-section">
      <div className="screen-width">
        <h2 className="model-section-heading" id="title">
          Take a closer look.
        </h2>
        <div className="model-inner-div">
          <div className="model-inner-div-canvas">
            <ModelView
              index={1}
              groupRef={smallPhoneRef}
              gsapType="view1"
              controlRef={cameraControlSmallPhone}
              item={model}
              size={phoneSize}
            />
            <ModelView
              index={2}
              groupRef={largePhoneRef}
              gsapType="view2"
              controlRef={cameraControlLargePhone}
              item={model}
              size={phoneSize}
            />
            <Canvas
              className="w-full"
              style={{
                inset: 0,
                position: "fixed",
                overflow: "hidden",
              }}
              eventSource={document.getElementById("root") as HTMLElement}
            >
              <View.Port />
            </Canvas>
          </div>
          <div>
            <p className="model-title">{phoneSize === 'small' ? model.title : model.title2}</p>
            <div className="model-configurator">
              <ul className="model-configurator-color-container">
                {models.map((item, index) => (
                  <li
                    key={index}
                    className="colors"
                    style={{ backgroundColor: item.color[0] }}
                    onClick={() => setModel(item)}
                  />
                ))}
              </ul>
              <button className="size-btn-container">
                {sizes.map((size) => (
                  <span
                    key={size.label}
                    className="size-btn"
                    style={{
                      backgroundColor:
                        phoneSize === size.value ? "white" : "transparent",
                      color: phoneSize === size.value ? "black" : "white",
                    }}
                    onClick={() => setPhoneSize(size.value)}
                  >
                    {size.label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
