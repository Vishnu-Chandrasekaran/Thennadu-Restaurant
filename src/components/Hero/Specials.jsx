import React from "react";
import BucketBriyani from "../../assets/Bucket_briyani.jpg";
import ChickenBBQ from "../../assets/ChickenBBQ.jpg";
import IdlyFish from "../../assets/IdlyFish.jpg";
import Slider from "react-slick";

const SpecialsData = [
  {
    id: 1,
    name: "1KG Bucket Briyani Chicken",
    price: "39 QR",
    img: BucketBriyani,
  },
  {
    id: 2,
    name: "Chicken BBQ",
    price: "20 QR",
    img: ChickenBBQ,
  },
  {
    id: 3,
    name: "Idly + Fish Kulambu + Fish Piece",
    price: "8 QR",
    img: IdlyFish,
  },
  {
    id: 4,
    name: "1KG Bucket Briyani Chicken",
    price: "39 QR",
    img: BucketBriyani,
  },
  {
    id: 5,
    name: "Chicken BBQ",
    price: "20 QR",
    img: ChickenBBQ,
  },
  {
    id: 6,
    name: "Idly + Fish Kulambu + Fish Piece",
    price: "8 QR",
    img: IdlyFish,
  },
];
const Specials = () => {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 700,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-12 bg-white text-primaryMaroon">
      <div className="container">
        {/* Header section */}
        <div className="mb-10 space-y-5">
          <h1 className="text-center text-4xl font-bold">Our Specials</h1>
        </div>
        {/* Slider Section */}
        <div>
            <Slider {...settings}>
                {
                    SpecialsData.map((item) => (
                        <div className="my-16">
                            <div className=" flex flex-col gap-4 py-8 px-6 mx-4 rounded-xl">
                                {/* Image section */}
                                <div className="mb-3 flex justify-center">
                                    <img src={item.img} alt="" className="rounded-full w-auto sm:max-w-[200px] md:max-w-[250px] shadow-1" />
                                </div>
                                {/* text section content  */}
                                <div className="flex flex-col items-center gap-4">
                                    <div className="space-y-3 text-center">
                                        <h1 className="text-xl">{item.name}</h1>
                                        <p className="text-3xl font-semibold">{item.price}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
      </div>
    </div>
  );
};

export default Specials;

{
  /* <h1 className='text-7xl text-center text-primaryMaroon font-bold font-cursive'>Thennadu Specials</h1>
        <div className='flex justify-center '>
            <div className='bg-primaryMaroon w-24 h-24 flex justify-center items-center'>
            <img className="w-20 h-20" src={BucketBriyani} alt="" />
            </div>
            
        </div> */
}
