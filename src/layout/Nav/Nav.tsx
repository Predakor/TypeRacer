import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  ariaLabel: string;
  className?: string;
}
function Nav({ children, ariaLabel, className = "" }: Props) {
  return (
    <nav className={`navbar ${className}`} aria-label={ariaLabel}>
      {children}
    </nav>
  );
}
export default Nav;
