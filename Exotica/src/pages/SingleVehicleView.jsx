import React, { useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import ImageViewer from "react-simple-image-viewer";
import data from "../assets/data";
import { Navbar } from "@/components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faComments } from "@fortawesome/free-solid-svg-icons";
import EndNavbar from "@/components/EndNavbar";

const currentDate = new Date().toLocaleDateString();

export function SingleVehicleView() {
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
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 px-4 sm:px-6 lg:px-8 mt-16">
        <h1 className="text-xl sm:text-2xl lg:text-3xl">{vehicle.title}</h1>
        <h2 className="mb-5 text-sm sm:text-base">{vehicle.description2}</h2>
        
        <div className="h-[1rem] mb-2 bg-[#f6ddce]"></div>
        
        {/* Image Gallery Section */}
        <div className="flex flex-col lg:flex-row justify-center gap-4">
          {/* Main Image */}
          <div className="w-full lg:w-2/3">
            <img
              src={vehicle.coverImg}
              alt={vehicle.title}
              className="w-full h-auto rounded-lg cursor-pointer"
              onClick={() => openImageViewer(0)}
            />
          </div>

          {/* Thumbnail Column */}
          <div className="flex lg:flex-col gap-2 overflow-x-auto lg:overflow-x-visible">
            {images.slice(1).map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${vehicle.title} view ${index + 1}`}
                className="w-32 sm:w-40 lg:w-48 h-auto rounded-lg cursor-pointer"
                onClick={() => openImageViewer(index + 1)}
              />
            ))}
          </div>
        </div>

        {/* Price and Info Bar */}
        <div className="mt-7 bg-[#0f1523] rounded-lg p-4">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[#f6ddce]">
            <span className="text-lg">Price: {vehicle.price}</span>
            <span className="text-lg">Date: {currentDate}</span>
            <span className="text-lg">
              <FontAwesomeIcon icon={faComments} /> Comments{" "}
              <span className="font-bold">47</span>
            </span>
          </div>
        </div>

        {/* Vehicle Details Section */}
        <div className="flex flex-col lg:flex-row gap-8 my-10">
          {/* Specifications Table */}
          <div className="w-full lg:w-1/2 overflow-x-auto">
            <table className="w-full border-separate border-spacing-2 border text-[#f6ddce] border-slate-500 bg-[#0f1523] rounded-lg">
              <tbody>
                {/* Table rows with responsive padding */}
                <tr>
                  <td className="border border-slate-600 rounded-lg p-2 sm:p-3">Make</td>
                  <td className="border border-slate-600 rounded-lg p-2 sm:p-3">
                    <a href="#" className="hover:underline">Mercedes-Benz</a>
                  </td>
                  <td className="border border-slate-600 rounded-lg p-2 sm:p-3">Engine</td>
                  <td className="border border-slate-600 rounded-lg p-2 sm:p-3">4.0L V8 Biturbo</td>
                </tr>
                {/* ... Rest of the table rows following the same pattern ... */}
                {/* Include all your existing rows with the same responsive padding */}
              </tbody>
            </table>
          </div>

          {/* Vehicle Description */}
          <div className="w-full lg:w-1/2">
            <p className="text-sm sm:text-base leading-relaxed">
              The Mercedes-AMG GT is a stunning vehicle that boasts excellent performance, 
              impressive technology, and a luxurious interior. This particular example is 
              the desirable GT C, which offers even more performance than the standard GT — 
              and it's a Roadster, so you can enjoy the experience with the top down. 
              {/* ... Rest of the description ... */}
            </p>
          </div>
        </div>
      </main>

      <EndNavbar />

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
  );
}