import React from "react";

const Info = () => {
  return (
    <div className=" mx-20">
      <hr className="mb-5" />
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-5">
        <div className="flex">
          <div className="m-4 mr-6">
            <img
              className="w-[200px]"
              src="https://images.ctfassets.net/rz1oowkt5gyp/2ozLp25HsHeANpiNqAwzGI/d60a017d2f214c28f774b35d03499782/tag.svg"
              alt=""
            />
          </div>

          <div>
            <h1 className="text-2xl font-bold mb-3">See ProMan pricing</h1>
            <p className="text-justify">
              Whether you’re a team of 2 or 2,000, ProMan can be customized for
              your organization. Explore which option is best for you
            </p>

            <button className="bg-blue-600 text-white py-3 mt-5 px-5 rounded">Compare Pricing</button>
          </div>

        </div>
        <div className="flex">
          <div className="m-4 mr-6">
            <img
              className="w-[200px]"
              src="https://images.ctfassets.net/rz1oowkt5gyp/6rRWTcHzPKupQ3ZDqBaxu6/aecd045f4b31a92288a85bdb4a9dfe2c/compass.svg"
              alt=""
            />
          </div>

          <div>
            <h1 className="text-2xl font-bold mb-3">What is Proman?</h1>
            <p className="text-justify">
              Proman is the visual tool that empowers your team to manage any type of project, workflow, or task tracking.
            </p>

            <button className="bg-blue-600 text-white py-3 mt-5 px-5 rounded">Tour ProMan</button>
          </div>

        </div>
        <div className="flex">
          <div className="m-4 mr-6">
            <img
              className="w-[200px]"
              src="https://images.ctfassets.net/rz1oowkt5gyp/5AE4nXLOennRxmmUMcgMLM/747e96bdd16cf4113e4ef867bd85fd29/solutions.svg"
              alt=""
            />
          </div>

          <div>
            <h1 className="text-2xl font-bold mb-3">Discover Proman Enterprise</h1>
            <p className="text-justify">
              The productivity tool teams love, paired with the features and security needed for scale.
            </p>

            <button className="bg-blue-600 text-white py-3 mt-5 px-5 rounded">Learn More</button>
          </div>

        </div>
      </div>
      <hr className="mt-5" />
    </div>
  );
};

export default Info;
