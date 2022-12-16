import { useState } from "react";
import Details from "./Details";

export default function EditForm() {
  const [foodItems, setFoodItems] = useState("");

  function handleChangeTask(food) {
    setFoodItems(
      foodItems.map((food) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  }

  function handleDeleteTask(foodId) {
    setFoodItems(foodItems.filter((food) => food.id !== foodId));
  }

  return (
    <>
      <h1>Edit Food Items </h1>
      <Details
        foodItems={foodItems}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}
