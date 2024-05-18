import { RouterProvider } from "react-router-dom";
import { authRouter } from "./router/authRouter";
import { useSelector } from "react-redux";

function App() {
  const loader = useSelector((state) => state?.root?.loader);
  return loader ? <div style={{
    height:'vh',
    width:'100%',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
  }}>
    <h3>Loading...</h3>

  </div> : <RouterProvider router={authRouter} />;
}

export default App;
