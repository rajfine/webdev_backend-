import { useForm } from "react-hook-form";
import { axiosInstance } from "../config/Axiosinstance";
import { useDispatch } from "react-redux";
import { setUser } from "../state/auth.slice";

export let useAuth = () => {
  let dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onLogin = async (data) => {
    try {
      const response = await axiosInstance.post("/api/auth/login", data);
      console.log("response from login", response);
      dispatch(setUser(response.data.user));
    } catch (err) {
      console.log("error in login", err);
    }
  };
  const onRegister = async (data) => {
    try {
      const response = await axiosInstance.post("/api/auth/register", data);
      console.log("response from register", response);
    } catch (err) {
      console.log("error in register", err);
    }
  };

  

  return {
    register,
    errors,
    handleSubmit,
    onLogin,
    onRegister,
  };
};
