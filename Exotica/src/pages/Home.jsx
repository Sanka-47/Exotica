import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../pages/Signin.css";
import AutoCarousel from "../components/AutoCarousel";
import MediaCard from "../components/MediaCard";
import car1 from "../assets/images/car1.jpg";
import car2 from "../assets/images/car2.jpg";
import car5 from "../assets/images/car5.jpg";
import data from "../assets/data";
import Pagination from '../components/Pagination';
import { Navbar } from '@/components/Navbar';
import EndNavbar from '@/components/EndNavbar';

const images = [car1, car2, car5];

export function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;
  const totalPosts = data.length;

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div className="min-h-screen flex flex-col">
      <header className="fixed top-0 w-full z-50">
        <Navbar />
      </header>

      <main className="flex-1">
        {/* Carousel Section */}
        <div className="bg-[#0e1522] pt-3 mt-16">
          <div className="container mx-auto px-4">
            <AutoCarousel images={images} />
          </div>
        </div>

        {/* Auctions Section */}
        <div className="container mx-auto px-4 py-6">
          <h2 className="text-xl sm:text-2xl font-semibold mb-6">
            Today's Auctions
          </h2>

          {/* Centered Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 place-items-center">
            {currentPosts.map((item) => (
              <Link 
                to={`/vehicle/${item.id}`} 
                key={item.id}
                className="w-full max-w-sm transform transition-transform hover:scale-105"
              >
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

          {/* Pagination */}
          <div className="mt-8 flex justify-center">
            <Pagination
              totalPosts={totalPosts}
              postsPerPage={postsPerPage}
              currentPage={currentPage}
              paginate={paginate}
            />
          </div>
        </div>
      </main>

      <footer>
        <EndNavbar />
      </footer>
    </div>
  );
}