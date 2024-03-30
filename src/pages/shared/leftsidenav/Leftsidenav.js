import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Leftsidenav = () => {
  const [categories, setCategories] = useState([]);
//   console.log(categories);
  useEffect(() => {
    fetch("http://localhost:5000/news-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);
  return (
  <div>
    <h5>LeftSideNav: {categories.length}</h5>
    {categories.map(category=><p category={category} key={category.id}>
        <Link to={`/category/${category.id}`}>{category.name}</Link>
    </p>)}
    </div>
  );
};

export default Leftsidenav;
