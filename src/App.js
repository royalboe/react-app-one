// import "./App.css";
// import "./components/Counter";
// import Counter from "./components/Counter";

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello PwC Trainers</h1>
//       <Counter />
//     </div>
//   );
// }

// export default App;

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentsData from "./pages/StudentsData";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import AboutUs from "./pages/AboutUs";
import ApplicationForm from "./pages/ApplicationForm";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/Home"} element={<Home />} />
          <Route path={"/AboutUs"} element={<AboutUs />} />
          <Route path={"/Gallery"} element={<Gallery />} />
          <Route path={"/StudentsData"} element={<StudentsData />} />
          <Route path={"/ContactUs"} element={<ContactUs />} />
          <Route path={"/ApplicationForm"} element={<ApplicationForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
