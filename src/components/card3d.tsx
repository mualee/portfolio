// @ts-nocheck

"use client";
import * as THREE from "three";
import { useEffect, useRef, useState } from "react";
import { Canvas, extend, useThree, useFrame } from "@react-three/fiber";
import {
	useGLTF,
	useTexture,
	Environment,
	Lightformer,
} from "@react-three/drei";
import {
	BallCollider,
	CuboidCollider,
	Physics,
	RigidBody,
	useRopeJoint,
	useSphericalJoint,
} from "@react-three/rapier";
import { MeshLineGeometry, MeshLineMaterial } from "meshline";
import { useControls } from "leva";

extend({ MeshLineGeometry, MeshLineMaterial });

// Preload models and textures
useGLTF.preload("/lailaolab-tag.glb", false, false);

useTexture.preload("/lailaolab-clamp-black.jpeg");

export default function Card3d() {
	return (
		<Canvas camera={{ position: [0, 0, 11], fov: 20 }} style={{ width: '100%', height: '100%' }}>
			<ambientLight intensity={Math.PI} />
			<Physics interpolate gravity={[0, -40, 0]} timeStep={1 / 60}>
				<Band />
			</Physics>
		<Environment blur={0.75}>
				<Lightformer
					intensity={2}
					color="white"
					position={[0, -1, 5]}
					rotation={[0, 0, Math.PI / 3]}
					scale={[100, 0.1, 1]}
				/>
				<Lightformer
					intensity={3}
					color="white"
					position={[-1, -1, 1]}
					rotation={[0, 0, Math.PI / 3]}
					scale={[100, 0.1, 1]}
				/>
				<Lightformer
					intensity={3}
					color="white"
					position={[1, 1, 1]}
					rotation={[0, 0, Math.PI / 3]}
					scale={[100, 0.1, 1]}
				/>
				<Lightformer
					intensity={10}
					color="white"
					position={[-10, 0, 14]}
					rotation={[0, Math.PI / 2, Math.PI / 3]}
					scale={[100, 10, 1]}
				/>
			</Environment>
		</Canvas>
	);
}

function Band({ maxSpeed = 50, minSpeed = 10 }) {
	const band = useRef(null);
	const fixed = useRef(null);
	const j1 = useRef(null);
	const j2 = useRef(null);
	const j3 = useRef(null);
	const card = useRef(null);

	const vec = new THREE.Vector3();
	const ang = new THREE.Vector3();
	const rot = new THREE.Vector3();
	const dir = new THREE.Vector3();

	const segmentProps = {
		type: "dynamic",
		canSleep: true,
		colliders: false,
		angularDamping: 2,
		linearDamping: 2,
	};

	// Load models and textures
	const { nodes, materials } = useGLTF("/lailaolab-tag.glb");

	for (const node of Object.values(nodes)) {
		if (node instanceof THREE.Mesh) {
			console.log(node.geometry, node.material);
		}
	}

	const texture = useTexture("/lailaolab-clamp-black.jpeg");

	const { width, height } = useThree((state) => state.size);
	const [curve] = useState(
		() =>
			new THREE.CatmullRomCurve3([
				new THREE.Vector3(),
				new THREE.Vector3(),
				new THREE.Vector3(),
				new THREE.Vector3(),
			]),
	);
	const [dragged, setDragged] = useState(false);
	const [hovered, setHovered] = useState(false);

	// Rope joints
	useRopeJoint(fixed, j1, [[0, 0, 0], [0, 0, 0], 1]);
	useRopeJoint(j1, j2, [[0, 0, 0], [0, 0, 0], 1]);
	useRopeJoint(j2, j3, [[0, 0, 0], [0, 0, 0], 1]);
	useSphericalJoint(j3, card, [
		[0, 0, 0],
		[0, 1.45, 0],
	]);

	// Effects for pointer interactions
	useEffect(() => {
		if (hovered) {
			document.body.style.cursor = dragged ? "grabbing" : "grab";
		}
		return () => {
			document.body.style.cursor = "auto";
		};
	}, [hovered, dragged]);

	// Frame-by-frame updates
	useFrame((state, delta) => {
		if (dragged instanceof THREE.Vector3) {
			vec.set(state.pointer.x, state.pointer.y, 0.5).unproject(state.camera);
			dir.copy(vec).sub(state.camera.position).normalize();
			vec.add(dir.multiplyScalar(state.camera.position.length()));
			for (const ref of [j1, j2, j3, card, fixed]) {
				ref.current?.wakeUp();
			}
			card.current?.setNextKinematicTranslation({
				x: vec.x - dragged.x,
				y: vec.y - dragged.y,
				z: vec.z - dragged.z,
			});
		}

		if (fixed.current) {
			for (const ref of [j1, j2]) {
				if (!ref.current.lerped) {
					ref.current.lerped = new THREE.Vector3().copy(
						ref.current.translation(),
					);
				}

				const clampedDistance = Math.max(
					0.1,
					Math.min(1, ref.current.lerped.distanceTo(ref.current.translation())),
				);

				ref.current.lerped.lerp(
					ref.current.translation(),
					delta * (minSpeed + clampedDistance * (maxSpeed - minSpeed)),
				);
			}

			// Calculate the catmull-rom curve
			curve.points[0].copy(j3.current.translation());
			curve.points[1].copy(j2.current.lerped);
			curve.points[2].copy(j1.current.lerped);
			curve.points[3].copy(fixed.current.translation());
			band.current.geometry.setPoints(curve.getPoints(32));

			// Tilt it back towards the screen
			ang.copy(card.current.angvel());
			rot.copy(card.current.rotation());
			card.current.setAngvel({ x: ang.x, y: ang.y - rot.y * 0.25, z: ang.z });
		}
	});

	// Set texture wrapping
	curve.curveType = "chordal";
	texture.wrapS = texture.wrapT = THREE.RepeatWrapping;

	return (
		<>
			<group position={[0, 4, 0]}>
				<RigidBody ref={fixed} {...segmentProps} type="fixed" />
				<RigidBody position={[0.5, 0, 0]} ref={j1} {...segmentProps}>
					<BallCollider args={[0.1]} />
				</RigidBody>
				<RigidBody position={[1, 0, 0]} ref={j2} {...segmentProps}>
					<BallCollider args={[0.1]} />
				</RigidBody>
				<RigidBody position={[1.5, 0, 0]} ref={j3} {...segmentProps}>
					<BallCollider args={[0.1]} />
				</RigidBody>
				<RigidBody
					position={[2, 0, 0]}
					ref={card}
					{...segmentProps}
					type={dragged ? "kinematicPosition" : "dynamic"}
				>
					<CuboidCollider args={[0.8, 1.125, 0.01]} />
					<group
						scale={2.25}
						position={[0, -1.2, -0.05]}
						onPointerOver={() => setHovered(true)}
						onPointerOut={() => setHovered(false)}
						onPointerUp={(e) => {
							e.target.releasePointerCapture(e.pointerId);
							setDragged(false);
						}}
						onPointerDown={(e) => {
							e.target.setPointerCapture(e.pointerId);
							setDragged(
								new THREE.Vector3()
									.copy(e.point)
									.sub(vec.copy(card.current.translation())),
							);
						}}
					>
						<mesh geometry={nodes.card.geometry}>
							<meshPhysicalMaterial
								map={materials.base.map}
								map-anisotropy={16}
								clearcoat={1}
								clearcoatRoughness={0.15}
								roughness={0.3}
								metalness={0.5}
							/>
						</mesh>
						<mesh
							geometry={nodes.clip.geometry}
							material={materials.metal}
							material-roughness={0.3}
						/>
						<mesh geometry={nodes.clamp.geometry} material={materials.metal} />
					</group>
				</RigidBody>
			</group>
			<mesh ref={band}>
				<meshLineGeometry />
				<meshLineMaterial
					color="white"
					depthTest={false}
					resolution={[width, height]}
					useMap
					map={texture}
					repeat={[-3, 1]}
					lineWidth={1}
				/>
			</mesh>
		</>
	);
}
