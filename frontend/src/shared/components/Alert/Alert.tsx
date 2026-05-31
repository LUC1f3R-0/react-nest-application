import { cn } from "../../utils/cn";

type AlertProps = {
  type: "success" | "error" | "info";
  message: string;
};

const Alert = ({ type, message }: AlertProps) => {
  const styles = {
    success: "bg-green-50 text-green-700 border-green-200",
    error: "bg-red-50 text-red-700 border-red-200",
    info: "bg-blue-50 text-blue-700 border-blue-200",
  };

  return (
    <div className={cn("rounded-md border p-3 text-sm", styles[type])}>
      {message}
    </div>
  );
};

export default Alert;
