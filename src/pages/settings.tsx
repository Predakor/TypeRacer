import Panel from "@layout/Section/Section";
import { Section } from "@layout/index";
import settingsContext from "@store/settings-context";
import { useContext } from "react";

function Settings() {
  const settings = useContext(settingsContext);

  return (
    <Panel>
      <h2>Settings</h2>

      <Section>
        <input type="radio" id="" />
        <div>
          <p>Mode</p>
          <button className="btn-ghost btn" onClick={() => console.log(1)}>
            Words
          </button>
          <button className="btn-ghost btn" onClick={() => console.log(1)}>
            Quotes
          </button>
          <button className="btn-ghost btn" onClick={() => console.log(1)}>
            Time
          </button>
        </div>
        <div>
          <p>Duration</p>
          <button className="btn-ghost btn" onClick={() => console.log(1)}>
            short
          </button>
          <button className="btn-ghost btn" onClick={() => console.log(1)}>
            medium
          </button>
          <button className="btn-ghost btn" onClick={() => console.log(1)}>
            long
          </button>
        </div>

        <div>
          <p>Extras</p>
          <button className="btn-ghost btn flex" onClick={() => console.log(1)}>
            punctuaction
          </button>
          <button className="btn-ghost btn" onClick={() => console.log(1)}>
            numbers
          </button>
          <button
            className="btn-ghost btn flex text-xl"
            onClick={() => console.log(1)}
          >
            upperCase
          </button>
        </div>
      </Section>

      <Section>
        <div>
          <p>Predefine thems</p>
          <select name="themes" id="">
            <option value="theme1">theme1</option>
            <option value="theme2">theme2</option>
            <option value="theme3">theme3</option>
            <option value="theme4">theme4</option>
            <option value="theme5">theme5</option>
          </select>
        </div>

        <div>
          <h3>Custom theme</h3>
          <div>
            <p>Main Color</p>
          </div>
          <div>
            <p>Secondary Color</p>
          </div>
          <div>
            <p>Accent Color</p>
          </div>
          <div>
            <p>Text Color </p>
          </div>
        </div>
      </Section>
    </Panel>
  );
}
export default Settings;
