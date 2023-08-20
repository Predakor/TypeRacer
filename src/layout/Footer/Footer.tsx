import ThemeSelect from "@components/ThemeSelect/ThemeSelect";
import { useGameState } from "contexts/gameState-context";
import { MdOutlineBrush } from "react-icons/md";

function Footer() {
  const [{ started, paused }] = useGameState();
  const visible = started && !paused ? "opacity-0" : "";
  return (
    <footer
      className={`footer p-4 ${visible} transition-opacity duration-1000`}
    >
      <section className="grid-flow-col" aria-label="Links">
        <Link link="mailto:patrykbusko@gmail.com">@ Contact</Link>
        <Link link="https://github.com/Predakor/TypeRacer">{"</> github"}</Link>
        <Link link="https://github.io/Predakor/">My page</Link>
      </section>
      <div className="grid-flow-col justify-self-end">
        <label className="flex items-center">
          <MdOutlineBrush />
          <ThemeSelect />
        </label>
      </div>
    </footer>
  );
}

function Link({ link, children }: { link: string; children: string }) {
  return (
    <a
      href={link}
      className={"duration-300 hover:text-accent-content"}
      target="_blank"
      rel="noreferrer"
    >
      {children}
    </a>
  );
}
export default Footer;
