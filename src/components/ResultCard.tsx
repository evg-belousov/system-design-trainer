'use client';

interface ResultCardProps {
  correct: boolean;
  explanation: string;
  onNext: () => void;
  aiFeedback?: string | null;
}

export function ResultCard({ correct, explanation, onNext, aiFeedback }: ResultCardProps) {
  return (
    <div className={`mt-6 p-6 rounded-lg border ${correct ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}>
      <h3 className={`text-lg font-semibold mb-3 ${correct ? 'text-green-800' : 'text-red-800'}`}>
        {correct ? 'Правильно!' : 'Неправильно'}
      </h3>
      <p className="text-gray-700 mb-4">{explanation}</p>

      {aiFeedback && (
        <div className="mt-4 p-4 bg-white rounded border border-gray-200">
          <h4 className="text-sm font-semibold text-gray-600 mb-2">Оценка AI:</h4>
          <p className="text-gray-700">{aiFeedback}</p>
        </div>
      )}

      <button
        className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        onClick={onNext}
      >
        Далее
      </button>
    </div>
  );
}
