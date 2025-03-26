import { beforeEach, describe, expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import Persons from "../src/components/Persons";

describe("Persons component", () => {
  console.log(Persons);
  let container;
  const persons = [
    {
      id: 1,
      name: "A-Person",
      number: "123-4567",
    },
    {
      id: 2,
      name: "B-Person",
      number: "555-5555",
    },
  ];
  const filter = null;
  const handlePersonDelete = vi.fn();

  beforeEach(() => {
    handlePersonDelete.mockClear();

    container = render(
      <Persons
        persons={persons}
        handlePersonDelete={handlePersonDelete}
        filter={filter}
      />
    ).container;
  });

  test("should render persons", async () => {
    const firstPersonName = screen.getByText(persons[0].name);
    expect(firstPersonName).toBeDefined();
  });
});
