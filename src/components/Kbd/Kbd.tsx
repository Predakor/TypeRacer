import { ReactNode } from "preact/compat";

interface Props {
  children: ReactNode;
  className?: string;
}

function Kbd({ children, className }: Props) {
  return <span className={`kbd ${className ?? ""}`}>{children}</span>;
}

export default Kbd;
