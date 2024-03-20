import { useRef } from "react";

type propsType = {
  element: any;
  moveElement: void;
};

export default function useMove() {
  const element = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const moveElement = (num: number): void => {
    element[num].current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return { element, moveElement };
}
