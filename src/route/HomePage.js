import React, { useContext, useEffect,useState } from "react";
import Item from "../components/Item"
import { AppContext } from "../context/ContextProvider";

const HomePage = () => {
  const [search, setSearch] = useState('')
  const { photos, getPhotos,loading } = useContext(AppContext);
  useEffect(() => {
    getPhotos();
  }, []);
  const filterPhotos = photos.filter(product => {
  return product.category.toLowerCase().includes(search.toLowerCase());
})
    return (
      <>
        <h1
          style={{ textAlign: "center", color: "#23120b", marginTop: "2.5rem" }}
        >
          Enjoy Top Products Of 2021{" "}
        </h1>
        <div style={{ textAlign: "center",border:'2px solid grey',width:'17rem',margin:'auto',borderRadius:'10px',padding:'10px 0px',height:'2.5rem' }}>
         
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            fill="currentColor"
            className="bi bi-search"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
          </svg>

          <input style={{border:'none',width:'13.5rem', outline:'none' ,marginLeft:'20px' ,}}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        {loading && (
          <h2
            style={{
              textAlign: "center",
              color: "#23120b",
              marginTop: "2.5rem",
            }}
          >
            Loading Store Items...
          </h2>
        )}
        <div
          style={{
            width: "90%",
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          {filterPhotos.map((obj, i) => {
            return <Item key={i} item={obj} />;
          })}
        </div>
      </>
    );
};

export default HomePage;
