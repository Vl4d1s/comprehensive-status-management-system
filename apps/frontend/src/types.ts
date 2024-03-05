export interface Employee {
  id: number;
  created_at: string;
  name: string;
  status: Status;
  image: string;
}

export type Status = "Working" | "On Vacation" | "Lunch Time" | "Business Trip";
