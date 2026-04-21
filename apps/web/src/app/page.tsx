import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

interface Todo {
  id: string;
  name: string;
}

export default async function Page() {
  const cookieStore = await cookies()
  const supabase = createClient(cookieStore)

  const { data: todos } = await supabase.from('todos').select()

  return (
    <ul className="p-8">
      {(todos as Todo[] | null)?.map((todo) => (
        <li key={todo.id} className="list-disc ml-4 text-lg">
          {todo.name}
        </li>
      ))}
      {!todos?.length && <p>No todos found or could not connect to Supabase.</p>}
    </ul>
  )
}
