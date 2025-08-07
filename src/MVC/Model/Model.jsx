import useFetch from "../../DbFetch/apiFetch";

const getTodo = () => {
  const { data, loading, error } = useFetch("http://localhost:5000/api/hello");
  return { data, loading, error };
};

export default getTodo;
