import { EntryStatusType } from "../interfaces";

interface SeedData {
  entries: SeedEntry[];
}

interface SeedEntry {
  description: string;
  status: string;
  createdAt: number;
}

export const seedData: SeedData = {
  entries: [
    {
      description:
        "Laboris ex ipsum velit magna duis qui magna nulla sunt voluptate tempor laborum velit magna.",
      status: EntryStatusType.pending,
      createdAt: Date.now(),
    },
    {
      description: "Adipisicing adipisicing ex aliquip nostrud non.",
      status: EntryStatusType.inProgress,
      createdAt: Date.now() - 1000000,
    },
    {
      description:
        "Incididunt ex ut nostrud ullamco sunt occaecat veniam occaecat do consequat. ",
      status: EntryStatusType.finished,
      createdAt: Date.now() - 100000,
    },
  ],
};
