import Link from 'next/link'
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

const AboutUs = () => {
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
        <section className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
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
    );
}

export default AboutUs;