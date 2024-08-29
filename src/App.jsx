import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ModalContainer from "./components/ModalTask2";
import Hover from "./components/HoverTask3";
import AccordionMenu from "./components/AccordianTask4";
import ImgSlider from "./components/CarouselTask5";
import Tooltip from "./components/TooltipTask7";

function App(){
  return(
    <>
     <h1>Task#2: Modal Window Implementation</h1>
    <ModalContainer />
    <br /><br />
    
    <h1>Task#3:  Card Hover Effect</h1>
    <Hover />

    <br /><br /><br />
      <h1>Task#4: Accordion Menu </h1>
      <AccordionMenu />
    
      <br /><br /><br />
      <h1>Task#5: Image Slider / Carousel</h1><br />
    <ImgSlider />
  
    
      <h1>Task#7: Tooltip</h1><br />
   <Tooltip />
    </>
  )
}
export default App;