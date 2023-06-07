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
        "Pendiente: lorem awdada awdasdawd asd awd awd awd aw asdadasds",
      status: "pending",
      createdAt: Date.now(),
    },
    {
      description: "Progreso: lorem sbbsdbsdbs sdbsbd sbd sdb sbdbsd adasd",
      status: "in-progress",
      createdAt: Date.now() - 1000000,
    },
    {
      description: "Terminado: lorem csdsdbsd csdbsbcbsc scscscsbsbc",
      status: "finished",
      createdAt: Date.now() - 100000,
    },
  ],
};
