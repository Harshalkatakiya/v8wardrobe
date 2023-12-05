'use client'
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Toast from '@/utils/react-toastify/toast';

const LearnMore = () => {
    return (
        <>
            <Link href="" className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-2" viewBox="0 0 24 24" >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </Link>
        </>
    )
}

const QuotationMark = () => {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="block w-5 h-5 text-gray-400 mb-4" viewBox="0 0 975.036 975.036" >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z" />
            </svg>
        </>
    )
}


const AboutUs = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
    };
    const submitForm = (e) => {
        e.preventDefault();
        Toast("Your Response has been Submitted", "success")
    }
    const socialIconSize = "27px";
    const sections = [
        {
            title: 'Stylish Designs',
            description: 'Express your unique style with our collection of t-shirts. We offer a wide range of designs that are sure to turn heads. From minimalist to bold, we have something for everyone.',
            icon: (
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
            )
        },
        {
            title: 'Premium Quality',
            description: 'Our t-shirts are made with the finest materials to ensure durability and comfort. Each shirt undergoes strict quality control to meet the highest standards. Experience the difference of premium quality.',
            icon: (
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                    <circle cx={6} cy={6} r={3} />
                    <circle cx={6} cy={18} r={3} />
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12" />
                </svg>
            )
        },
        {
            title: 'Trendy Collection',
            description: 'Browse our wide selection of t-shirts available for purchase. Our e-commerce platform provides a seamless shopping experience, allowing you to find the perfect t-shirt and place your order with ease. Get ready to upgrade your wardrobe with our trendy designs.',
            icon: (
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-6 h-6" viewBox="0 0 24 24">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx={12} cy={7} r={4} />
                </svg>
            )
        }
    ];
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 mb-20">
                        Explore Our Quality T-Shirts
                        <br className="hidden sm:block" />
                        Made with Premium Materials
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {sections.map((section, index) => (
                            <div key={index} className="p-4 flex">
                                <div className="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                                    {section.icon}
                                </div>
                                <div className="flex-grow pl-6">
                                    <h2 className="text-gray-900 text-lg title-font font-medium mb-2">{section.title}</h2>
                                    <p className="leading-relaxed text-base">{section.description}</p>
                                    <LearnMore />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <hr className='mx-36 border-2 border-gray-500 bounded-lg' />
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5">
                    <div className="flex flex-col text-center w-full mb-4">
                        <h1 className="text-2xl font-medium title-font mb-4 text-gray-900">OUR TEAM</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            Our meticulously skilled team of e-commerce t-shirt selling
                            specialists has meticulously crafted our website to optimize your
                            experience and drive unparalleled success in the online
                            marketplace.
                        </p>
                    </div>
                    <div className="flex items-center justify-center mb-4">
                        <div className="flex flex-col items-center text-center justify-center">
                            <h2 className="title-font text-3xl font-bold text-gray-900">Harshal Katakiya</h2>
                            <h3 className="text-gray-500 font-semibold">Full Stack Web-Developer</h3>
                            <div className="flex gap-7 mt-2">
                                <Link href="https://www.facebook.com/harshal.katakiya" target="_blank">
                                    <svg className="my-auto fill-gray-600 cursor-pointer transition-all hover:scale-125 hover:fill-blue-500" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={socialIconSize} height={socialIconSize} viewBox="0 0 50 50">
                                        <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                                    </svg>
                                </Link>
                                <Link href="https://www.instagram.com/harshal_katakiya_" target="_blank">
                                    <svg className="my-auto fill-gray-600 cursor-pointer transition-all hover:scale-125 hover:fill-red-500" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={socialIconSize} height={socialIconSize} viewBox="0 0 30 30">
                                        <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                                    </svg>
                                </Link>
                                <Link href="https://www.linkedin.com/in/harshal-katakiya" target="_blank">
                                    <svg className="my-auto fill-gray-600 cursor-pointer transition-all hover:scale-125 hover:fill-blue-500" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={socialIconSize} height={socialIconSize} viewBox="0 0 50 50">
                                        <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr className='mx-36 border-2 border-gray-500 bounded-lg' />
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-5">
                    <h1 className="text-3xl font-medium title-font text-gray-900 mb-12 text-center">Customer Reviews</h1>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/2 w-full">
                            <div className="h-full bg-gray-100 p-8 rounded">
                                <QuotationMark />
                                <p className="leading-relaxed mb-6">
                                    I am extremely satisfied with the quality of the t-shirts I
                                    purchased from this website. The fabric is soft, the designs
                                    are vibrant, and the fit is perfect. The customer service was
                                    also excellent. I had a question about sizing, and they
                                    responded promptly and helped me choose the right size.
                                    Overall, I highly recommend their products and will definitely
                                    be purchasing from them again in the future.
                                </p>
                                <div className="inline-flex items-center">
                                    <Image height={48} width={48}
                                        alt="testimonial"
                                        src="https://images.generated.photos/ysB9F0Ipsgcjni1SGYOT6SEw5lPlMe-5V4mpumZms-s/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NTEwOTQ2LmpwZw.jpg"
                                        className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                                    />
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font font-medium text-gray-900">
                                            John Doe
                                        </span>
                                        <span className="text-gray-500 text-sm">CUSTOMER</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2 w-full">
                            <div className="h-full bg-gray-100 p-8 rounded">
                                <QuotationMark />
                                <p className="leading-relaxed mb-6">
                                    The t-shirts I bought from this website exceeded my
                                    expectations. The designs are unique and eye-catching, and the
                                    quality of the fabric is excellent. I've received several
                                    compliments whenever I wear them. The shipping was fast, and
                                    the packaging was neat and secure. I'm a happy customer and
                                    will definitely be shopping here again.
                                </p>
                                <div className="inline-flex items-center">
                                    <img
                                        alt="testimonial"
                                        src="https://images.generated.photos/fgW5PB0M5BxW9DyuWzovEOC3Fq0FIRvA40VnmMNYLTY/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODQ0NjUzLmpwZw.jpg"
                                        className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                                    />
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font font-medium text-gray-900">
                                            Jenny Smith
                                        </span>
                                        <span className="text-gray-500 text-sm">CUSTOMER</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <hr className='mx-36 border-2 border-gray-500 bounded-lg' />
            <section className="text-gray-600 body-font relative">
                <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe width="100%" height="100%" className="absolute inset-0" frameBorder={0} title="map" marginHeight={0} marginWidth={0} scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118147.68689012097!2d70.73889424847351!3d22.273625028201554!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959c98ac71cdf0f%3A0x76dd15cfbe93ad3b!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1701791151999!5m2!1sen!2sin"
                        />
                        <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS:</h2>
                                <p className="mt-1">Rajokot, Gujarat, India - 360001</p>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <span className="text-indigo-500 leading-relaxed cursor-pointer">v8wardrobe@gmail.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
                        <p className="leading-relaxed mb-5 text-gray-600">Write your feedback here.</p>
                        <form method="post">
                            <div className="relative mb-4">
                                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                                <input type="text" id="name" required name="name" value={formData.name} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="email" className="leading-7 text-sm text-gray-600">
                                    Email
                                </label>
                                <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                            </div>
                            <div className="relative mb-4">
                                <label htmlFor="message" className="leading-7 text-sm text-gray-600"> Message
                                </label>
                                <textarea id="message" name="message" required value={formData.message} onChange={handleChange} className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" />
                            </div>
                            <button className="text-white w-full bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={submitForm}>Submit</button>
                        </form>
                        <p className="text-xs text-gray-500 mt-3">We Will Get Back To You Soon.</p>
                    </div>
                </div>
            </section>
        </>
    );
}

export default AboutUs;