import { Check, X } from "lucide-react";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, setIsAddingTodo } from "../store/todoSlice";

type TodoFormProps = {
  onSubmit?: (text: string) => void;
  onCansel?: () => void;
  initialValue?: string;
  placeholder?: string;
};

export function TodoForm({
  onSubmit,
  onCansel,
  initialValue = "",
  placeholder = "Add a new Todo...",
}: TodoFormProps) {
  const dispatch = useDispatch();
  const [text, setText] = useState(initialValue);
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const trimmedText = text.trim();

    if (trimmedText) {
      if (onSubmit) {
        onSubmit(trimmedText);
      } else {
        dispatch(addTodo(trimmedText));
      }
      setText("");
    }
  };
  
  const handleCancel = () => {
    if (onCansel) {
      onCansel();
    } else {
      dispatch(setIsAddingTodo(false));
    }
    setText("");
  };
  
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Escape") {
      handleCancel();
    }
  };
  
  return (
    <form className="flex items-center gap-3" onSubmit={handleSubmit}>
      <div className="flex-1">
        <input
          className="w-full px-4 py-3 border border-gray-400 rounded-lg
          focus:outline-none focus:ring-2 focus:ring-gray-800 focus:border-transparent
          transition-all duration-200 bg-white
          backdrop-blur-sm text-gray-800 placeholder-gray-600"
          maxLength={500}
          placeholder={placeholder}
          ref={inputRef}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
          onKeyDown={handleKeyDown}
        />
      </div>
      <div className="flex items-center gap-2">
        <button
          type="submit"
          className="flex items-center justify-center w-10 h-10
          bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed
          text-white rounded-lg transition-colors duration-200"
          title="Save todo"
        >
          <Check size={18} />
        </button>
        <button
          type="button"
          className="flex items-center justify-center w-10 h-10
          bg-gray-600 hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed
          text-white rounded-lg transition-colors duration-200"
          title="Delete todo"
          onClick={handleCancel}
        >
          <X size={18} />
        </button>
      </div>
    </form>
  );
}
