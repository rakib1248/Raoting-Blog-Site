import Blogs from "../../Fake data/Data";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col gap-3">
        <div className="">
          <h1 className="font-bold text-5xl text-center py-7">
            Education For Everyone Better World Knowledge
          </h1>

          {Blogs.map((item) => {
            return (
              <div key={item.id} className="shadow p-4 rounded mb-4 flex gap-3">
                <div>
                  <img
                    className="w-[250px] h-[200px] object-cover rounded-sm"
                    src={item.photo}
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="font-bold text-2xl">{item.title}</h1>
                  <p className="md:w-2/4 mt-2 font-light">{item.dec}</p>
                  <Link
                    className="mt-6 inline-block border text-lg shadow py-1 px-5"
                    to={`/blog/${item.id}`}
                  >
                    Read More
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Blog;
