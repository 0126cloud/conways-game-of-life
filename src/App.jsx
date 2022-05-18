import { useEffect, useRef, useState } from 'react'
import Controls from './components/Controls'
import Grid from './components/Grid'
import { AppWrapper, Flex } from './styled/App.styled'

const initConf = { rows: 50, cols: 50 } 
const initTheme = 'dark'
const map = [
  [0, -1],
  [0, 1],
  [1, -1],
  [1, 1],
  [-1, -1],
  [-1, 1],
  [1, 0],
  [-1, 0],
]

function App() {
  const [grid, setGrid] = useState()
  const [gridConf, setGridConf] = useState(initConf)
  const [running, setRunning] = useState(false)
  const [theme, setTheme] = useState(initTheme)

  const gridRef = useRef()

  const formatGrid = (random, func = () => Math.random() > .7 ? 1 : 0) => (
    Array.from(Array(gridConf.rows)).map(() => (
      Array.from(Array(gridConf.cols)).map(() => random ? func() : 0)
    ))
  )

  const resetGrid = (random, func) => {
    setRunning(false)
    setGrid(formatGrid(random, func))
  }

  const toggleCell = (rIndex, cIndex) => {
    const clone = JSON.parse(JSON.stringify(grid)) 
    const v = clone[rIndex][cIndex]
    clone[rIndex][cIndex] = v ? 0 : 1
    setGrid(clone)
  }

  const runOnce = () => {
    let count = 0
    const oldGrid = gridRef.current
    const clone = JSON.parse(JSON.stringify(oldGrid))
    for(let i = 0; i < gridConf.rows; i++) {
      for(let j = 0; j < gridConf.cols; j++) {
        const v = oldGrid[i][j]
        let alive = 0
        map.forEach(pos => {
          const x = pos[0] + j
          const y = pos[1] + i
          if (x < 0 || y < 0 || x >= gridConf.cols || y >= gridConf.rows ) return 
          alive += oldGrid[y][x]
        })
        if (v && (alive < 2 || alive > 3)) clone[i][j] = 0
        else if (!v && alive === 3 ) clone[i][j] = 1
        else count += 1
      }
    }

    if (count >= gridConf.rows * gridConf.cols) setRunning(false)
    setGrid(clone)
  }

  useEffect(() => {
    resetGrid()
  }, [gridConf])

  useEffect(() => {
    gridRef.current = grid
  }, [grid])

  useEffect(() => {
    const interval = running ? setInterval(() => runOnce(), 100) : null

    return () => interval && clearInterval(interval)
  }, [running])

  return (
    <AppWrapper theme={theme}>
      <Flex>
        <Grid grid={grid} theme={theme} toggleCell={toggleCell} />
        <Controls 
          resetGrid={resetGrid} 
          setRunning={setRunning} 
          runOnce={runOnce}
          running={running}
          theme={theme}
          setTheme={setTheme}
          setGridConf={setGridConf}
          gridConf={gridConf}
          initConf={initConf}
          initTheme={initTheme}
        />
      </Flex>
    </AppWrapper>
  )
}

export default App
