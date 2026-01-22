import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, Link, Outlet } from "react-router-dom"
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import TermsOfService from "./components/TermsOfService";
import Landing from "./components/Landing";
import NotFound from "./components/NotFound";
import CountContext from "./contexts/CountContext";

function App() {
  

//   const[showTimer, setShowTimer] = useState(true);

//   useEffect(() => {
//     setInterval(() => {
//       setShowTimer((prev) => !prev )
//     }, 5000);
//   }, [])

//   return <div>{showTimer && <Timer />}</div>;
// }

// function Timer () {

//   const [count, setCount] = useState(0);

//   function increaseCount() {
//     console.log(`from inside the clock`) // still logs even after unmount
//     setCount((prev) => prev + 1); // if we dont use the setCount(prev => prev + 1) then pass the count state variable inside the dependency array
//   }

//   useEffect(() => {
//     let clock = setInterval(increaseCount, 1000);
//     return () => {
//       clearInterval(clock); // cleanup function 
//     }
//   }, []); // effect will run only on mount because the dependency array is empty or else the effect will run whenever the variables inside the dependency array changes

//   return <div>{count} seconds elapsed!</div>;


// ROUTING

const [count, setCount] = useState(0);

return (
  <CountContext.Provider
    value={{
      count,
      setCount,
    }}
  >
    <div>
      <Blogs />
      <TermsOfService />
      <Contact />

      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout/>} >
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/" element={<Landing />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter> */}
    </div>
  </CountContext.Provider>
);


}

// function Layout () {



//   return (
//     <div>
//       <Link to="/">Landing</Link> | <Link to="/blogs">Blogs</Link> |{" "}
//       <Link to="/contact">Contacts</Link> |{" "}
//       <Link to="terms">Terms of Service</Link>
//       <Outlet />
//       Footer
//     </div>
//   );
// }

export default App
