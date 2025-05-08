import React from 'react';
import { LucideIcon } from 'lucide-react';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: LucideIcon;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  error,
  icon: Icon,
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
      <div className="relative">
        {Icon && (
          <Icon
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
        )}
        <input
          {...rest}
          className={`
            w-full border rounded-xl px-4 py-2 
            ${Icon ? 'pl-10' : ''} 
            ${error ? 'border-red-500' : 'border-gray-300'}
            focus:outline-none focus:ring focus:ring-primary 
            ${className}
          `}
        />
      </div>
      {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
