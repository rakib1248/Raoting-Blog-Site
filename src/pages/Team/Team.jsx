import { Teams } from "../../Fake data/Data";
import { Link } from "react-router-dom";

const Team = () => {
  return (
    <>
      <h1 className="font-bold text-5xl text-center py-7">Our Team Membar</h1>
      <div className="py-10">
        <div className="container mx-auto">
          <div className="teamArea  flex flex-wrap justify-center gap-2">
            {Teams.map((item) => {
              return (
                <div key={item.id} className="teamItem w-[450px] border shadow">
                  <img
                    className="w-full object-cover object-top h-96"
                    src={item.photo}
                    alt=""
                  />
                  <div className="itemcontent text-center py-4 bg-[#1bb4b9] text-white">
                    <h1 className="font-bold text-lg">{item.Name}</h1>
                    <p className="font-light">{item.skills}</p>
                    <Link
                          className="border inline-block text-lg py-2 px-8 rounded"
                          to={`/team/${item.id}`}
                        >
                          Full Details
                        </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
