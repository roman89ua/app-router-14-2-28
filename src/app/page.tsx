import Link from "next/link";
import { notFound } from "next/navigation";

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export default async function Home() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos: Todo[] | undefined | null = await response.json();

  if (!todos || todos.length === 0) {
    return notFound();
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <Link href={`/${todo.id}`}>{todo.title}</Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
