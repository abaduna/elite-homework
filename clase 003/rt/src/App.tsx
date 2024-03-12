import { useEffect } from "react";
import { useFetch } from "./hoock/useFetch";
function App() {
  const {state,fetchData} = useFetch()
  const {data,loading,error} = state
  
  useEffect(()=>{
    fetchData()
  },[])
  return (
  {data?.results.length>0 &&}
  </>
  );
}

export default App;
