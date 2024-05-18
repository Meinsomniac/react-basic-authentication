import { useCallback } from "react";
import { initialize } from "../../redux/store/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteCookie } from "../../utils/cookie";

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const handleLogout = useCallback(() => {
    deleteCookie('token')
    dispatch(initialize(false));
    navigate("/sign-in", { replace: true });
  }, [navigate,dispatch]);
  
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection:'column',
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h3>Welcome user</h3>
      </div>
      <div>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}
