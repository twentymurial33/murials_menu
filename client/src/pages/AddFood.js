import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function AddFood() {
  return (
    <div className>
      <div className>
        <div>
          <h2>Recipes 🥗🥘🍱🍛</h2>
        </div>
        <div>
          <button
            className="btn"
            style={{
              paddingLeft: "15px",
              paddingRight: "15px",
              fontWeight: "500",
            }}
          >
            Add Food
          </button>
        </div>
      </div>
      <div className></div>
    </div>
  );
}

// export async function getServerSideProps() {
//   const allFoods = await prisma.food.findMany();
//   return {
//     props: {
//       foods: allFoods,
//     },
//   };
// }

export default AddFood;
