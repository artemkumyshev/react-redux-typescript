import React, { useEffect } from "react";

// Hooks
import { useTypeSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const pages = [1, 2, 3, 4, 5];

const TodoList: React.FC = () => {
  const { todo, page, limit, loading, error } = useTypeSelector(
    (state) => state.todo
  );
  const { fetchTodo, setTodoPages } = useActions();

  useEffect(() => {
    fetchTodo(page, limit);
  }, [page]);

  if (loading) {
    return <h1>Идет загрузка...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {todo.map((t) => (
        <div key={t.id}>
          {t.id} - {t.title}
        </div>
      ))}
      <div style={{ display: "flex" }}>
        {pages.map((p) => (
          <div
            key={p}
            onClick={() => setTodoPages(p)}
            style={{
              border: p === page ? "2px solid green" : "1px solid gray",
              padding: 10,
            }}
          >
            {p}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
