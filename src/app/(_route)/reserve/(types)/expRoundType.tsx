export type expRoundType = {
  round_id: number;
  start_time: string;
  end_time: string;
  remain_participant: number;
};

export type setExpRoundType = React.Dispatch<
  React.SetStateAction<expRoundType | undefined>
>;

export type expRoundListType = {
  experience_id: number;
  check_date: string;
  num_of_round: number;
  content: expRoundType[];
};
