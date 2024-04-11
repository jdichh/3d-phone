import { useGSAP } from "@gsap/react";
import { useState } from "react";
import gsap from "gsap";
import SectionHeading from "../sectionheading/sectionheading";
import ModelView from "./modelview";
import { yellowImg } from "@/lib/media";


const Model = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
    });
  }, []);

  const [phoneSize, setPhoneSize] = useState('small')
  const [model, setModel] = useState({
    title: 'phone in X color',
    color: ["#8F8A81", "#ffe7b9", "#6f6c64"],
    img: yellowImg,
  })

  // 3js camera controls
  const cameraControlSmallPhone = useRef();
  const cameraControlBigPhone = useRef();

  return (
    <section className="common-padding">
      <div className="screen-width">
        <SectionHeading heading="Take a closer look." />
        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative">
            <ModelView />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;
