import { Link, useParams, useLoaderData } from "react-router-dom";
import './index.css'


export default function GoodItem() {
  const good = useLoaderData();
  // const imagePath = `../images/${good.image}`;

  
  const IMG = (imgName) => {
    return require(`../images/${imgName}`);
  }

  return (
    <div className=" flex items-center justify-center">
      <div className=" rounded-lg shadow-md p-8">
        <h1 className="text-3xl font-normal"> {good.name}</h1>
        <h1 className="text-lg font-normal">Price: {good.price}</h1>
        <h1 className="text-lg font-normal">City: {good.city}</h1>
        <img className="mt-4" src={IMG(good.image)} alt="Good Image" style={{ maxWidth: "300px" }} />
        <button className="bg-indira py-2 px-4 rounded-lg mt-4"><Link to="/goods">Close</Link></button>
      </div>
    </div>
  );
}
