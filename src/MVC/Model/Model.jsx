import useFetch from "../../DbFetch/apiFetch";

const getTodo = () => {
  const API_BASE_URL = "https://todo-backend-server-production.up.railway.app";
  const { data, loading, error } = useFetch(`${API_BASE_URL}/api/hello`);
  return { data, loading, error };
};

export default getTodo;
