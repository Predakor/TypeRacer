import ThemeSelect from "@components/ThemeSelect/ThemeSelect";
import { useGameStateContext } from "contexts/gameState-context";
import { MdOutlineBrush } from "react-icons/md";

function Footer() {
  const [{ started, paused }] = useGameStateContext();
  const visible = started && !paused ? "opacity-0" : "";
  return (
    <footer
      className={`grid p-4 md:grid-cols-2 ${visible} transition-opacity duration-1000`}
    >
      <section
        className="flex items-center justify-center gap-4 md:justify-self-start"
        aria-label="Links"
      >
        <Link link="mailto:patrykbusko@gmail.com">@ Contact</Link>
        <Link link="https://github.com/Predakor/TypeRacer">{"</> github"}</Link>
        <Link link="https://github.io/Predakor/">My page</Link>
      </section>
      <label className="hidden items-center gap-4 justify-self-end md:flex">
        <MdOutlineBrush />
        <ThemeSelect />
      </label>
    </footer>
  );
}

function Link({ link, children }: { link: string; children: string }) {
  return (
    <a
      href={link}
      className={"text-sm duration-300 hover:text-accent-content"}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
export default Footer;
