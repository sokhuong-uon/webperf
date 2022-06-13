import Agenda from "./components/Agenda";
import Intro from "./components/Intro";
import Main from "./components/Main";
import What from "./components/What";
import Why from "./components/Why";

function App() {
	return (
		<main className="relative flex flex-col w-screen h-screen overflow-hidden bg-black">
			<div className="absolute w-full h-full ">
				<Main />
			</div>
			<div className="absolute w-full h-full overflow-y-auto snap-mandatory snap-y hidescrollbar">
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
			</div>
		</main>
	);
}

export default App;
