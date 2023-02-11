import FIrst from "./Components/FIrst";
import Forth from "./Components/Forth";
import Second from "./Components/Second";
import Third from "./Components/Third";

function App() {
  return (
    <div className="lg:max-w-[1440px] max-w-[375px] overflow-hidden ">
      <FIrst />
      <Second />
      <Third />
      <Forth />
    </div>
  );
}

export default App;
