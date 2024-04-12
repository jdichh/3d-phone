import { useGSAP } from "@gsap/react";
import { useState, useRef, useEffect } from "react";
import { yellowImg } from "@/lib/media";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models, sizes } from "@/lib/constants";
import { gsapTimelineAnim } from "@/lib/anim/anim";
import gsap from "gsap";
import SectionHeading from "../sectionheading/sectionheading";
import ModelView from "./phonemodel/modelview";
import * as THREE from "three";

const Model = () => {
  // default phone states
  const [phoneSize, setPhoneSize] = useState("small");
  const [model, setModel] = useState({
    title: "iPhone 15 Pro in Natural Titanium",
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

  useEffect(() => {
    if (phoneSize === 'large') {
      gsapTimelineAnim(tl, smallPhoneRef, '#view1', '#view2', {
        transform: 'translateX(-100%)',
        duration: 1.5
      })
    }

    if (phoneSize === 'small') {
      gsapTimelineAnim(tl, largePhoneRef, '#view2', '#view1', {
        transform: 'translateX(0)',
        duration: 1.5
      })
    }
  }, [phoneSize])

  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
    });

    gsap.to(".model", {
      opacity: 1,
    });
  }, []);


  return (
    <section className="common-padding">
      <div className="screen-width">
        <SectionHeading heading="Take a closer look." />
        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[85vh] overflow-hidden relative">
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
              className="w-full h-full model"
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
          <div className="mx-auto w-full">
            <p className="font-light text-center mb-5">{model.title}</p>
            <div className="flex-center">
              <ul className="color-container">
                {models.map((item, index) => (
                  <li
                    key={index}
                    className="w-6 h-6 rounded-full mx-2 cursor-pointer"
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
