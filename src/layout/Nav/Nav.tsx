import { PropsWithChildren } from "preact/compat";

interface Props extends PropsWithChildren {
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
