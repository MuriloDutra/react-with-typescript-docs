interface Item {
  id: number;
}

interface DataGridProps<Type> {
  items: Type[];
}

export default function DataGrid<Type extends Item>({
  items,
}: DataGridProps<Type>) {
  return (
    <>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{JSON.stringify(item)}</li>
        ))}
      </ul>
    </>
  );
}
