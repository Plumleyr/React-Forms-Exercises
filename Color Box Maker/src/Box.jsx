const Box = ({
  removeBox,
  id,
  width,
  height,
  backgroundColor,
  "data-testid": testId,
}) => {
  return (
    <div
      style={{
        width: `${width}`,
        height: `${height}`,
        backgroundColor: `${backgroundColor}`,
      }}
      data-testid={testId}
    >
      <button onClick={() => removeBox(id)}>X</button>
    </div>
  );
};

export default Box;
