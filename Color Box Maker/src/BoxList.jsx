import Box from "./Box";
import { useState } from "react";
import NewBoxFrom from "./NewBoxForm";
import { v4 as uuid } from "uuid";

const BoxList = () => {
  const [boxes, setBoxes] = useState([]);

  const addBox = (box) => {
    let newBox = { ...box, id: uuid() };
    setBoxes((boxes) => [...boxes, newBox]);
  };

  const removeBox = (id) => {
    setBoxes(boxes.filter((box) => box.id !== id));
  };

  return (
    <div>
      <NewBoxFrom addBox={addBox} />
      <div>
        {boxes.map((box, idx) => {
          return (
            <Box
              removeBox={removeBox}
              id={box.id}
              width={box.width}
              height={box.height}
              backgroundColor={box.backgroundColor}
              data-testid={`box-${idx}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BoxList;
