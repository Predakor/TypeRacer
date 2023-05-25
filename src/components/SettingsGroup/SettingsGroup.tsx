interface Props {
  title: string;
  settings: string[];
  active: string;
  onClick: (a: any) => void;
}

function SettingsGroup({ title, settings, active, onClick }: Props) {
  return (
    <article className={""}>
      <h3 className={"text-2xl font-semibold"}>{title}</h3>
      <div className={"flex"}>
        {settings.map((setting) => {
          const activeClass = setting === active ? "btn-active" : "";
          const clickHandler = () => onClick(setting);
          return (
            <button
              className={`btn-ghost btn ${activeClass}`}
              onClick={clickHandler}
            >
              {setting}
            </button>
          );
        })}
      </div>
    </article>
  );
}

export default SettingsGroup;
