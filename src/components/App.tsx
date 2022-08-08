import * as React from "react";
import { getHealth } from "../queries";

export default function App() {
  const { isLoading, error, data } = getHealth();

  console.log(isLoading, error, data);

  return (
    <div className="prose font-body">
      <h1 className="underline decoration-green-400">Hello there!</h1>
    </div>
  );
}
