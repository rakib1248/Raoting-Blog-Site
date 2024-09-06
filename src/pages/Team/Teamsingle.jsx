import { useParams } from "react-router-dom";
import { Teams } from "../../Fake data/Data";

const Teamsingle = () => {
  const { id } = useParams();

  const single = Teams.find((item) => item.id == id);
  console.log(single);

  return (
    <>
      <h1 className="font-bold text-5xl text-center py-7">
        Our Team Single Page
      </h1>
      <div className="py-10">
        <div className="container mx-auto">
          <div className="teamArea">
            <div className="teamItem border shadow flex flex-col md:flex-row">
              <img
                className="w-[300px] object-cover object-top h-96"
                src={single.photo}
                alt=""
              />
              <div className="itemcontent py-4  text-black ml-6">
                <h1 className="font-bold text-4xl">{single.Name}</h1>
                <p className=" font-semibold">{single.skills}</p>
                <p className=" font-light md:w-3/4 mt-4">{single.About}</p>
                <p className="font-bold text-lg mt-4">Contact</p>
                <p className="font-semibold  mt-4">
                  Mobaile: <span className="font-bold">{single.mobile}</span>
                </p>
                <p className="font-semibold  ">
                  Mobaile: <span className="font-bold">{single.email}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Teamsingle;
