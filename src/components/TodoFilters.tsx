import { CheckCircle, Clock, List } from "lucide-react";
import type { FilterType, Stats } from "../types/todo";

type TodoFiltersProps = {
  currentFilter: FilterType;
  stats: Stats;
  onFilterChange: (filter: FilterType) => void;
};

export function TodoFilters({ currentFilter, stats,  onFilterChange }: TodoFiltersProps) {
  const filters = [
    { key: "all", label: "All", icon: List, count: stats.total },
    { key: "active", label: "Active", icon: Clock, count: stats.active },
    {
      key: "completed",
      label: "Completed",
      icon: CheckCircle,
      count: stats.completed,
    }
  ] as const;
  
  return (
    <div className="flex items-center justify-center">
      <div className="inline-flex bg-gray-200 rounded-lg p-1">
        {filters.map(({ key, label, icon: Icon, count }) => {
          return (
            <button
              className={`flex items-center gap-2 px-2 py-2
                rounded-md text-sm font-medium
                transition-all duration 200
                ${currentFilter === key
                ? "bg-white text-gray-800 shadow-md"
                : "text-gray-700 hover:text-gray-800 hover:bg-gray-300"}
              `}
              type="button"
              key={key}
              onClick={() => onFilterChange(key)}
            >
              <Icon size={16} />
              <span>{label}</span>
              <span>{count}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}