import db from "#db/client";
import { createEmployee } from "./queries/employees.js";

await db.connect();
await seedEmployees();
await db.end();
console.log("🌱 Database seeded.");

export async function seedEmployees() {
  await createEmployee({
    name: "Alice Johnson",
    birthday: "1985-04-12",
    salary: 72000,
  });

  await createEmployee({
    name: "Marcus Lee",
    birthday: "1990-09-22",
    salary: 68000,
  });

  await createEmployee({
    name: "Sofia Ramirez",
    birthday: "1988-01-30",
    salary: 75000,
  });

  await createEmployee({
    name: "Daniel Kim",
    birthday: "1995-06-14",
    salary: 64000,
  });

  await createEmployee({
    name: "Priya Patel",
    birthday: "1983-11-03",
    salary: 81000,
  });

  await createEmployee({
    name: "Ethan Brooks",
    birthday: "1992-02-19",
    salary: 70000,
  });

  await createEmployee({
    name: "Jasmine Carter",
    birthday: "1987-08-09",
    salary: 69000,
  });

  await createEmployee({
    name: "Omar Hassan",
    birthday: "1993-12-25",
    salary: 66000,
  });

  await createEmployee({
    name: "Lily Chen",
    birthday: "1991-03-05",
    salary: 73000,
  });

  await createEmployee({
    name: "Noah Thompson",
    birthday: "1989-07-17",
    salary: 76000,
  });
}
