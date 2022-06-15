const Example = () => {
	return (
		<div className="relative w-full h-full select-none">
			<div className="absolute w-72 top-16 left-64 aspect-auto">
				<img src="/tetiana.jpg" alt="tetiana" />
				<section className="pt-6 ">
					<h2 className="text-white">Orignal Dimension: 640 x 959</h2>
					<h2 className="text-white">Format: jpg</h2>
					<h2 className="text-white">Size: 87.4 KB</h2>
				</section>
			</div>
			<div className="absolute w-72 bottom-16 right-64 aspect-auto">
				<section className="pt-6 ">
					<h2 className="text-white">Original Dimension: 640 x 959</h2>
					<h2 className="text-white">Format: webp</h2>
					<h2 className="text-white">Size: 35.6 KB</h2>
				</section>
				<img src="/webp/tetiana.webp" alt="tetiana" />
			</div>
		</div>
	);
};
export default Example;
