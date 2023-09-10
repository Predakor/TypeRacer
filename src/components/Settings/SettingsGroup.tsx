interface Props {
  title: string;
  settings: string[];
  active: string[];
  onClick: (a: any) => void;
}

function SettingsGroup({ title, settings, active, onClick }: Props) {
  return (
    <div className={"grid gap-2"}>
      <h3 className={"text-center text-2xl font-bold"}>{title}</h3>
      <div className={"join gap-2"}>
        {settings.map((setting) => {
          const settingActive = active.includes(setting);
          const activeClass = settingActive ? "btn-primary" : "btn-base";
          const clickHandler = () => onClick(setting);
          return (
            <button className={`btn ${activeClass}`} onClick={clickHandler}>
              {setting}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default SettingsGroup;
