export interface CardProps { 

  colorValue: string;
}

export interface ColorData { 

  id: string;
  colorValue: string;
}

export interface ButtonProps {
  type: string; 
  text: string;
  onClick?: () => void;
}

export interface InputFieldProps<T> {
  value: T;
  onChange: (newValue: T) => void;
  labelText: string;
  type?: string;
  placeholder?: string;
  validation?: React.InputHTMLAttributes<HTMLInputElement>; // nuevo
}
