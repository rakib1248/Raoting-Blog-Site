import Blogs from "../../Fake data/Data";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Teams } from "../../Fake data/Data";

const Home = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
  };
  return (
    <>
      <div className="bg-intro-image bg-no-repeat bg-cover py-64 relative flex justify-center items-center text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-white text-center ">
          <h1 className="md:text-[90px] text-3xl">This is a Blog Site</h1>
          <p className="text-center mt-10 font-light md:w-1/2 mx-auto">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque
            natus dolor alias vero exercitationem quaerat non beatae officia,
            est iure enim sed, eum quod inventore!
          </p>

          <button className="mt-16 border py-2 px-5 text-lg rounded  ">
            Learn more
          </button>
        </div>
      </div>

      <h1 className="font-bold text-5xl text-center py-7">Our Team Membar</h1>
      <div className="py-10">
        <div className="container mx-auto">
          <div className="teamArea ">
                
                  <Slider {...settings}>
            {Teams.map((item) => {
              return (
                <div key={item.id}  className="teamItem w-[450px] border shadow">
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
                  </Slider>
                
          </div>
        </div>
      </div>

      <h1 className="font-bold text-5xl text-center py-7">this is our Blog</h1>

      <div className="container mx-auto flex flex-row flex-wrap justify-center  gap-3">
        {Blogs.map((bolog) => {
          return (
            <div
              key={bolog.id}
              className="shadow p-4 rounded mb-4 flex flex-col gap-3 w-[400px] "
            >
              <div>
                <img
                  className="w-full h-[300px] object-cover rounded-sm"
                  src={bolog.photo}
                  alt=""
                />
              </div>
              <div>
                <h1 className="font-bold text-lg mb-3">{bolog.title}</h1>
                <p className=" mt-2 font-light">{bolog.dec}</p>

                <Link
                  className="inline-block py-2 px-3 border mt-3 shadow rounded-sm text-lg"
                  to={`/blog/${bolog.id}`}
                >
                  Read More
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
