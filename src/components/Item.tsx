import { useIntersect } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import { MathUtils } from "three";

export default function Item({
	url,
	scale,
	...props
}: {
	url: string;
	scale: any;
}) {
	const visible = useRef(false);
	const ref = useIntersect((isVisible) => (visible.current = isVisible));
	const { height } = useThree((state) => state.viewport);
	useFrame((state, delta) => {
		ref.current.position.y = MathUtils.damp(
			ref.current.position.y,
			visible.current ? 0 : -height / 2 + 1,
			4,
			delta
		);

		//@ts-no-check
		//@ts-ignore

		ref.current.material.zoom = MathUtils.damp(
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
