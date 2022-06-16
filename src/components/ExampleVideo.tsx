const ExampleVideo = () => {
	return (
		<div className="relative w-full h-full select-none">
			<div className="absolute w-72 top-16 left-64 aspect-auto">
				<video src="/paris.mp4" autoPlay loop controls muted></video>
				<section className="pt-6 ">
					<h2 className="text-white">Original Dimension: 1080 x 1920</h2>
					<h2 className="text-white">Size: 3.09 MB</h2>
				</section>
			</div>
			<div className="absolute w-56 top-20 right-64 aspect-auto">
				<section className="pt-6 ">
					<h2 className="text-white">Orignal Dimension: 498 x 884</h2>
					<h2 className="text-white">Size: 1.87 MB</h2>
				</section>
				<video src="/paris-com.mp4" autoPlay loop controls muted></video>
			</div>
		</div>
	);
};
export default ExampleVideo;
