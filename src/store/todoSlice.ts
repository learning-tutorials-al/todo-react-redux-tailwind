import type { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import type { FilterType, Todo } from "../types/todo";

const now = () => new Date().toISOString();

interface TodosState {
  items: Todo[];
  filter: FilterType;
  isAddingTodo: boolean;
}

const loadTodos = (): Todo[] => {
  try {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : []
  } catch {
    return []
  }
}

const saveTodos = (todos: Todo[]) => {
  try {
    localStorage.setItem("todos", JSON.stringify(todos))
  } catch (error) {
    console.error("Failed to save todos...", error)
  }
}

const initialState: TodosState = {
  items: loadTodos(),
  filter: "all",
  isAddingTodo: false
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setIsAddingTodo: (state, action: PayloadAction<boolean>) => {
      state.isAddingTodo = action.payload
    },
    
    addTodo: (state, action: PayloadAction<string>) => {
      const newTodo = {
        id: crypto.randomUUID(),
        text: action.payload.trim(),
        completed: false,
        createdAt: now(),
        updatedAt: now(),
      };
      state.items.unshift(newTodo);
      state.isAddingTodo = false;
      saveTodos(state.items);
    },
    
    toggleTodo: (state, action: PayloadAction<string>) => {
      const todo = state.items.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
        todo.updatedAt = now();
        saveTodos(state.items);
      }
    },
    
    deleteTodo: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((todo) => todo.id !== action.payload);
      saveTodos(state.items);
    },
    
    updateTodo: (state, action: PayloadAction<{ id: string; updates: Partial<Todo> }>) => {
      const { id, updates } = action.payload;
      const todo = state.items.find((todo) => todo.id === id);
      
      if (todo) {
        Object.assign(todo, updates, { updatedAt: now() });
      }
      saveTodos(state.items);
    },
    
    setFilter: (state, action: PayloadAction<FilterType>) => {
      state.filter = action.payload;
    },
    
    markAllComplete: (state) => {
      const hasInComplete = state.items.some((todo) => !todo.completed);
      state.items.forEach((todo) => {
        todo.completed = hasInComplete;
        todo.updatedAt = now();
      });
      saveTodos(state.items);
    },
    
    clearCompleted: (state) => {
      state.items = state.items.filter((todo) => !todo.completed);
      saveTodos(state.items);
    }
  },
});

export const {
  setIsAddingTodo,
  addTodo,
  toggleTodo,
  deleteTodo,
  updateTodo,
  setFilter,
  markAllComplete,
  clearCompleted
} = todoSlice.actions;
export default todoSlice.reducer;