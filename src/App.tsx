import { useState } from "react";
import { Item } from "./SharedInterfaces/SharedInterfaces";
import { FieldValues } from "react-hook-form";
import AddItemForm from "./Components/AddItemForm";
import Table from "./Components/Table";
import CatagoryFilter from "./Components/FilterForm";

function App() {
  const [filterCatagory, setFilterCatagory] = useState<string>("Any");
  const [visibleItems, setVisibleItems] = useState<Item[]>([]);
  const [hiddenItems, setHiddenItems] = useState<Item[]>([]);

  return (
    <div>
      <AddItemForm
        onSubmit={(data: FieldValues) => {
          if (filterCatagory === "Any") {
            setVisibleItems([
              ...visibleItems,
              {
                id: visibleItems.length + hiddenItems.length + 1,
                name: data.item,
                amount: data.amount,
                catagory: data.catagory,
              },
            ]);
          } else if (data.catagory == filterCatagory) {
            setVisibleItems([
              ...visibleItems,
              {
                id: visibleItems.length + hiddenItems.length + 1,
                name: data.item,
                amount: data.amount,
                catagory: data.catagory,
              },
            ]);
          } else {
            setHiddenItems([
              ...hiddenItems,
              {
                id: visibleItems.length + hiddenItems.length + 1,
                name: data.item,
                amount: data.amount,
                catagory: data.catagory,
              },
            ]);
          }
        }}
      />
      <CatagoryFilter
        onChangeFilter={(value) => {
          setFilterCatagory(value);

          if (value === "All") {
            setVisibleItems([...visibleItems, ...hiddenItems]);
            setHiddenItems([]);
          } else {
            const allItems = [...visibleItems, ...hiddenItems];

            const filteredItems = allItems.filter(
              (item) => item.catagory === value
            );

            setVisibleItems(filteredItems);

            const nonMatchingItems = allItems.filter(
              (item) => item.catagory !== value
            );
            setHiddenItems(nonMatchingItems);
          }
        }}
      />
      <Table
        items={visibleItems}
        onRemove={(id: number) => {
          setVisibleItems(visibleItems.filter((p) => p.id !== id));
        }}
      />
    </div>
  );
}

export default App;
