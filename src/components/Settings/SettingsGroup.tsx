interface Props {
  title: string;
  settings: string[];
  active: string;
  onClick: (a: any) => void;
}

function SettingsGroup({ title, settings, active, onClick }: Props) {
  return (
    <div className={""}>
      <h3 className={"text-center text-2xl font-semibold"}>{title}</h3>
      <div className={"btn-group"}>
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
    </div>
  );
}

export default SettingsGroup;
