import NewsContext from "./newsContext";
import { useState } from "react";

const NewsState = (props) => {
    const [country, setcountry] = useState({value:'Us'});
    const handleChange=(event)=> {
        setcountry({value: event.target.value});
      }
   
  
  return (
      <NewsContext.Provider value={{country,handleChange }}>
    {props.children}
  </NewsContext.Provider>
)
}


export default NewsState;