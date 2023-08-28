import "../styles.css";

import { KeyProps } from "../keyboard_keys";
import { KeyboardProps } from "./Keyboard";

export default function Key(
  props: KeyProps & KeyboardProps
) {
  function addText(char: string) {
    props.setter((state) => state + char);
  }

  function backspaceText() {
    props.setter((state: string) => {
      let arr = state.split("");
      if (arr.length > 0) arr.pop();
      return arr.length === 0 ? "" : arr.join("");
    });
  }

  function handleKeyPress() {
    if (
      !props.isMod &&
      !props.isIcon &&
      props.char
    ) {
      props.shiftState
        ? addText(props.shiftChar)
        : addText(props.char);
    } else if (props.name === "spacebar") {
      addText(" ");
    } else if (props.name === "backspace") {
      backspaceText();
    } else if (props.name === "shift") {
      props.shiftSetter((state) => !state);
    }
  }

  return (
    <div
      className={`Key ${props.name}${
        props.isMod ? " mod_key" : ""
      }`}
      onClick={handleKeyPress}
    >
      {props.isIcon ? (
        <div className={`icon_key ${props.name}`}>
          {props.shiftState
            ? props.shiftChar
            : props.char}
        </div>
      ) : props.name === "spacebar" ? (
        <div className="space_key"></div>
      ) : props.shiftState ? (
        props.shiftChar
      ) : (
        props.char
      )}
    </div>
  );
}
