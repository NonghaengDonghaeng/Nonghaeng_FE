export type formType = React.ChangeEvent<HTMLFormElement>;

export type inputType = React.ChangeEvent<HTMLInputElement>;

export type isClickType = {
  isClick: boolean;
  setIsClick: React.Dispatch<React.SetStateAction<boolean>>;
};

export type setIsClickType = {
  setIsClick: React.Dispatch<React.SetStateAction<boolean>>;
};
