import "./styles.css";
import Keyboard from "./components/Keyboard";
import { ReactNode, useState } from "react";

export default function App() {
  const [typedText, setTypedText] = useState("");
  const [shiftState, toggleShiftState] = useState(
    false
  );
  return (
    <div
      className="App"
      tabIndex={0}
      onKeyDown={(e) => {
        switch (e.key) {
          case "Shift":
            toggleShiftState((state) => !state);
            return;
          case "CapsLock":
            toggleShiftState((state) => !state);
            return;
          case "Backspace":
            setTypedText((state) => {
              let arr = state.split("");
              if (arr.length > 0) arr.pop();
              return arr.length === 0
                ? ""
                : arr.join("");
            });
            return;
          default:
            if (e.key.length < 2)
              setTypedText(
                (state) => state + e.key
              );
            return;
        }
      }}
    >
      <Keyboard
        setter={setTypedText}
        shiftState={shiftState}
        shiftSetter={toggleShiftState}
      />
      <div className="text_area">
        {typedText.split("")}
      </div>
    </div>
  );
}
