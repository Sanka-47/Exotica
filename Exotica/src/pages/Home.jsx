import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import "../pages/css/Signin.css";
import AutoCarousel from "../components/AutoCarousel";
import MediaCard from "../components/MediaCard";
import car1 from "../assets/images/car1.jpg";
import car2 from "../assets/images/car2.jpg";
import car5 from "../assets/images/car5.jpg";
import data from "../assets/data";

import Pagination from '../components/Pagination';
import Navbar from '@/components/Navbar';
import EndNavbar from '@/components/EndNavbar';

const images = [car1, car2, car5];




function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;
  const totalPosts = data.length;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate the index of the first and last items on the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <div>
        <Navbar/>
      </div>

      <div className="bg-[#0e1522] pt-3 mt-16">
        <AutoCarousel images={images} />
      </div>

      <div className="mt-3 p-4 text-2xl">
        <h2 className="mb-5">Today's Auctions</h2>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          {currentPosts.map((item) => (
            <Link to={`/vehicle/${item.id}`} key={item.id}>
              <MediaCard
                title={item.title}
                description={item.description}
                price={item.price}
                coverImg={item.coverImg}
                location={item.location}
              />
            </Link>
          ))}
        </div>
        <Pagination
          totalPosts={totalPosts}
          postsPerPage={postsPerPage}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>

      <EndNavbar/>
    </>
  );
}

export default Home;
