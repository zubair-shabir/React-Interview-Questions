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
      <div className="h-screen">
        <h1 className="text-4xl  text-center pt-10 select-none">
          React Interview Assessment
        </h1>

        <div className=" flex justify-center gap-10 items-center mx-10 my-20 flex-wrap">
          {projects &&
            projects.map(({ name, route }) => {
              return (
                <Link
                  to={route}
                  key={route}
                  className="bg-gray-700 text-white rounded-lg p-5"
                >
                  {name}
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
}

export default App;
