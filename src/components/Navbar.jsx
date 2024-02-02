import { Link } from "react-router-dom";

Link;
const Navbar = () => {
  return (
    <div>
      <div className="p-5 bg-blue-700">
        <div className="flex justify-between">
          <div className="text-2xl font-semibold text-white">
            Domino's Shop Location Finding App
          </div>
          <div>
            <ul className="flex  justify-end space-x-10 font-semibold ">
              <li className="bg-white p-2 rounded hover:bg-gray-800 hover:text-white">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="bg-white p-2 rounded hover:bg-gray-800 hover:text-white">
                <Link to={"/about"}>About</Link>
              </li>
              <li className="bg-white p-2 rounded hover:bg-gray-800 hover:text-white">
                <Link to={"/menu"}>GitHub</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
