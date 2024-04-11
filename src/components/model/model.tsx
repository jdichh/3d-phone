import { useGSAP } from "@gsap/react";
import { useState, useRef } from "react";
import { yellowImg } from "@/lib/media";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { models } from "@/lib/constants";
import gsap from "gsap";
import SectionHeading from "../sectionheading/sectionheading";
import ModelView from "./modelview";
import * as THREE from "three";

const Model = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
    });
  }, []);

  const [phoneSize, setPhoneSize] = useState("small");
  const [model, setModel] = useState({
    title: "iPhone 15 Pro",
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  });

  // 3js camera control tracker
  const cameraControlSmallPhone = useRef();
  const cameraControlBigPhone = useRef();

  // models & model config tracker
  const smallPhone = useRef(new THREE.Group());
  const bigPhone = useRef(new THREE.Group());

  // model rotation state
  const [smallPhoneRotation, setSmallPhoneRotation] = useState(0);
  const [bigPhoneRotation, setBigPhoneRotation] = useState(0);

  return (
    <section className="common-padding">
      <div className="screen-width">
        <SectionHeading heading="Take a closer look." />
        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[85vh] overflow-hidden relative">
            <ModelView
              index={1}
              groupRef={smallPhone}
              gsapType="view1"
              controlRef={cameraControlSmallPhone}
              setRotationValue={setSmallPhoneRotation}
              item={model}
              size={phoneSize}
            />
            <ModelView
              index={2}
              groupRef={bigPhone}
              gsapType="view2"
              controlRef={cameraControlBigPhone}
              setRotationValue={setBigPhoneRotation}
              item={model}
              size={phoneSize}
            />
            <Canvas
              className="w-full h-full"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
