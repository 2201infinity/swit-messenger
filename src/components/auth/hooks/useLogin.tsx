import useInput from "hooks/useInput";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "stores/user";
import { DEFAULT_PROFILE_IMAGE, Path } from "utils/constants";

export default function useLogin() {
  const [name, onChangeName] = useInput("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (name.trim().length === 0) {
      alert("이름을 입력해주세요");
      return;
    }
    const body = {
      userName: name,
      userId: Math.random(),
      profileImage: DEFAULT_PROFILE_IMAGE,
    };
    dispatch(setUser(body));
    navigate(Path.Chat);
  };

  return {
    onChangeName,
    onLogin,
    name,
  };
}
