interface TextFieldProps {
  id?: string;
  label?: string;
  type?: "text" | "date" | "time";
  error?: string;
  placeholder?: string;
}

const TextField: React.FC<TextFieldProps> = ({
  id,
  type,
  error,
  label,
  placeholder,
  ...field
}) => {
  return (
    <div className="flex flex-col flex-1">
      <label
        htmlFor="time"
        className="text-xl font-semibold text-text font-jakartaPlus"
      >
        {label}
      </label>
      <input
        type={type ?? "text"}
        placeholder={placeholder ?? ""}
        id={id}
        className="py-4 border-none rounded-lg bg-form focus:ring-0 focus:outline-none"
        {...field}
      />
      {error && <p className="text-red-600 font-jakartaPlus">{error}</p>}
    </div>
  );
};

export default TextField;
