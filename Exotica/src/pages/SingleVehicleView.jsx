import React, { useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import ImageViewer from "react-simple-image-viewer";
import data from "../assets/data"; // Import the data
import Navbar from "@/components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faComments } from "@fortawesome/free-solid-svg-icons";
import EndNavbar from "@/components/EndNavbar";
const currentDate = new Date().toLocaleDateString();
const SingleVehicleView = () => {
  const { id } = useParams();
  const vehicle = data.find((vehicle) => vehicle.id === Number(id));

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  if (!vehicle) {
    return <div>Vehicle not found</div>;
  }

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  const images = [
    vehicle.coverImg,

    vehicle.coverImg3,
    vehicle.coverImg4,
    vehicle.coverImg5,
    vehicle.coverImg6,
    vehicle.coverImg7,
  ];

  return (
    <>
      <div>
        <div>
          <Navbar />
        </div>
        <h1 className="mt-16 ps-3 text-2xl">{vehicle.title}</h1>
        <h2 className="ps-3 mb-5">{vehicle.description2}</h2>
        <div className="h-[1rem] mb-2 bg-[#f6ddce]"></div>
        <div className="flex justify-center">
          <div className="flex justify-center w-2/3 ">
            <img
              src={vehicle.coverImg}
              alt={vehicle.title}
              style={{ width: "100%", height: "auto" }}
              onClick={() => openImageViewer(0)}
              className="rounded-lg"
            />
          </div>

          <div className="flex flex-col justify-center items-center  ml-4">
            <div className="bg-[#0f1523] p-3 rounded-lg ">
              {images.slice(1).map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={vehicle.title}
                  style={{
                    width: "170px",
                    height: "auto",
                    cursor: "pointer",
                    marginBottom: "8px",
                  }}
                  onClick={() => openImageViewer(index + 1)}
                  className="rounded-lg"
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="mt-7 bg-[#0f1523] w-5/6 rounded-lg flex justify-between items-center p-2 text-xl">
            <span className="text-[#f6ddce] flex-grow-0 mr-4">
              Price: {vehicle.price}
            </span>
            <span className="text-[#f6ddce] flex-grow text-center">
              Date: {currentDate}
            </span>
            <span className="text-[#f6ddce] flex-grow-0 ms-12">
              <FontAwesomeIcon icon={faComments} /> Comments{" "}
              <span className="font-bold">47</span>
            </span>
          </div>
        </div>

        <div className="flex mb-10">
          <div className="flex justify-start ms-5 mt-7 w-1/2">
            <table className="border-separate border-spacing-2 border text-[#f6ddce] border-slate-500  bg-[#0f1523] rounded-lg">
              
              <tr>
                
                <td className="border border-slate-600 rounded-lg p-3">
                  Make
                </td>
                <td className="border border-slate-600 rounded-lg p-3">
                  
                  <a href="#">Mercedes-Benz</a>{" "}
                </td>
                <td className="border border-slate-600 rounded-lg p-3">
                  Engine
                </td>
                <td className="border border-slate-600 rounded-lg p-3">
                  4.0L V8 Biturbo
                </td>
              </tr>
              <tr>
                
                <td className="border border-slate-600 rounded-lg p-3">
                  Model
                </td>
                <td className="border border-slate-600 rounded-lg p-3">
                  
                  <a href="#">GTc Roadster</a>{" "}
                </td>
                <td className="border border-slate-600 rounded-lg p-3">
                  Drivetrain
                </td>
                <td className="border border-slate-600 rounded-lg p-3">RWD</td>{" "}
              </tr>
              <tr>
                
                <td className="border border-slate-600 rounded-lg p-3">
                  Mileage
                </td>
                <td className="border border-slate-600 rounded-lg p-3">
                  10,000
                </td>
                <td className="border border-slate-600 rounded-lg p-3">
                  Transmission
                </td>
                <td className="border border-slate-600 rounded-lg p-3">
                  Automatic (7-Speed)
                </td>
              </tr>
              <tr>
                
                <td className="border border-slate-600 rounded-lg p-3">
                  VIN
                </td>
                <td className="border border-slate-600 rounded-lg p-3">
                  WDDYK7JA9HA015635
                </td>
                <td className="border border-slate-600 rounded-lg p-3">
                  Body Style
                </td>
                <td className="border border-slate-600 rounded-lg p-3">
                  Convertible
                </td>
              </tr>
              <tr>
                
                <td className="border border-slate-600 rounded-lg p-3">
                  Title Status
                </td>
                <td className="border border-slate-600 rounded-lg p-3">
                  Clean (CA)
                </td>
                <td className="border border-slate-600 rounded-lg p-3">
                  Exterior Color
                </td>
                <td className="border border-slate-600 rounded-lg p-3">
                  Brilliant Blue
                </td>
              </tr>
              <tr>
                
                <td className="border border-slate-600 rounded-lg p-3">
                  Location
                </td>
                <td className="border border-slate-600 rounded-lg p-3">
                 
                  <a href="#">Los Angeles, CA 90001</a>{" "}
                </td>
                <td className="border border-slate-600 rounded-lg p-3">
                  Interior Color
                </td>
                <td className="border border-slate-600 rounded-lg p-3">
                  Black
                </td>
              </tr>
              <tr>
                
                <td className="border border-slate-600 rounded-lg p-3">
                  Seller
                </td>
                <td className="border border-slate-600 rounded-lg p-3">
                  
                  <a href="#">premiumcarsla</a> <a href="#">Contact</a>{" "}
                </td>
                <td className="border border-slate-600 rounded-lg p-3">
                  Seller Type
                </td>
                <td className="border border-slate-600 rounded-lg p-3">
                  Dealer
                </td>
              </tr>
            </table>
          </div>

          <div className="w-1/2 me-5 pt-28">
            <p>
              The Mercedes-AMG GT is a stunning vehicle that boasts excellent
              performance, impressive technology, and a luxurious interior. This
              particular example is the desirable GT C, which offers even more
              performance than the standard GT — and it's a Roadster, so you can
              enjoy the experience with the top down. But the special touches
              don't end there, as this is one of the rare Edition 50 models, of
              which only 500 were made worldwide. It comes with a LOT of
              desirable equipment as a result, like a Designo Kashmir White
              exterior color, bodywork from the AMG GT R, a Burmester Surround
              Sound system, and much more. This AMG GT also largely unmodified,
              and it comes with a clean, accident-free Carfax report, adding
              even more to its already strong appeal.
            </p>
          </div>
        </div>

        <EndNavbar/>

     
      
        {isViewerOpen && (
          <ImageViewer
            src={images}
            currentIndex={currentImage}
            disableScroll={false}
            closeOnClickOutside={true}
            onClose={closeImageViewer}
          />
        )}
      </div>
    </>
  );
};

export default SingleVehicleView;
