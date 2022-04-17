import React from "react";

const Gallery = () => {
  return (
    <div className="row container-fluid ">
      <h1 className="text-center fw-bold text-success my-5">Image-Gallery</h1>
      <div className="col-lg-4 gap-5 col-md-12 mb-4 mb-lg-0">
        <img
          src="https://images.unsplash.com/photo-1500463959177-e0869687df26?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className="shadow-1-strong img-thumbnail rounded mb-4"
          width={"500px"}
          alt="Boat on Calm Water"
        />

        <img
          src="https://images.unsplash.com/photo-1623645481161-0d8160281cbf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=371&q=80"
          className="w-100 shadow-1-strong img-thumbnail rounded mb-4"
          alt="Wintry Mountain Landscape"
        />
      </div>

      <div className="col-lg-4 mb-4 mb-lg-0">
        <img
          src="https://images.unsplash.com/photo-1557008075-7f2c5efa4cfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1394&q=80"
          className="w-100 img-thumbnail shadow-1-strong rounded mb-4"
          alt="Mountains in the Clouds"
        />

        <img
          src="https://images.unsplash.com/photo-1465471765877-2e7a264830d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className=" shadow-1-strong img-thumbnail rounded mb-4"
          width={"500px"}
          alt="Boat on Calm Water"
        />
      </div>

      <div className="col-lg-4 mb-4 mb-lg-0">
        <img
          src="https://images.unsplash.com/photo-1452541735531-b68f5e769257?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          className="shadow-1-strong img-thumbnail rounded mb-4"
          width={"500px"}
          alt="Waves at Sea"
        />

        <img
          src="https://images.unsplash.com/photo-1567633090480-f19f2f67c088?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
          className="w-100 shadow-1-strong img-thumbnail rounded mb-4"
          alt="Yosemite National Park"
        />
      </div>
    </div>
  );
};

export default Gallery;
