import { useEffect, useState } from "react";

const Header = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const fetchedPost = await fetch(
        "https://api.dominos.co.in/locator-service/ve2/cities/CHENNAI/stores"
      );

      const postJson = await fetchedPost.json();
      console.log(postJson);
      console.log(postJson.data);
      setPosts(postJson.data);
    };
    fetchPost();
  }, []);
  const mapMethod = posts.map((map) => {
    return (
      <div
        className="bg-white p-5 rounded flex items-center space-x-10 mb-5"
        key={map.id}
      >
        <img
          src="https://www.dominos.com.pk/static/media/domino-logo.0eae8ba75d52baeba5a8.png"
          alt="React Js Logo"
          className="w-48 rounded bg-green-200"
        />
        <div className="space-y-4 bg-gray-200 p-5 rounded-3xl">
          <h1 className="text-2xl font-semibold text-green-600 ">{map.name}</h1>
          <h1>{map.address}</h1>
          <div className="flex space-x-3 items-center">
            <img
              src="https://cdn-icons-png.flaticon.com/256/5585/5585856.png"
              alt="Phone-Number"
              className="w-8"
            />
            <a
              href={`tel:${map.phone}`}
              className="text-blue-800 font-semibold"
            >
              {map.phone}
            </a>
          </div>
          <h1 className="text-gray-800 font-semibold">CITY : {map.city}</h1>
          <h1 className="text-red-800 font-serif">
            PostalCode : {map.postalCode}
          </h1>
        </div>
      </div>
    );
  });

  return <div className=" bg-green-100">{mapMethod}</div>;
};
export default Header;
