import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Body from "./Component/Body";
import { v4 as uuidv4 } from 'uuid';


function App() {
  return (
    <div>
      <Header key={uuidv4()}/>
      <Body key={uuidv4()}/>
      <Footer key={uuidv4()}/>
    </div>
    
  );
}

export default App;
