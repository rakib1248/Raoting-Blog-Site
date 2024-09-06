import Blogs from "../../Fake data/Data";
import {  useParams } from "react-router-dom";

const Singleblog = () => {
  const { id } = useParams();

  const bolog = Blogs.find((item) => item.id == id);

  return (
    <>
      <div className="container mx-auto flex flex-col gap-3">
        <div className="">
          <h1 className="font-bold text-5xl text-center py-7">
            Blog Single Page
          </h1>

          <div className="shadow p-4 rounded mb-4 flex flex-col gap-3">
            <div>
              <h1 className="font-bold text-4xl mb-3">{bolog.title}</h1>
              <img
                className="w-[450px] h-[400px] object-cover rounded-sm"
                src={bolog.photo}
                alt=""
              />
            </div>
            <div>
              <p className="md:w-2/4 mt-2 font-light">{bolog.dec}</p>
              <p className="  mt-5 md:w-3/4 font-light">{bolog.longdec}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Singleblog;
