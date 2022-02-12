import { useEffect, useRef } from "react";

export default function useInputFocus() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);
  return inputRef;
}
