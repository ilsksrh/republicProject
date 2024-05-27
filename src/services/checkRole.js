import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../services/auth_service";

export const CheckMod = () => {
  const navigate = useNavigate();

  return () => {
    const user = getCurrentUser();
    if (!user || !user.roles.includes("ROLE_MODERATOR")) {
      navigate("/");
    }
  };
};

export const CheckAdmin = () => {
  const navigate = useNavigate();

  return () => {
    const user = getCurrentUser();
    if (!user || !user.roles.includes("ROLE_ADMIN")) {
      navigate("/");
    }
  };
};
