import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "./state/actions";
import "./styles.css";

export default function App() {
  const { loading, data, error } = useSelector((state) => state);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);

  return (
    <div className="App">
      <h2>Users Information</h2>
      {loading && <div>loading...</div>}
      {error && <div style={{ color: "red", fontWeight: "bold" }}>{error}</div>}
      {data.map((user) => {
        return (
          <div key={user.id} style={{ padding: "10px 0px", fontSize: "20px" }}>
            {user.name}
          </div>
        );
      })}
    </div>
  );
}
