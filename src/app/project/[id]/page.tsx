const page = () => {
  return (
    <>
      <div className="max-w-4xl mx-auto">
        <div className=" overflow-hidden rounded shadow-sm ">
          <div className="flex flex-col pt-5 lg:flex-row sm:mx-auto">
            <div className=" lg:w-2/5 h-full px-2 py-2 detail-img">
              <img
                src={""}
                alt="book cover"
                className="object-cover w-full  lg:h-full "
              />
            </div>
            <div className=" px-8 lg:pt-0 pt-8 lg:w-3/5">
              <p className="font-semibold text-3xl ">{""}</p>{" "}
              <p className=" text-xl pt-4">
                Features: <br />
              </p>
              {/* <ul className="list-disc px-4 font-Poppins sm:text-sm text-xs !leading-7">
                {selectProject?.featues.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul> */}
              <div className="flex gap-3 my-5">
                <a
                  href={""}
                  target="_blank"
                  className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                >
                  Live Site
                </a>
                <a
                  href={""}
                  target="_blank"
                  className="text-cyan-600 bg-gray-800 px-2 py-1 inline-block"
                >
                  Github-Client
                </a>
                <a
                  href={""}
                  target="_blank"
                  className="text-cyan-600 bg-gray-800 px-1 py-1 inline-block"
                >
                  Github-Server
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        <button className="border py-1 px-3 font-semibold text-black bg-white">
          Close
        </button>
      </div>
    </>
  );
};

export default page;
