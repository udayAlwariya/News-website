import { useSetRecoilState } from "recoil";
// import { Get } from "./api";
// import { Get } from "./api";

import { useEffect } from "react";
import { apiData } from "./atoms";
import { Get } from "./ApiFns";

export function useApi(value){
    const setData = useSetRecoilState(apiData)
    useEffect(() => {
      const fetchData = async (value) => {
        try {
          let response = await Get(value);
          setData(response.articles)
        } catch (error) {
          console.error("Error in fetching data:", error);
        }
      };
  
      fetchData(value);
    }, [value]);
}