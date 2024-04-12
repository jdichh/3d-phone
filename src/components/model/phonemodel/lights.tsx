import { Environment, Lightformer } from "@react-three/drei";

const Lights = () => {
  return (
    <group name="lights">
      <Environment resolution={256}>
        <group>
          <Lightformer
            form="rect"
            intensity={10}
            position={[0, 0, -10]}
            scale={10}
            color={"#495057"}
          />
          <Lightformer
            form="rect"
            intensity={10}
            position={[-10, 0, 0]}
            scale={10}
            rotation-y={Math.PI / 2}
          />
          <Lightformer
            form="rect"
            intensity={10}
            position={[10, 0, 0]}
            scale={10}
            rotation-y={Math.PI / 2}
          />
        </group>
      </Environment>
      {/* top */}
      <spotLight
        position={[0, 10, 0]}
        penumbra={1}
        decay={0}
        intensity={1}
        color={"#DDD"}
      />
      {/* bottom */}
      <spotLight
        position={[0, -10, 0]}
        penumbra={1}
        decay={0}
        intensity={1}
        color={"#DDD"}
      />
    </group>
  );
};

export default Lights;
