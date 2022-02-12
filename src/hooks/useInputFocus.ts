import { useEffect } from "react";

export default function useInputFocus(
  ref: React.RefObject<HTMLInputElement | HTMLTextAreaElement>
) {
  useEffect(() => {
    if (ref.current) {
      ref.current.focus();
    }
  }, [ref]);
}
