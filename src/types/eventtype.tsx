export type formType = React.ChangeEvent<HTMLFormElement>;

export type inputType = React.ChangeEvent<HTMLInputElement>;

export type clickType = {
  isClick: boolean;
  setIsClick: React.Dispatch<React.SetStateAction<boolean>>;
};

export type isClickType = {
  isClick: boolean;
};

export type setIsClickType = {
  setIsClick: React.Dispatch<React.SetStateAction<boolean>>;
};

export type setBooleanType = React.Dispatch<React.SetStateAction<boolean>>;

export type setAnyType = React.Dispatch<React.SetStateAction<any>>;
