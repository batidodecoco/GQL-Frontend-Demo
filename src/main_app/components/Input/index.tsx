import { ReactElement } from "react";

interface InputProps {
  label: string;
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
}

export default function Input(props: InputProps): ReactElement {
  const { label, value, onChange, placeholder } = props;

  return (
    <div className="my-1">
      <label className="text-sm">{label}</label>
      <input 
        className="border border-gray-300 py-2 px-4 w-full"
        value={value} 
        onChange={e => onChange(e.target.value)}
        placeholder={placeholder}
      />
    </div>
  )
}