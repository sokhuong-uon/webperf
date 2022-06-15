import { Suspense } from "react";
import Agenda from "./components/Agenda";
import Example from "./components/Example";
import Intro from "./components/Intro";
import Main from "./components/Main";
import Todo from "./components/Todo";
import What from "./components/What";
import Why from "./components/Why";

function App() {
	return (
		<main className="relative flex flex-col w-screen h-screen overflow-hidden bg-black select-none">
			<div className="absolute w-full h-full ">
				<Suspense>
					<Main />
				</Suspense>
			</div>
		</main>
	);
}

export default App;
