import ThemeSelect from "@components/ThemeSelect/ThemeSelect";

function ThemeSettings() {
  const changeColor = (color: string, value: string) => {
    const target = document.querySelector(":root") as HTMLElement;
    target.style.setProperty(`--${color}`, value);
  };

  return (
    <section className={"md:col-start-2 md:row-start-2 md:row-end-4"}>
      <h3 className={"text-xl font-semibold"}>Predefined Themes</h3>
      <ThemeSelect />
      <div className={"divider"}>OR</div>
      <h3 className={"text-xl font-semibold"}>Custom theme</h3>
      <div className={"flex flex-col gap-2"}>
        <label className={"flex justify-between"}>
          Primary
          <input
            onChange={(e) => changeColor("p", e.currentTarget.value)}
            type="color"
          />
        </label>
        <label className={"flex justify-between"}>
          Secondary
          <input
            type="color"
            onChange={(e) => changeColor("s", e.currentTarget.value)}
          />
        </label>
        <label className={"flex justify-between"}>
          Accent
          <input
            type="color"
            onChange={(e) => changeColor("a", e.currentTarget.value)}
          />
        </label>
        <label className={"flex justify-between"}>
          Base
          <input
            type="color"
            onChange={(e) => changeColor("b3", e.currentTarget.value)}
          />
        </label>
        <label className={"flex justify-between"}>
          Neutral
          <input
            type="color"
            onChange={(e) => changeColor("n", e.currentTarget.value)}
          />
        </label>
      </div>
    </section>
  );
}
export default ThemeSettings;
