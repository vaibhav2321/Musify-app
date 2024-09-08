'use client'

import courseData from '../data/music_courses.json'
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient'

interface Course {
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
}

const FeaturedCourses = () => {
    const featuredCourses = courseData.courses.filter((course: Course) => course.isFeatured)

    return (
        <div className='py-12 bg-gray-900'>
            <div className='text-center'>
                <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED COURSES</h2>
                <p className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl'>
                    Learn With the Best!
                </p>
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 sm:p-2 lg:grid-cols-3 gap-8 justify-center mt-8'>
                {featuredCourses.map((course: Course) => (
                    <div key={course.id} className='flex justify-center'>
                        <BackgroundGradient className='flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden max-h-full max-w-sm'>
                            <div className='p-4 sm:p-6 flex flex-col items-center text-center flex-grow'>
                                <p className='text-lg font-semibold'>{course.title}</p>
                                <p className='mt-2 text-gray-500'>{course.description}</p>
                                <Link href={`/Course/${course.slug}`} className='mt-4 text-teal-500 hover:underline'>
                                    Learn more
                                </Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>
            <div className='mt-20 text-center'>
                <Link href='/Courses' className='px-6 py-3 bg-gradient-to-r from-blue-900 to-teal-900 text-white font-semibold rounded-lg shadow-md hover:from-teal-900 hover:shadow-white/10 hover:to-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 transition duration-300 ease-in-out transform hover:scale-105'>
                    View All Courses
                </Link>
            </div>
        </div>
    )
}

export default FeaturedCourses
