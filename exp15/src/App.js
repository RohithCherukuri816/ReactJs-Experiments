import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const addTask = () => {
    if (!task) return;
    setTodos([...todos, { id: Date.now(), text: task, done: false }]);
    setTask("");
  };

  const toggleDone = (id) => {
    setTodos(todos.map((t) => (t.id === id ? { ...t, done: !t.done } : t)));
  };

  const deleteTask = (id) => setTodos(todos.filter((t) => t.id !== id));

  return (
    <div style={{ margin: "20px" }}>
      <h2>✅ ToDo App</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task..."
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <span
              style={{
                textDecoration: t.done ? "line-through" : "none",
                cursor: "pointer",
              }}
              onClick={() => toggleDone(t.id)}
            >
              {t.text}
            </span>
            <button onClick={() => deleteTask(t.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
