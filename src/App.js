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
import RecruitmentForm from "./pages/RecruitmentForm";
import Posts from "./pages/Posts";
import Todos from "./pages/Todo";
import Users from "./pages/Users";
import LoginForm from "./pages/LoginForm";

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
          <Route path={"/RecruitmentForm"} element={<RecruitmentForm />} />
          <Route path={"/Posts"} element={<Posts />} />
          <Route path={"/Users"} element={<Users />} />
          <Route path={"/Todos"} element={<Todos />} />
          <Route path={"/LoginForm"} element={<LoginForm />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
