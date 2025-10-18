import { type FC } from 'react';
import { AlertCircle } from 'lucide-react';

interface ErrorMessageProps {
  title?: string;
  message?: string;
  retry?: () => void;
}

export const ErrorMessage: FC<ErrorMessageProps> = ({
  title = 'Error',
  message = 'An unexpected error occurred. Please try again.',
  retry,
}) => {
  return (
    <div className="rounded-lg border border-red-200 bg-red-50 dark:border-red-800 dark:bg-red-900/20 p-4">
      <div className="flex items-start gap-3">
        <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400 mt-0.5" />
        <div className="flex-1">
          <h3 className="font-semibold text-red-900 dark:text-red-100">{title}</h3>
          <p className="text-sm text-red-700 dark:text-red-300 mt-1">{message}</p>
          {retry && (
            <button
              onClick={retry}
              className="mt-3 text-sm font-medium text-red-600 dark:text-red-400 hover:underline"
            >
              Try again
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
