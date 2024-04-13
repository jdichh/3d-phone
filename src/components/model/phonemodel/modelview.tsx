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
    title2: string;
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
  const large = 0.95;
  const small = 0.85;

  return (
    <View
      id={gsapType}
      index={index}
      className={`w-full h-full absolute ${index === 2 ? "right-[-100%]" : ""}`}
    >
      <ambientLight intensity={7} />
      <PerspectiveCamera makeDefault position={[0, 0, 0.2]} />
      <Lights />

      <OrbitControls
        makeDefault
        ref={controlRef}
        enableZoom={false}
        enablePan={false}
        rotateSpeed={3}
        autoRotate
        autoRotateSpeed={-2.5}
        target={new THREE.Vector3(0, 0, 0)}
        minPolarAngle={0.8}
        maxPolarAngle={Math.PI - 0.8}
      />

      <group
        ref={groupRef}
        name={`${index === 1} ? 'small' : 'large'`}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      >
        <Suspense
          fallback={
            <Html>
              <Loading />
            </Html>
          }
        >
          <PhoneModel
            scale={index === 1 ? [small, small, small] : [large, large, large]}
            item={item}
            size={size}
          />
        </Suspense>
      </group>
    </View>
  );
};

export default ModelView;
