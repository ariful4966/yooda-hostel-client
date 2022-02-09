import { useState } from "react";

export function useData(data) {
  const [tab, setTab] = useState("food");

 

  return [tab, setTab]
}
