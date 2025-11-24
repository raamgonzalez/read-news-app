import React from "react";
import { render } from "@testing-library/react-native";
import UserCard from "../UserCard";

const baseUser = {
  firstname: "Jane",
  lastname: "Doe",
  email: "jane@example.com",
  address: { city: "Madrid" },
  company: { name: "Acme Inc." },
};

describe("UserCard", () => {
  test("Muestra nombre completo y datos", () => {
    const { getByText } = render(<UserCard user={baseUser} />);

    getByText("Jane Doe");
    getByText("jane@example.com");
    getByText("Acme Inc.");
    getByText("Madrid");
  });

  test("Usa fallback cuando falta el nombre", () => {
    const user = {
      firstname: "",
      lastname: "",
      email: "anon@example.com",
      address: {},
      company: {},
    };

    const { getByText } = render(<UserCard user={user} />);

    getByText("Usuario sin nombre");
    getByText("anon@example.com");
  });
});
