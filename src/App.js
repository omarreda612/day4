import Navbar from "./components/Navbar";
import Productlist from "./components/Productlist";
import { Route,Routes } from "react-router-dom";
import About from "./components/About";
import  Form  from "./components/Form";
import Productdetails from "./components/Productdetails";
function App() {

  // var data=[
  //   {
  //     title:'ip 11',
  //     price:'3000'
  //   },
  //   {
  //     title:'ip 11',
  //     price:'3000'
  //   }
  // ];
  //  var datashow = data.map((ele) => <card title = {ele.title} price = {ele.price}/>)
  return (
  // <div >{datashow}</div>
<div className="app">
 <Navbar/>
 
  <Routes>
    <Route path="/" element={<>
      <Productlist></Productlist></>
    }></Route>
    <Route path="about" element={<About/>}></Route>
    <Route path="form" element={<Form/>}></Route>
    <Route path="product/:productId" element={<Productdetails/>}></Route>
  </Routes>

</div>
  
  );
}

export default App;
