import React from "react";
import { Link } from "react-router-dom";
import { useTodos } from "../../Controller/Contr";

const CreateTodo = () => {
    const {formData, handleChange,handleSubmit} = useTodos();
  return (
    <div>
      <nav className="flex items-center justify-between px-2 py-2 mt-[0.5rem]">
        <h1 className="text-[1.2rem]capitalize">Create Todo</h1>
        <Link to="/" className="px-2 py-1 bg-red-700 rounded-lg">
          Todo
        </Link>
      </nav>

      <section className="flex items-center justify-center mt-[1rem]">
        <form onSubmit={handleSubmit} method="post" className=" w-[80%] capitalize">
          <input
            type="text"
            placeholder="Title"
            name="title"
            id="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full p-2 text-black bg-gray-300 border-2 rounded-lg focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-2 mt-3 text-black bg-gray-300 border-2 rounded-lg focus:outline-none"
          />

          <textarea
            name="blog"
            id="blog"
            value={formData.blog}
            onChange={handleChange}
            required
            className="w-full h-32 p-1 mt-3 text-black capitalize bg-gray-300 text-"
            placeholder="todo text here"
          >
            {" "}
          </textarea>

          <button
            type="submit"
            className="px-4 py-2 mt-3 capitalize bg-red-600 rounded-xl w-72"
          >
            add todo
          </button>
        </form>
      </section>
    </div>
  );
};

export default CreateTodo;
