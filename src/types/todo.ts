export type FilterType = "all" | "active" | "completed";

export interface Todo {
  id: string;
  text: string;
  createdAt: string;
  updatedAt: string;
  completed: boolean;
}

export interface Stats {
  total: number;
  active: number;
  completed: number;
}