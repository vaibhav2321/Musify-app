'use client';

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/music_courses.json";
import Link from "next/link";

function Page() {
  const [data, setData] = useState([]);
  const [data1,setData1] = useState([]);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch('/api/hello')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log("API Data:", data);
        setData(data);
        setData1(data.data)
      })
      .catch(error => {
        console.error("Error fetching API data:", error);
      });
  }, []);

  return (
    <div className="min-h-screen bg-black py-12 pt-36">
      <h1 className="text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white">
        All courses ({courseData.courses.length})
      </h1>
      <div className="flex flex-wrap justify-center">
        {courseData.courses.map((course) => (
          <CardContainer className="inter-var m-4" key={course.title}>
            <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full sm:w-[28rem] h-auto rounded-xl p-6 border transition-all duration-300 ease-in-out transform hover:scale-105">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {course.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
              >
                {course.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={course.image}
                  height="1000"
                  width="1000"
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={course.title}
                />
              </CardItem>
              <div className="flex justify-between items-center mt-6">
                <Link href={'/'}>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white bg-gray-800 dark:bg-white dark:text-black text-white transition-colors duration-300 hover:bg-gray-700"
                  >
                    Try now →
                  </CardItem>
                </Link>
                <Link href={'/Login'}>
                  <CardItem
                    translateZ={20}
                    as="button"
                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold transition-colors duration-300 hover:bg-gray-800"
                  >
                    Sign up
                  </CardItem>
                </Link>
              </div>
            </CardBody>
          </CardContainer>
        ))}
      </div>

      <div className="mt-16 m-4 p-1">
        <h1 className="text-white mb-8 text-3xl">API Response:</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {/* {data.length > 0 ? (
            data.map((post) => (
              <CardContainer className="inter-var" key={post.id}>
                <CardBody className="bg-gray-800 p-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl">
                  <CardItem className="text-white">
                    <h2 className="text-xl font-bold">{post.name}</h2>
                    <h3 className="text-lg font-semibold mt-2">{post.age}</h3>
                    <p className="text-sm mt-2">{post.profile}</p>
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))
          ) : (
            <p className="text-white">No data available from the API</p>
          )} */}


          {
            data1.length > 0 ?
              data1.map((post) => [
                <CardContainer className="inter-var" key={post.id}>
                  <CardBody className="bg-gray-800 p-4 rounded-lg shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl">
                    <CardItem className="text-white">
                      <h2 className="text-xl font-bold">{post.name}</h2>
                      <h3 className="text-lg font-semibold mt-2">{post.age}</h3>
                      <p className="text-sm mt-2">{post.profile}</p>
                    </CardItem>
                  </CardBody>
                </CardContainer>
              ])
              : 
              <h2>No record found</h2>
          }
        </div>
      </div>
    </div>
  );
}

export default Page;
