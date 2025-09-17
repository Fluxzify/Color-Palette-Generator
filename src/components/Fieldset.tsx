import { InputFieldProps } from "@/types";

export default function InputField<T extends string | number>({
  value,
  onChange,
  labelText,
  type = "text",
  placeholder = "",
  validation, 
}: InputFieldProps<T> & { validation?: React.InputHTMLAttributes<HTMLInputElement> }) {
  return (
    <fieldset className="fieldset">
      <input
        type={type}
        className="input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          const val =
            type === "number" ? (Number(e.target.value) as T) : (e.target.value as T);
          onChange(val);
        }}
        {...validation} 
      />
      <p className="label">{labelText}</p>
    </fieldset>
  );
}

// Props ahora incluyen el prop validation opcional
