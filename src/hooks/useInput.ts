import { useCallback, useState } from "react";

export default function useInput(initialValue: string) {
  const [value, setValue] = useState(initialValue);

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { nativeEvent } = e;
      if (nativeEvent instanceof InputEvent) {
        if (nativeEvent.inputType === "insertLineBreak") return;
      }
      setValue(e.target.value);
    },
    []
  );

  return [value, onChange, setValue] as [
    string,
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    typeof setValue
  ];
}
