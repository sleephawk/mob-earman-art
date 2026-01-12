import React, { useContext, useEffect, useMemo } from "react";
import { useGraph } from "@react-three/fiber";
import { useGLTF, useAnimations } from "@react-three/drei";
import { ClipNameContext } from "../../ClipNameContext";
import type { AnimationAction, Material } from "three";
import { SkeletonUtils } from "three-stdlib";
import { ModeContext } from "../../ModeContext";

export function MobV3(props) {
  const group = React.useRef(null);
  const { scene, animations } = useGLTF("/assets/glb/MobV3.2-transformed.glb");
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);
  const { actions, mixer } = useAnimations(animations, group);
  const clipName = useContext(ClipNameContext);
  const mode = useContext(ModeContext);

  const switchMode = (
    m1Paint: Material,
    m2Paper: Material,
    m3Primary: Material
  ): Material => {
    switch (mode) {
      case "paint":
        return m1Paint;
      case "paper":
        return m2Paper;
      case "primary":
        return m3Primary;
      default:
        return m1Paint;
    }
  };

  const bigBlockMaterial = useMemo(() => {
    return switchMode(
      materials["Big Block"],
      materials.bigBlockPaper,
      materials.bigBlockPrimary
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);
  const bigPawSqMaterial = useMemo(() => {
    return switchMode(
      materials.bigSqPawPaint,
      materials.bigSqPawPaper,
      materials.bigSqPawPrimary
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  const cubeYellowMaterial = useMemo(() => {
    return switchMode(
      materials.cubeYellowPaint,
      materials.cubePaper,
      materials.cubeYellowPrimary
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  const eyeMaterial = useMemo(() => {
    return switchMode(
      materials.eyePaint,
      materials.eyePaper,
      materials.eyePaint
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  const gemMaterial = useMemo(() => {
    return switchMode(materials.gem, materials.gemPaper, materials.gemPrimary);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  const handMaterial = useMemo(() => {
    return switchMode(
      materials.handPaint,
      materials.handPaper,
      materials.handPrimary
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  const lilBombMaterial = useMemo(() => {
    return switchMode(
      materials.lilBomb,
      materials.lilBombPaper,
      materials.lilBombPrimary
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  const smallPawMaterial = useMemo(() => {
    return switchMode(
      materials.smallPaw,
      materials.smallPawPaper,
      materials.smallPawPrimary
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  /**
   * LOGIC FOR THE ANIMATIONS USING THE USE ANIMATIONS HOOK
   */ useEffect(() => {
    if (!mixer || !actions) return; //if there's no mixer or actions leave it

    const allActions = Object.values(actions).filter(
      Boolean
    ) as AnimationAction[];

    const actionFilter = (clipType: string) =>
      allActions.filter((a) => a.getClip().name.includes(clipType));

    const runningActions = allActions.filter((a) => a.isRunning());

    const nextClip = clipName!; //for some reason this won't play the giant paw animation if not imperative
    const nextActions = actionFilter(nextClip); //getting the next actions is just finding the clipName (string) in the actions

    const FADE_DURATION = 1;

    if (runningActions.length === 0) {
      nextActions.forEach((a) => a.reset().fadeIn(FADE_DURATION).play());
    } else {
      runningActions.forEach((a) => {
        a.fadeOut(FADE_DURATION);
      });

      nextActions.forEach((a) => {
        a.reset().fadeIn(FADE_DURATION).play();
      });
    }

    return () => {
      allActions.forEach((a) => a.fadeOut(0.2));
    };
  }, [actions, clipName, mixer]);
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="mob">
        <group
          name="hand"
          position={[0.197, 0.02, -0.297]}
          rotation={[2.02, -1.399, 0.928]}
          scale={0.029}
        >
          <primitive object={nodes.Bone} />
          <primitive object={nodes.Bone002} />
          <primitive object={nodes.Bone005} />
          <primitive object={nodes.Bone008} />
        </group>
        <group
          name="GIANTPAWEMPTY"
          position={[-0.355, 0.031, -0.084]}
          rotation={[1.204, -0.913, 1.614]}
          scale={0.042}
        >
          <mesh
            name="Cube006"
            geometry={nodes.Cube006.geometry}
            material={gemMaterial}
            position={[1.2, -1.352, -2.625]}
            rotation={[3.107, -0.825, -0.844]}
            scale={[-2.862, -0.39, -0.39]}
          />
          <mesh
            name="lilbomb2"
            geometry={nodes.lilbomb2.geometry}
            material={lilBombMaterial}
            position={[-3.612, -9.549, -15.996]}
            rotation={[0.347, -0.403, 2.342]}
            scale={1.135}
          />
          <mesh
            name="lilbigbomb"
            geometry={nodes.lilbigbomb.geometry}
            material={lilBombMaterial}
            position={[0.998, -13.957, -9.472]}
            rotation={[2.19, -0.176, -1.579]}
            scale={2.503}
          />
        </group>
        <group
          name="Armature001"
          position={[0.001, -0.001, -0.403]}
          scale={0.266}
        >
          <group name="Bone_1">
            <mesh
              name="EYE"
              geometry={nodes.EYE.geometry}
              material={eyeMaterial}
              rotation={[1.505, -0.067, -3.129]}
              scale={0.172}
            />
          </group>
        </group>
        <group
          name="Armature002"
          position={[-0.119, -0.073, -0.227]}
          rotation={[0, 0.591, 0]}
          scale={0.17}
        >
          <group name="Bone_2">
            <mesh
              name="smallEye"
              geometry={nodes.smallEye.geometry}
              material={eyeMaterial}
              position={[4.054, 1.553, 3.253]}
              rotation={[-0.071, -0.641, -1.433]}
              scale={0.195}
            />
          </group>
        </group>
        <group
          name="Armature"
          position={[-0.225, -0.235, -0.052]}
          rotation={[1.198, -0.347, 0.094]}
          scale={0.167}
        >
          <primitive object={nodes.Bone_3} />
          <primitive object={nodes.Bone005_1} />
          <primitive object={nodes.Bone006_1} />
        </group>
        <group
          name="Armature003"
          position={[-0.405, 0.125, -0.078]}
          rotation={[-0.95, -0.926, 0.832]}
          scale={-0.075}
        >
          <primitive object={nodes.Bone_4} />
        </group>
        <group name="Empty001" position={[0.001, 0.025, -0.403]} />
        <mesh
          name="bigBlock"
          geometry={nodes.bigBlock.geometry}
          material={bigBlockMaterial}
          position={[0.007, 0.392, -1.121]}
          rotation={[2.062, -0.978, -1.734]}
          scale={0.175}
        >
          <group
            name="Empty"
            position={[-1.596, -0.696, -2.812]}
            rotation={[2.618, -0.978, 2.409]}
            scale={0.62}
          >
            <mesh
              name="Cube009"
              geometry={nodes.Cube009.geometry}
              material={materials.bl}
              position={[-0.155, 0.013, 0.088]}
              rotation={[-0.644, -0.161, -1.7]}
              scale={0.137}
            />
          </group>
        </mesh>
        <mesh
          name="sharp5"
          geometry={nodes.sharp5.geometry}
          material={materials.bl}
          position={[0.702, 0.636, -0.035]}
          rotation={[0.746, 0.083, 2.245]}
          scale={0.093}
        />
        <mesh
          name="Cube007"
          geometry={nodes.Cube007.geometry}
          material={cubeYellowMaterial}
          position={[7.586, 0.899, 2.163]}
          rotation={[-0.544, 0.052, -0.107]}
          scale={0.359}
        />
        <mesh
          name="HALO"
          geometry={nodes.HALO.geometry}
          material={materials.EMISSION}
          position={[0.008, 0.033, -0.615]}
          rotation={[-3.046, -1.465, 1.546]}
          scale={0.167}
        />
        <mesh
          name="Mountain2"
          geometry={nodes.Mountain2.geometry}
          material={materials.bl}
          position={[0.097, -0.245, -0.632]}
          rotation={[2.753, 1.074, 2.197]}
          scale={[0.904, 0.277, 0.318]}
        />
        {/* <group name="Cube" scale={0.01}>
          <mesh
            name="Cube001_1"
            geometry={nodes.Cube001_1.geometry}
            material={materials["Big Block"]}
          />
          <mesh
            name="Cube001_2"
            geometry={nodes.Cube001_2.geometry}
            material={materials.bigBlockPaper}
          />
          <mesh
            name="Cube001_3"
            geometry={nodes.Cube001_3.geometry}
            material={materials.bigBlockPrimary}
          />
          <mesh
            name="Cube001_4"
            geometry={nodes.Cube001_4.geometry}
            material={materials.bigSqPawPaint}
          />
          <mesh
            name="Cube001_5"
            geometry={nodes.Cube001_5.geometry}
            material={materials.bigSqPawPaper}
          />
          <mesh
            name="Cube001_6"
            geometry={nodes.Cube001_6.geometry}
            material={materials.bigSqPawPrimary}
          />
          <mesh
            name="Cube001_7"
            geometry={nodes.Cube001_7.geometry}
            material={materials.cubePaper}
          />
          <mesh
            name="Cube001_8"
            geometry={nodes.Cube001_8.geometry}
            material={materials.cubeYellowPrimary}
          />
          <mesh
            name="Cube001_9"
            geometry={nodes.Cube001_9.geometry}
            material={materials.eyePaint}
          />
          <mesh
            name="Cube001_10"
            geometry={nodes.Cube001_10.geometry}
            material={materials.eyePaper}
          />
          <mesh
            name="Cube001_11"
            geometry={nodes.Cube001_11.geometry}
            material={materials.eyePrimary}
          />
          <mesh
            name="Cube001_12"
            geometry={nodes.Cube001_12.geometry}
            material={materials.gem}
          />
          <mesh
            name="Cube001_13"
            geometry={nodes.Cube001_13.geometry}
            material={materials.gemPaper}
          />
          <mesh
            name="Cube001_14"
            geometry={nodes.Cube001_14.geometry}
            material={materials.gemPrimary}
          />
          <mesh
            name="Cube001_15"
            geometry={nodes.Cube001_15.geometry}
            material={materials.handPaint}
          />
          <mesh
            name="Cube001_16"
            geometry={nodes.Cube001_16.geometry}
            material={materials.handPaper}
          />
          <mesh
            name="Cube001_17"
            geometry={nodes.Cube001_17.geometry}
            material={materials.handPrimary}
          />
          <mesh
            name="Cube001_18"
            geometry={nodes.Cube001_18.geometry}
            material={materials.lilBomb}
          />
          <mesh
            name="Cube001_19"
            geometry={nodes.Cube001_19.geometry}
            material={materials.lilBombPaper}
          />
          <mesh
            name="Cube001_20"
            geometry={nodes.Cube001_20.geometry}
            material={materials.lilBombPrimary}
          />
          <mesh
            name="Cube001_21"
            geometry={nodes.Cube001_21.geometry}
            material={materials.smallPaw}
          />
          <mesh
            name="Cube001_22"
            geometry={nodes.Cube001_22.geometry}
            material={materials.smallPawPaper}
          />
          <mesh
            name="Cube001_23"
            geometry={nodes.Cube001_23.geometry}
            material={materials.smallPawPrimary}
          />
        </group> */}
        <skinnedMesh
          name="Cube019"
          geometry={nodes.Cube019.geometry}
          material={smallPawMaterial}
          skeleton={nodes.Cube019.skeleton}
          position={[0.197, 0.02, -0.297]}
          rotation={[2.02, -1.399, 0.928]}
          scale={0.029}
        />
        <skinnedMesh
          name="bigSqPaw"
          geometry={nodes.bigSqPaw.geometry}
          material={bigPawSqMaterial}
          skeleton={nodes.bigSqPaw.skeleton}
          position={[-0.225, -0.235, -0.052]}
          rotation={[1.198, -0.347, 0.094]}
          scale={0.167}
        />
        <skinnedMesh
          name="Cube001"
          geometry={nodes.Cube001.geometry}
          material={smallPawMaterial}
          skeleton={nodes.Cube001.skeleton}
          position={[-0.405, 0.125, -0.078]}
          rotation={[2.192, 0.926, -0.832]}
          scale={[-0.075, 0.075, 0.075]}
        />
        <skinnedMesh
          name="Cube008"
          geometry={nodes.Cube008.geometry}
          material={smallPawMaterial}
          skeleton={nodes.Cube008.skeleton}
          position={[-0.405, 0.125, -0.078]}
          rotation={[2.192, 0.926, -0.832]}
          scale={[-0.075, 0.075, 0.075]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/assets/glb/MobV3.2-transformed.glb");
