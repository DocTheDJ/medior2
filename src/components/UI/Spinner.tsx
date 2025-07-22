import { ReactElement } from 'react';

const LoadingSpinner = ({ message = 'Loading' }: { message?: string }): ReactElement => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="flex flex-col items-center space-y-4">
        <div
          className="w-12 h-12 border-4 border-blue border-t-transparent border-solid rounded-full animate-spin"
          role="status"
        >
        </div>
        <p className="text-lg text-gray">{message}</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
