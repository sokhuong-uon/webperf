import { Canvas, useThree } from "@react-three/fiber";
import { useEffect } from "react";
const Main = () => {
	return (
		// <div className=""></div>
		<Canvas className="absolute inset-0 z-0 flex-shrink-0 w-full h-full">
			<mesh position={[2, 0, 0]}>
				<boxBufferGeometry />
				<meshBasicMaterial />
			</mesh>
		</Canvas>
	);
};

export default Main;
