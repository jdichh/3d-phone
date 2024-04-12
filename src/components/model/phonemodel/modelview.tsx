import * as THREE from "three";
import { Html, PerspectiveCamera, View } from "@react-three/drei";
import Lights from "./lights";
import { Suspense } from "react";
import PhoneModel from "./phone";

interface ModelViewProps {
  index: number;
  groupRef: React.MutableRefObject<THREE.Group>;
  gsapType: string;
  // controlRef: React.MutableRefObject<any>;
  setRotationValue: React.Dispatch<React.SetStateAction<number>>;
  item: {
    title: string;
    color: string[];
    img: string;
  };
  size: string;
}

const ModelView = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotationValue,
  item,
  size,
}: ModelViewProps) => {
  return (
    <View
      id={gsapType}
      index={index}
      className={`w-full h-full ${index === 2 ? "right-[-100%]" : ""}`}
    >
      <PerspectiveCamera/>
      <Lights />
      <Suspense fallback={<Html><div>placeholder loading</div></Html>}>
        <PhoneModel />
      </Suspense>
    </View>
  );
};

export default ModelView;
