export enum EntryStatusType {
  pending = "pending",
  inProgress = "in-progress",
  finished = "finished",
}

export interface Entry {
  _id: string;
  description: string;
  createdAt: number;
  status: EntryStatusType;
}
