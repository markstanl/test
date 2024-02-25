import React, { useState, useEffect } from "react";
import axios from "axios";

export const fetchData = async (setFinalCity) => {
  try {
    setFinalCity({
      city: "Madison",
      average_education_index: 12.77,
      crime_index: "489",
      edu_index_norm: "0.72",
      employed_percentage_norm: "0.908",
      house_median_value: 149900,
      population: 3346,
      sixteen_plus_employed_percentage: "80.7",
    });
  } catch (error) {
    console.error(error);
  }
};

const HandleJson = ({ rankingArray, setFinalCity }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
};

export default HandleJson;
