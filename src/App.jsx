import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { useTodos } from "./MVC/Controller/Contr";
import Nav from "./MVC/View/Partials/Nav";
import Home from "./MVC/View/Home/Home";
import CreateTodo from "./MVC/View/createTodo/CreateTodo";
import Footer from "./MVC/View/Partials/Footer";
import TodoDetails from "./MVC/View/TodoDetails/TodoDetails";

function App() {
  const { loading } = useTodos();

  return loading ? (
    <div class="loader">
      <div class="box box-1">
        <div class="side-left"></div>
        <div class="side-right"></div>
        <div class="side-top"></div>
      </div>
      <div class="box box-2">
        <div class="side-left"></div>
        <div class="side-right"></div>
        <div class="side-top"></div>
      </div>
      <div class="box box-3">
        <div class="side-left"></div>
        <div class="side-right"></div>
        <div class="side-top"></div>
      </div>
      <div class="box box-4">
        <div class="side-left"></div>
        <div class="side-right"></div>
        <div class="side-top"></div>
      </div>
    </div>
  ) : (
    <div className="min-h-screen px-[0.5rem] bg-gray-900 text-white">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createTodo" element={<CreateTodo />} />
        <Route path="/TodoDetails" element={<TodoDetails />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
