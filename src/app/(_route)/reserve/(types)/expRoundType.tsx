export type expRoundType = {
  experience_id: number;
  check_date: string;
  num_of_round: number;
  content: {
    round_id: number;
    start_time: string;
    end_time: string;
    remain_participant: number;
  }[];
};
