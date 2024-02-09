import { useState } from "react";
import { Person } from "./SharedInterfaces/SharedInterfaces";
import Form from "./Components/Form";
import Table from "./Components/Table/";

function App() {
  const [person, setPerson] = useState<Person[]>([
    { id: 123, name: "JohnDoe1", score: 3456, spec: "asdf" },
    { id: 234, name: "JohnDoe2", score: 2345, spec: "sdfg" },
    { id: 345, name: "JohnDoe3", score: 1234, spec: "dfgh" },
  ]);

  return (
    <div>
      <Form />
      <Table
        items={person}
        onRemove={(id: number) => {
          setPerson(person.filter((p) => p.id !== id));
        }}
      />
    </div>
  );
}

export default App;

//{ name: "Nigel", score: 3313, spec: "MistWeaver" },
