import { Scroll } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import { lazy, Suspense } from "react";
import Item from "./Item";

export default function Items() {
	const { width: w, height: h } = useThree((state) => state.viewport);
	return (
		<Scroll>
			<Item
				url="webp/1.webp"
				scale={[w / 2.5, w / 2.5, 1]}
				//@ts-no-check
				//@ts-ignore
				position={[w / 8, 0, 0]}
			/>
			<Item
				url="webp/4.webp"
				scale={[w / 5, w / 5, 1]}
				//@ts-no-check
				//@ts-ignore
				position={[-w / 2.5, -h * 1.2, 0]}
			/>
			{/* <Item url="jpg/2.jpg" scale={[2, w / 3, 1]} position={[w / 30, -h, 0]} /> */}
			<Item
				url="webp/3.webp"
				scale={[w / 3, w / 5, 1]}
				//@ts-no-check
				//@ts-ignore
				position={[-w / 4, -h * 1, 0]}
			/>
			<Item
				url="webp/5.webp"
				scale={[w / 5, w / 5, 1]}
				//@ts-no-check
				//@ts-ignore
				position={[-w / 10, -h * 1.75, 0]}
			/>
			<Item
				url="webp/6.webp"
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
				url="webp/8.webp"
				scale={[w / 2, w / 3, 1]}
				//@ts-no-check
				//@ts-ignore
				position={[w / 4, -h * 3.1, 0]}
			/>
			<Item
				url="webp/12.webp"
				scale={[w / 3, w / 2, 1]}
				//@ts-no-check
				//@ts-ignore
				position={[w / 3, -h * 4, 0]}
			/>
		</Scroll>
	);
}
