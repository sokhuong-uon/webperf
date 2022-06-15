const Todo = () => {
	return (
		<div className="flex justify-start w-full h-full ">
			<section className="w-full h-full pl-12 ">
				<h1 className="py-10 text-6xl font-medium text-white select-none ">
					What we could do
				</h1>
				<ul className="flex flex-col justify-start w-full gap-24 pt-20 my-auto text-6xl font-normal text-white list-disc list-inside h-4/5 ">
					<li>Convert images to web-friendly format </li>
					<li>Compress video/audio file </li>
					<li>Enough is probably enough (size, (r,g,b,a?)) </li>
				</ul>
			</section>
		</div>
	);
};
export default Todo;
