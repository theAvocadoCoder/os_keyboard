type Keys = KeyProps[];
export interface KeyProps {
  char: string;
  shiftChar: string;
  name: string;
  isMod: boolean;
  isIcon: boolean;
}

const num_row: Keys = [
  {
    char: "1",
    shiftChar: "!",
    name: "one",
    isMod: false,
    isIcon: false
  },
  {
    char: "2",
    shiftChar: "@",
    name: "two",
    isMod: false,
    isIcon: false
  },
  {
    char: "3",
    shiftChar: "#",
    name: "three",
    isMod: false,
    isIcon: false
  },
  {
    char: "4",
    shiftChar: "$",
    name: "four",
    isMod: false,
    isIcon: false
  },
  {
    char: "5",
    shiftChar: "%",
    name: "five",
    isMod: false,
    isIcon: false
  },
  {
    char: "6",
    shiftChar: "^",
    name: "six",
    isMod: false,
    isIcon: false
  },
  {
    char: "7",
    shiftChar: "&",
    name: "seven",
    isMod: false,
    isIcon: false
  },
  {
    char: "8",
    shiftChar: "*",
    name: "eight",
    isMod: false,
    isIcon: false
  },
  {
    char: "9",
    shiftChar: "(",
    name: "nine",
    isMod: false,
    isIcon: false
  },
  {
    char: "0",
    shiftChar: ")",
    name: "zero",
    isMod: false,
    isIcon: false
  },
  {
    char: "-",
    shiftChar: "_",
    name: "dash",
    isMod: false,
    isIcon: false
  },
  {
    char: "=",
    shiftChar: "+",
    name: "equal",
    isMod: false,
    isIcon: false
  }
];

const first_row: Keys = [
  {
    char: "tab",
    shiftChar: "TAB",
    name: "tab",
    isMod: true,
    isIcon: false
  },
  {
    char: "q",
    shiftChar: "Q",
    name: "q",
    isMod: false,
    isIcon: false
  },
  {
    char: "w",
    shiftChar: "W",
    name: "w",
    isMod: false,
    isIcon: false
  },
  {
    char: "e",
    shiftChar: "E",
    name: "e",
    isMod: false,
    isIcon: false
  },
  {
    char: "r",
    shiftChar: "R",
    name: "r",
    isMod: false,
    isIcon: false
  },
  {
    char: "t",
    shiftChar: "T",
    name: "t",
    isMod: false,
    isIcon: false
  },
  {
    char: "y",
    shiftChar: "Y",
    name: "y",
    isMod: false,
    isIcon: false
  },
  {
    char: "u",
    shiftChar: "U",
    name: "u",
    isMod: false,
    isIcon: false
  },
  {
    char: "i",
    shiftChar: "I",
    name: "i",
    isMod: false,
    isIcon: false
  },
  {
    char: "o",
    shiftChar: "O",
    name: "o",
    isMod: false,
    isIcon: false
  },
  {
    char: "p",
    shiftChar: "P",
    name: "p",
    isMod: false,
    isIcon: false
  }
];

const second_row: Keys = [
  {
    char: "a",
    shiftChar: "A",
    name: "a",
    isMod: false,
    isIcon: false
  },
  {
    char: "s",
    shiftChar: "S",
    name: "s",
    isMod: false,
    isIcon: false
  },
  {
    char: "d",
    shiftChar: "D",
    name: "d",
    isMod: false,
    isIcon: false
  },
  {
    char: "f",
    shiftChar: "F",
    name: "f",
    isMod: false,
    isIcon: false
  },
  {
    char: "g",
    shiftChar: "G",
    name: "g",
    isMod: false,
    isIcon: false
  },
  {
    char: "h",
    shiftChar: "H",
    name: "h",
    isMod: false,
    isIcon: false
  },
  {
    char: "j",
    shiftChar: "J",
    name: "j",
    isMod: false,
    isIcon: false
  },
  {
    char: "k",
    shiftChar: "K",
    name: "k",
    isMod: false,
    isIcon: false
  },
  {
    char: "l",
    shiftChar: "L",
    name: "l",
    isMod: false,
    isIcon: false
  },
  {
    char: ";",
    shiftChar: ":",
    name: ";",
    isMod: false,
    isIcon: false
  },
  {
    char: "'",
    shiftChar: '"',
    name: "'",
    isMod: false,
    isIcon: false
  }
];

const third_row: Keys = [
  {
    char: "a",
    shiftChar: "A",
    name: "shift",
    isMod: true,
    isIcon: true
  },
  {
    char: "z",
    shiftChar: "Z",
    name: "z",
    isMod: false,
    isIcon: false
  },
  {
    char: "x",
    shiftChar: "X",
    name: "x",
    isMod: false,
    isIcon: false
  },
  {
    char: "c",
    shiftChar: "C",
    name: "c",
    isMod: false,
    isIcon: false
  },
  {
    char: "v",
    shiftChar: "V",
    name: "v",
    isMod: false,
    isIcon: false
  },
  {
    char: "b",
    shiftChar: "B",
    name: "b",
    isMod: false,
    isIcon: false
  },
  {
    char: "n",
    shiftChar: "N",
    name: "n",
    isMod: false,
    isIcon: false
  },
  {
    char: "m",
    shiftChar: "M",
    name: "m",
    isMod: false,
    isIcon: false
  },
  {
    char: ",",
    shiftChar: "<",
    name: "comma",
    isMod: false,
    isIcon: false
  },
  {
    char: ".",
    shiftChar: ">",
    name: "fullstop",
    isMod: false,
    isIcon: false
  },
  {
    char: "x",
    shiftChar: "x",
    name: "backspace",
    isMod: true,
    isIcon: true
  }
];

export {
  num_row,
  first_row,
  second_row,
  third_row
};
