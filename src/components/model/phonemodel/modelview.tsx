import * as THREE from "three";
import {
  Html,
  OrbitControls,
  PerspectiveCamera,
  View,
} from "@react-three/drei";
import Lights from "./lights";
import { Suspense } from "react";
import PhoneModel from "./phone";
import Loading from "@/components/loading/loading";

interface ModelViewProps {
  index: number;
  groupRef: React.MutableRefObject<THREE.Group>;
  gsapType: string;
  controlRef: React.MutableRefObject<any>;
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
  item,
  size,
}: ModelViewProps) => {
  return (
    <View
      id={gsapType}
      index={index}
      className={`w-full h-full ${index === 2 ? "right-[-100%]" : ""}`}
    >
      <PerspectiveCamera />
      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={-0.8}
        rotateSpeed={0.8}
        target={new THREE.Vector3(0, 0, 0)}
      />

      <group
        ref={groupRef}
        name={`${index === 1} ? 'small' : 'large'`}
        position={[0, 0, 0]}
        rotation={[0, 3.14, 0]}
      >
        <Suspense
          fallback={
            <Html>
              <Loading/>
            </Html>
          }
        >
          <PhoneModel
            scale={index === 1 ? [30, 30, 30] : [35, 35, 35]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
