import { useParams } from "react-router-dom";

import AccordianPage from "./AccordianPage";

const MainPage = () => {
  const { name } = useParams();

  return (
    <div>
      <div>
        <h1 className=" font-serif text-2xl text-center p-10 rounded-2xl bg-white">
          <h5>Welcome {name ? name : "Guest"}, this is About Page</h5>
        </h1>

        <div className="bg-white my-10 p-10 rounded-2xl">
          <h4 className="font-semi-bold text-2xl">FAQs</h4>
          <div className="my-5 space-y-5">
            <AccordianPage
              title="Is your Internship Free ?"
              desc="Yes, it's free of cost"
            />
            <AccordianPage
              title="How many members on our internship ?"
              desc="we have currently 18 mambers in our internship"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MainPage;
