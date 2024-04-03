import { useRef } from "react";

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
