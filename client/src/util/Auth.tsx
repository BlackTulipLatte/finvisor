import axios from "axios";

const useAuth = async () => {
  const token = localStorage.getItem("jwtToken");
  let isAuthorized = false;

  try {
    const response = await axios.post("http://localhost:3000/api/v1/auth", {
      token: token,
    });
    
    if(response && response.data) {
      isAuthorized = true;
    }
    
  } catch (error) {
  }

  return isAuthorized
};

export default useAuth;
