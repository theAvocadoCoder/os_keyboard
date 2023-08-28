import {
  Dispatch,
  SetStateAction,
  ComponentState,
  useState
} from "react";
import "../styles.css";
import {
  first_row,
  second_row,
  third_row,
  num_row
} from "../keyboard_keys";
import Key from "./Key";

export interface KeyboardProps {
  setter: Dispatch<SetStateAction<string>>;
  shiftState: ComponentState;
  shiftSetter: Dispatch<SetStateAction<boolean>>;
}

export default function Keyboard(
  props: KeyboardProps
) {
  return (
    <div className="Keyboard">
      <div className="num_row keyboard_row">
        {num_row.map((key_details, index) => (
          <Key
            key={index}
            char={key_details.char}
            shiftChar={key_details.shiftChar}
            name={key_details.name}
            isMod={key_details.isMod}
            isIcon={key_details.isIcon}
            setter={props.setter}
            shiftState={props.shiftState}
            shiftSetter={props.shiftSetter}
          />
        ))}
      </div>
      <div className="first_row keyboard_row">
        {first_row.map((key_details, index) => (
          <Key
            key={index}
            char={key_details.char}
            shiftChar={key_details.shiftChar}
            name={key_details.name}
            isMod={key_details.isMod}
            isIcon={key_details.isIcon}
            setter={props.setter}
            shiftState={props.shiftState}
            shiftSetter={props.shiftSetter}
          />
        ))}
      </div>
      <div className="second_row keyboard_row">
        {second_row.map((key_details, index) => (
          <Key
            key={index}
            char={key_details.char}
            shiftChar={key_details.shiftChar}
            name={key_details.name}
            isMod={key_details.isMod}
            isIcon={key_details.isIcon}
            setter={props.setter}
            shiftState={props.shiftState}
            shiftSetter={props.shiftSetter}
          />
        ))}
      </div>
      <div className="third_row keyboard_row">
        {third_row.map((key_details, index) => (
          <Key
            key={index}
            char={key_details.char}
            shiftChar={key_details.shiftChar}
            name={key_details.name}
            isMod={key_details.isMod}
            isIcon={key_details.isIcon}
            setter={props.setter}
            shiftState={props.shiftState}
            shiftSetter={props.shiftSetter}
          />
        ))}
      </div>
      <div className="keyboard_row">
        <div>
          <Key
            char=""
            shiftChar=""
            name="spacebar"
            isMod={true}
            isIcon={false}
            setter={props.setter}
            shiftState={props.shiftState}
            shiftSetter={props.shiftSetter}
          />
        </div>
      </div>
    </div>
  );
}
