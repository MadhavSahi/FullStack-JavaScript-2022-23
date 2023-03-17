import React from 'react'
// import { RxSun } from "react-icons/rx";
import "./DarkMode.css";
// import Footer from "./Components/Footer";
// import Hero from './Components/Hero';
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Hero from './Components/Hero';
import Details from './Components/Details';
import MoreDetails from './Components/MoreDetails';
// import Footer from './Components/Footer';

const App = () => {
  // const [theme, setTheme] = useState("light"); //code logic for toggle theme
  // const toggleTheme = () => {
  //   if (theme === "light") {
  //     setTheme("dark");
  //   } else {
  //     setTheme("light");
  //   }
  // };
  // useEffect(() => { //this is for applying changes of dark theme.
  //   document.body.className = theme; // this is to apply the changes on whole body
  //   // document.body.className+="darkk";
  // }, [theme]);
  return (
    <>  
      <Routes>
        <Route path="/" element={ <><Home></Home><Hero></Hero></>}>
          <Route path="/details" element={<Details></Details>}>
              <Route path='moredetails' element={<MoreDetails></MoreDetails>} />                  
          </Route>                 
        </Route>
      </Routes>
      {/* <Footer></Footer> */}
    </>
  )
}

export default App