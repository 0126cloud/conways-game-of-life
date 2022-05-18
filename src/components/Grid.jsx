import { Wrapper, Row, Cell } from "../styled/Grid.styled";

const Grid = ({ grid, theme, toggleCell = () => {} }) => {

  return (
    <Wrapper theme={theme}>
      {grid?.map((row, rIndex) => (
        <Row key={`row-${rIndex}`}>
          {row.map((col, cIndex) => (
            <Cell 
              key={`cell-${rIndex}-${cIndex}`}
              value={col} 
              theme={theme} 
              onClick={() => toggleCell(rIndex, cIndex)} 
            />
          ))}
        </Row>
      ))}
    </Wrapper>
  );
};

export default Grid;
