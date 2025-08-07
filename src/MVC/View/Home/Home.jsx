import React from "react";
import "../../../App.css";
import { Link } from "react-router-dom";
import { useTodos } from "../../Controller/Contr";

const Home = () => {
  const {
    data,
    loading,
    error,
    search,
    handleSearch,
    searchData,
    handleSearchChange,
    handleSubmitSearch,
    updateSearch,
    searchError,
    handleGet,
  } = useTodos();

  console.log(data);

  return loading ? (
    <div>
      <h1>loading .......</h1>
    </div>
  ) : (
    <div className="relative text-gray-300">
      <section className="mt-[1rem]">
        <form
          action="post"
          onSubmit={handleSubmitSearch}
          className="flex items-center gap-2"
        >
          <input
            type="text"
            id="title"
            name="title"
            placeholder="search"
            value={searchData.title}
            onChange={handleSearchChange}
            onClick={handleSearch}
            className="w-[80%] bg-gray-600 capitalize border border-gray-300 rounded-lg px-2 py-1 focus:outline-none focus:border-blue-500 ml-4"
          />
          <button type="submit">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </form>
        {search &&
          (searchError ? (
            <div className="bg-gray-950/60 h-[80vh] absolute w-[100%]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-[60%] flex items-center justify-center absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
              <h2 className="text-center text-[2rem] capitalize mt-[75%]">
                search query not found
              </h2>
            </div>
          ) : (
            updateSearch && (
              <div className="bg-gray-950/60 h-[80vh] absolute w-[100%] ">
                <Link
                  to="/TodoDetails"
                  onClick={() => handleGet(updateSearch._id)}
                >
                  <div className="p-4 mt-5 bg-gray-800 border border-red-500 rounded-lg shadow-lg">
                    {/* SVG at top left */}
                    <div className="flex items-center justify-between">
                      <h2 className="mt-2 mb-2 text-sm font-bold text-red-500">
                        {updateSearch.title}
                      </h2>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="text-red-500 size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 9h16.5m-16.5 6.75h16.5"
                        />
                      </svg>
                    </div>

                    <p className="mb-2 text-xs gray-300">
                      {updateSearch.blog.length >= 50
                        ? updateSearch.blog.substring(0, 50) + "..."
                        : updateSearch.blog}
                    </p>
                    <span className="text-xs text-gray-400">
                      created Date: {updateSearch.createdAt}
                    </span>
                  </div>
                </Link>
              </div>
            )
          ))}
      </section>

      <section className="mt-[1rem]">
        <div className="flex items-center justify-between">
          <h1 className="capitalize text-[1.3rem]">today</h1>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4 sm:grid-cols-3 md:grid-cols-4">
          {/* Card */}
          {loading ? (
            <div>loading......</div>
          ) : (
            data &&
            data.map((eachData) => (
              <div
                className="p-4 bg-gray-800 border border-red-500 rounded-lg shadow-lg"
                key={eachData._id}
              >
                <Link to="/TodoDetails" onClick={() => handleGet(eachData._id)}>
                  {/* SVG at top left */}
                  <div className="flex items-center justify-between">
                    <h2 className="mt-2 mb-2 text-sm font-bold text-red-500">
                      {eachData.title}
                    </h2>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="text-red-500 size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 9h16.5m-16.5 6.75h16.5"
                      />
                    </svg>
                  </div>

                  <p className="mb-2 text-xs text-gray-300">
                    {eachData.blog.length >= 50
                      ? eachData.blog.substring(0, 50) + "..."
                      : eachData.blog}
                  </p>
                  <span className="text-xs text-gray-400">
                    created Date: {eachData.createdAt}
                  </span>
                </Link>
              </div>
            ))
          )}
        </div>
      </section>

      <section>
        <Link to="/createTodo">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-12 p-3 fixed left-[80%] top-[80vh] opacity-70 bg-red-700 rounded-full hover:bg-blue-600"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </Link>
      </section>
    </div>
  );
};

export default Home;
