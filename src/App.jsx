import { Link } from "react-router-dom";
import "./App.css";

function App() {
  const projects = [
    {
      name: "Pagination Assessment",
      route: "/pagination",
    },
  ];
  return (
    <>
      <h1 className="text-4xl text-white text-center mt-10">
        React Interview Assessment
      </h1>

      <div className="text-white flex justify-center gap-10 items-center mx-10 my-20 flex-wrap">
        {projects &&
          projects.map(({ name, route }) => {
            return (
              <Link
                to={route}
                key={route}
                className="bg-gray-700 rounded-lg p-5"
              >
                {name}
              </Link>
            );
          })}
      </div>
    </>
  );
}

export default App;
