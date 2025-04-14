import { Todo } from "@/app/page";
import { notFound } from "next/navigation";

const getTodo = async (id: string): Promise<Todo | null | undefined> => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`
  );
  const todo: Todo | undefined | null = await response.json();
  console.log("TODO\n\n\n\n\n", todo);
  if (!todo?.id) {
    return null;
  }
  return todo;
};

export async function generateMeta(
  props: Readonly<{
    params: { pages: string[] };
  }>
) {
  const todo = await getTodo(props.params.pages[0]);

  return {
    title: !todo ? "Not Found Page" : "Dynamic Roter",
    description: !todo ? "Not Found Page" : "Dynamic Roter",
  };
}

export default async function DynamicRoterPage(
  props: Readonly<{
    params: { pages: string[] };
  }>
) {
  const todo = await getTodo(props.params.pages[0]);
  console.log("___TODO", todo);

  if (!todo) {
    return notFound();
  }

  console.log("props", props);
  return (
    <div>
      <h1>title: {todo.title}</h1>
      <p>id: {todo.id}</p>
      <p>userId:{todo.userId}</p>
      <p>completed: {todo.completed.toString()}</p>
    </div>
  );
}
