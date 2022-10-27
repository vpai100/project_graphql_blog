/* eslint-disable quotes */
import React, { useState, useEffect } from "react";
import Link from "next/link";

import { getCategories } from "../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="pb-8 flex flex-col text-center content-center items-center space-y-5">
      <h3 className="text-xl text-center mb-8 font-semibold py-8">
        Categories
      </h3>
      <div className="grid gird-rows-auto gird-auto-flow grid-auto-col grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-y-4 gap-x-4">
        {categories.map((category, index) => (
          <Link key={index} href={`/category/${category.slug}`}>
            <span className="text-md py-2 leading-6 px-4 text-center border-black rounded-3xl border-2">
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Categories;
