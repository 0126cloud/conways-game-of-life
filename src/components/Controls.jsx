import { useState } from 'react'
import { Wrapper, Button } from "../styled/Controls.styled";
import Popup from "./Popup";
import Setting from './Setting';

const Controls = props => {
  const { resetGrid, setRunning, running, runOnce, 
    theme, gridConf, setGridConf, initConf, setTheme } = props
  const [popupActive, setPopupActive] = useState(false)

  return (
    <Wrapper>
      <Button onClick={() => setRunning(!running)} active={running}>{running ? 'Stop' : 'Start'}</Button>
      <Button onClick={() => resetGrid(true)}>Random</Button>
      <Button onClick={() => resetGrid()}>Clear</Button>
      <Button onClick={() => runOnce()}>Run once</Button>
      <Popup 
        active={popupActive}
        theme={theme}
        onClose={() => setPopupActive(false)}
        content={
          <Setting 
            values={gridConf} 
            setValues={setGridConf} 
            initConf={initConf} 
            setTheme={setTheme}
            theme={theme}
          />
        }
      >
        <Button 
          onClick={() => {
            if (!popupActive) setRunning(false)
            setPopupActive(!popupActive)
          }}
          active={popupActive}
        >
          Setting
        </Button>
      </Popup>
    </Wrapper>
  );
};

export default Controls;
