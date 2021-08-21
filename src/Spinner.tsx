import { styled, keyframes } from "../stitches.config";

const spinner = keyframes({
  to: {
    transform: "rotate(360deg)",
  },
});

export const Spinner = styled("div", {
  dispaly: "inline-block",
  width: "10px",
  height: "10px",
  borderWidth: 2,
  borderStyle: "solid",
  borderColor: "white",
  borderRadius: "$radii$round",
  animation: `${spinner}  .6s linear infinite`,
  variants: {
    color: {
      gray: {
        borderTopColor: "$gray8",
      },
      blue: {
        borderTopColor: "$blue8",
      },
      red: {
        borderTopColor: "$red8",
      },
      green: {
        borderTopColor: "$green8",
      },
      purple: {
        borderTopColor: "$purple8",
      },
    },
    size: {
      "1": {
        size: "$2",
        height: "$2",
      },
      "2": {
        width: "$4",
        height: "$4",
      },
      "3": {
        width: "$6",
        height: "$6",
      },
      "4": {
        width: "$8",
        height: "$8",
      },
    },
    thickness: {
      "1": {
        borderWidth: 2,
      },
      "2": {
        borderWidth: 4,
      },
      "3": {
        borderWidth: 6,
      },
      "4": {
        borderWidth: 8,
      },
    },
  },
});
