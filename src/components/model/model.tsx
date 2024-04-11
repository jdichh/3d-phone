import { useGSAP } from "@gsap/react";
import { useState, useRef } from "react";
import { yellowImg } from "@/lib/media";
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
    title: "phone in X color",
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
          <div className="w-full h-[75vh] md:h-[85vh] overflow-hidden relative outline">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
