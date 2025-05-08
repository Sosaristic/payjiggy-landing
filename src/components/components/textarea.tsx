import React from 'react';

interface TextareaFieldProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

const TextareaField: React.FC<TextareaFieldProps> = ({
  label,
  error,
  className = '',
  ...rest
}) => {
  return (
    <div className="mb-4">
      {label && (
        <label
          htmlFor={rest.name}
          className="block mb-1 text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <textarea
        {...rest}
        className={`
          w-full border rounded-xl px-4 py-2 resize-none 
          ${error ? 'border-red-500' : 'border-gray-300'}
          focus:outline-none focus:ring focus:ring-primary
          ${className}
        `}
      />
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default TextareaField;
