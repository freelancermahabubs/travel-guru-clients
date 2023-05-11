/* eslint-disable no-unused-vars */
import React from "react";
import Blog from "../Blog/Blog";
import { useLoaderData } from "react-router-dom";
import { Map, Marker } from "pigeon-maps";

const Blogs = () => {
  const blogs = useLoaderData();
  return (
    <div className="max-w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 border-t-2 pt-8 w-10/12 mx-auto">
      <div className="space-y-8">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog}></Blog>
        ))}
      </div>
      <div>
        <section className="text-gray-600 w-full h-72">
          <div className="container px-5 py-24  flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
              <iframe
                width="100%"
                height="100%"
                className="absolute inset-0"
                frameBorder="0"
                title="map"
                marginHeight="0"
                marginWidth="0"
                scrolling="no"
                src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
              ></iframe>
              <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                <div className="lg:w-1/2 px-6">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    ADDRESS
                  </h2>
                  <p color="mt-1">
                    Photo booth tattooed prism, portland taiyaki hoodie neutra
                    typewriter
                  </p>
                </div>
                <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">
                    EMAIL
                  </h2>
                  <a className="text-indigo-500 leading-relaxed">
                    example@email.com
                  </a>
                  <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">
                    PHONE
                  </h2>
                  <p className="leading-relaxed">123-456-7890</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Blogs;
