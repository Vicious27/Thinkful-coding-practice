import './App.css';
import Split from "./composition/Split";
import Tooltip from "./composition/Tooltip";

const firstTooltip = (
  <Tooltip message="Tooltip message">
    ipsum
  </Tooltip>
);

const secondTooltip = (
  <Tooltip message="another tooltip">
    officiis
  </Tooltip>
)

function App() {
  return (
    <main className="App">
      <Split className="left" flexBasis="2">
        This is the content for the left `Split`. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt ex velit suscipit facere officia?
        <Tooltip message="another tooltip message">
          Necessitatibus?
        </Tooltip>
      </Split>
      <Split className="right">
        This is the content for the right `Split`. Inventore aliquid cupiditate suscipit repellat. Quaerat quis officiis quam fuga. Aliquid quo possimus id soluta aspernatur.
      </Split>
    </main>
  );
}

export default App;
