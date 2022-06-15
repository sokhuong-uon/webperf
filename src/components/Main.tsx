import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { ScrollControls, Image, useIntersect, Scroll } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import Intro from "./Intro";
import Agenda from "./Agenda";
import What from "./What";
import Why from "./Why";
import Todo from "./Todo";
import Example from "./Example";
import ExampleVideo from "./ExampleVideo";
const Main = () => {
	return (
		// <div className=""></div>
		<Canvas
			orthographic
			camera={{ zoom: 80 }}
			gl={{ alpha: false, antialias: false, depth: false }}
			className="absolute inset-0 z-0 flex-shrink-0 w-full h-full"
		>
			<color attach={"background"} args={["#f9b4ab"]}></color>
			<ScrollControls
				damping={6}
				pages={7}
				style={{ scrollSnapType: "y mandatory" }}
				//@ts-no-check
				//@ts-ignore
				className="snap-y snap-mandatory"
			>
				<Items></Items>
				<Scroll
					html
					//@ts-no-check
					//@ts-ignore
					className="relative w-full h-full snap-center snap-y snap-mandatory"
				>
					<div className="w-full h-full snap-center">
						<Intro></Intro>
					</div>
					<div className="w-full h-full snap-center ">
						<Agenda></Agenda>
					</div>
					<div className="w-full h-full snap-center ">
						<What></What>
					</div>
					<div className="w-full h-full snap-center ">
						<Why></Why>
					</div>
					<div className="w-full h-full snap-center ">
						<Todo></Todo>
					</div>
					<div className="w-full h-full snap-center ">
						<Example></Example>
					</div>
					<div className="w-full h-full snap-center ">
						<ExampleVideo></ExampleVideo>
					</div>
				</Scroll>
			</ScrollControls>
			{/* <mesh position={[2, 0, 0]}>
				<boxBufferGeometry />
				<meshBasicMaterial />
			</mesh> */}
		</Canvas>
	);
};

function Item({ url, scale, ...props }: { url: string; scale: any }) {
	const visible = useRef(false);
	const ref = useIntersect((isVisible) => (visible.current = isVisible));
	const { height } = useThree((state) => state.viewport);
	useFrame((state, delta) => {
		ref.current.position.y = THREE.MathUtils.damp(
			ref.current.position.y,
			visible.current ? 0 : -height / 2 + 1,
			4,
			delta
		);

		//@ts-no-check
		//@ts-ignore

		ref.current.material.zoom = THREE.MathUtils.damp(
			//@ts-no-check
			//@ts-ignore
			ref.current.material.zoom,
			visible.current ? 1 : 1.5,
			4,
			delta
		);
	});
	return (
		<group {...props}>
			{/* 
			 //@ts-no-check
		//@ts-ignore	*/}
			<Image ref={ref} scale={scale} url={url} />
		</group>
	);
}

function Items() {
	const { width: w, height: h } = useThree((state) => state.viewport);
	return (
		<Scroll>
			<Item
				url="jpg/1.jpg"
				scale={[w / 2.5, w / 2.5, 1]}
				//@ts-no-check
				//@ts-ignore
				position={[w / 8, 0, 0]}
			/>
			<Item
				url="jpg/4.jpg"
				scale={[w / 5, w / 5, 1]}
				//@ts-no-check
				//@ts-ignore
				position={[-w / 2.5, -h * 1.2, 0]}
			/>
			{/* <Item url="jpg/2.jpg" scale={[2, w / 3, 1]} position={[w / 30, -h, 0]} /> */}
			<Item
				url="jpg/3.jpg"
				scale={[w / 3, w / 5, 1]}
				//@ts-no-check
				//@ts-ignore
				position={[-w / 4, -h * 1, 0]}
			/>
			<Item
				url="jpg/5.jpg"
				scale={[w / 5, w / 5, 1]}
				//@ts-no-check
				//@ts-ignore
				position={[-w / 10, -h * 1.75, 0]}
			/>
			<Item
				url="jpg/6.jpg"
				scale={[w / 3, w / 3, 1]}
				//@ts-no-check
				//@ts-ignore
				position={[w / 4, -h * 2, 0]}
			/>
			{/* <Item
				url="jpg/7.jpg"
				scale={[w / 3, w / 5, 1]}
				position={[-w / 4, -h * 2.6, 0]}
			/> */}
			<Item
				url="jpg/8.jpg"
				scale={[w / 2, w / 3, 1]}
				//@ts-no-check
				//@ts-ignore
				position={[w / 4, -h * 3.1, 0]}
			/>
			<Item
				url="jpg/12.jpg"
				scale={[w / 3, w / 2, 1]}
				//@ts-no-check
				//@ts-ignore
				position={[w / 3, -h * 4, 0]}
			/>
		</Scroll>
	);
}

export default Main;
