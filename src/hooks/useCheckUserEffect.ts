import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { userSelecter } from "stores/user";
import { Path } from "utils/constants";

export default function useCheckUserEffect() {
  const { userId } = useSelector(userSelecter);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) navigate(Path.Home);
  }, [userId, navigate]);
}
