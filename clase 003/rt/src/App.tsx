import { useEffect } from "react";
import { useFetch } from "./hoock/useFetch";
function App() {
  const {state,fetchData} = useFetch()
  const {data,loading,error} = state
  const {info,results} = data
  console.log(results);
  
  useEffect(()=>{
    fetchData()
  },[])
  return (
  <>
  {/* {result.length >0 && result.map((character)=>(
    <p>{character}</p>
  )) } */}
  </>
  );
}

export default App;
