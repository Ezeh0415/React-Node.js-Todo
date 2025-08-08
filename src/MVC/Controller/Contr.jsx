import { createContext, useContext } from "react";
import getTodos from "../Model/Model";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const API_BASE_URL = "https://todo-backend-server-production.up.railway.app";
  const navigate = useNavigate();
  const { data, loading, error } = getTodos();
  const [formData, setFormData] = useState({
    title: "",
    email: "",
    blog: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // setFormData({
    //   ...formData,
    //   [name]: value,
    // });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(JSON.stringify(formData));
      fetch(`${API_BASE_URL}/createTodo`, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((json) => {
          console.log(json);
        })
        .catch((err) => console.error("Request failed:", err));
        setFormData({ title: "", email: "", blog: "" });
        navigate("/");
        window.location.reload();
  };
  // search section
  const [search, setSearch] = useState(false);
  const [searchData, setSearchData] = useState({
    title: "",
  });
  const [updateSearch, setUpdateSearch] = useState();
  const [searchError, setSearchError] = useState(true);

  const handleSearch = () => {
    setSearch(!search);
  };

  const handleSearchChange = (e) => {
    const { name, value } = e.target;
    setSearchData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // setFormData({
    //   ...formData,
    //   [name]: value,
    // });
  };

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    const found = data.find(
      (item) =>
        item.title.trim().toLowerCase() ===
        searchData.title.trim().toLowerCase()
    );

    if (!found) {
      setSearchError(true);
    } else {
      setSearchError(false);
      setUpdateSearch(found);
    }
    setSearchData({ title: "" });
  };

  // get single todo
  const [getTodo, setGetTodo] = useState();
  const handleGet = (id) => {
    fetch(`${API_BASE_URL}/getTodo/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setGetTodo(json.data);
        console.log(json.data);
      });
  };

  // delete section

  const handleDelete = (id) => {
    fetch(`${API_BASE_URL}/deleteTodo/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      });
    navigate("/");
    window.location.reload();
  };

  return (
    <TodoContext.Provider
      value={{
        data,
        loading,
        error,
        formData,
        handleChange,
        handleSubmit,
        search,
        handleSearch,
        searchData,
        handleSearchChange,
        handleSubmitSearch,
        updateSearch,
        searchError,
        // get single todo
        handleGet,
        getTodo,
        // delete single todo
        handleDelete,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

// Custom hook to access the context
export const useTodos = () => useContext(TodoContext);
