'use client';
import Image from '@/components/Image/Image';
import ImageContainer from '@/components/Image/ImageContainer';
import { useState } from 'react';
import bg from '/public/VeloceBG.jpg';
import logo from '/public/logo.png';

const Card = ({ title, price, src }) => {
  const [hovered, setHovered] = useState(false);
  const formatNumber = (number) => { return number.toLocaleString('en-IN'); }
  const handleHover = () => { setHovered(!hovered); };
  return (
    <div className='relative'>
      <ImageContainer
        className={`aspect-[4/5] bg-red-100 border-2 border-gray-500 rounded-lg relative group overflow-hidden`}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover}
      >
        <Image
          width="1200"
          height="1200"
          className={`w-full h-auto fill-none absolute transition-all duration-500 ${hovered ? 'scale-110 opacity-100' : 'opacity-0'}`}
          alt="product 1"
          src={src[1]}
        />
        <Image
          width="1200"
          height="1200"
          className={`w-full h-auto fill-none absolute transition-all duration-500 ${hovered ? 'scale-110 opacity-0' : 'opacity-100'}`}
          alt="product 1"
          src={src[0]}
        />
      </ImageContainer>
      <div className="flex flex-col">
        <div className="text-xl pt-6">{title}</div>
        <div className="text-lg pt-1">{formatNumber(price)}</div>
      </div>
    </div>
  )
}

const HomePage = () => {
  const data = [
    {
      title: 'Veirdo Multicolour Tie-Dye Oversized Cotton Crew Neck T-Shirt',
      price: 1790,
      src: ["https://m.media-amazon.com/images/I/61CGqRScDaL._SX569_.jpg", "https://m.media-amazon.com/images/I/61Yw2YEANlL._SX569_.jpg"]
    },
    {
      title: "Veirdo Men's Marvel Printed Tshirt",
      price: 1590,
      src: ["https://m.media-amazon.com/images/I/71NeU7k0eRL._SX569_.jpg", "https://m.media-amazon.com/images/I/71AjFO--2BL._SX569_.jpg"]
    },
    {
      title: 'LEOTUDE Full Sleeve Regular Fit Tshirt',
      price: 1790,
      src: ["https://m.media-amazon.com/images/I/61tM2jn7LQL._SX569_.jpg", "https://m.media-amazon.com/images/I/41Bm0ep1xTL.jpg"]
    },
    {
      title: "EYEBOGLER Polo Neck Half Sleeve Striped Print Casual Men Tshirt",
      price: 1990,
      src: ["https://m.media-amazon.com/images/I/51byp5tQ86L._SX679_.jpg", "https://m.media-amazon.com/images/I/51N8Cfl0JdL._SX569_.jpg"]
    },
    {
      title: "EYEBOGLER Men's Striped Regular fit T-Shirt",
      price: 19690,
      src: ["https://m.media-amazon.com/images/I/61NzmmNu6nL._SY879_.jpg", "https://m.media-amazon.com/images/I/61hmWCT1UnL._SX569_.jpg"]
    },
    {
      title: 'Cotton Polo Tshirt',
      price: 1999,
      src: ["https://m.media-amazon.com/images/I/61uqWB-ccBL._SY741_.jpg", "https://m.media-amazon.com/images/I/61G7C6MbkzL._SY741_.jpg"]
    },
  ]
  return (
    <>
      <div className='min-h-screen w-auto max-w-[--max-width] m-auto  shadow-[0_0_5em_#00000033] '>
        <div className="h-screen w-full overflow-hidden sm:min-h-screen sm:overflow-auto relative">
          <ImageContainer className="w-full h-full block relative">
            <Image
              width="1680" height="1680"
              className="h-full w-full object-cover"
              alt="background"
              src={bg} />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
              <Image src={logo} alt="l" width={150} height={150} className="h-24 w-24 md:h-40 md:w-40" />
              <span className="ml-2 md:ml-3 text-white text-4xl md:text-8xl font-serif">V8Wardrobe</span>
              <svg
                className="mt-4 md:mt-6 absolute -bottom-80 md:-bottom-60 animate-bounce text-black h-8 w-8 md:h-12 md:w-12"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </ImageContainer>
        </div>
        <div className='h-16'></div>
        <div className="grid grid-cols-1 md:grid-cols-2 m-auto max-w-[75em] gap-10">
          {
            data?.map((item, index) => {
              return <Card key={index} {...item} />
            })
          }
        </div>
        <div className='h-16'></div>
      </div>
    </>
  )
}

export default HomePage;