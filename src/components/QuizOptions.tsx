'use client';

interface QuizOptionsProps {
  options: string[];
  onSelect: (index: number) => void;
  disabled: boolean;
  correctIndex?: number;
  selectedIndex?: number;
}

export function QuizOptions({ options, onSelect, disabled, correctIndex, selectedIndex }: QuizOptionsProps) {
  return (
    <div className="space-y-3">
      {options.map((option, index) => {
        let className = 'w-full text-left p-4 rounded-lg border transition-colors ';

        if (disabled && correctIndex !== undefined) {
          if (index === correctIndex) {
            className += 'correct border-green-500 bg-green-50 text-green-900';
          } else if (index === selectedIndex) {
            className += 'border-red-500 bg-red-50 text-red-900';
          } else {
            className += 'border-gray-200 bg-gray-50 text-gray-500';
          }
        } else {
          className += 'border-gray-200 text-gray-900 hover:border-blue-400 hover:bg-blue-50 cursor-pointer';
        }

        return (
          <button
            key={index}
            className={className}
            onClick={() => !disabled && onSelect(index)}
            disabled={disabled}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}
