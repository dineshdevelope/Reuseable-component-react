import { useParams } from "react-router-dom";

const MainPage = () => {
  const { name } = useParams();
  console.log(name);
  return (
    <div>
      <div>
        <h1 className="bg-blue-200 font-serif text-2xl text-center p-1">
          Welcome to the Dominoids webshop!
        </h1>
        <img
          src="https://www.dominoids-shop.com/media/wysiwyg/Dominos/pizza_bannerr2.jpg"
          alt=""
        />
      </div>
    </div>
  );
};
export default MainPage;
