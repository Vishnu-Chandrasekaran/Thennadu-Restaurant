import React, { useState, useEffect } from "react";
import Navbar from "../Navigation/Navbar";
import SpiceImage from "../../assets/spices_stall_new.jpg";
import AOS from 'aos'
import "aos/dist/aos.css"
const menuItemsData = [
  {
    category: "breakfast",
    itemName: "BreakFast / Dinner",
    itemList: [
      {
        dishName: "Idly 3 + Vada",
        dishPrice: "5 QR",
      },
      {
        dishName: "Sambar Idly",
        dishPrice: "6 QR",
      },
      {
        dishName: "Curd Idly",
        dishPrice: "6 QR",
      },
      {
        dishName: "Podi Idly",
        dishPrice: "7 QR",
      },
      {
        dishName: "Kothu Idly",
        dishPrice: "7 QR",
      },
      {
        dishName: "Poori Masala",
        dishPrice: "8 QR",
      },
      {
        dishName: "Pongal",
        dishPrice: "7 QR",
      },
      {
        dishName: "Egg Kothu Parotta",
        dishPrice: "10 QR",
      },
      {
        dishName: "Chicken Kothu",
        dishPrice: "12 QR",
      },
      {
        dishName: "Idiyappam Egg Kothu",
        dishPrice: "11 QR",
      },
      {
        dishName: "Idiyappam Chicken Kothu",
        dishPrice: "13 QR",
      },
      {
        dishName: "Puttu",
        dishPrice: "13 QR",
      },
      {
        dishName: "Normal Veechu Poratta ",
        dishPrice: "3 QR",
      },
      {
        dishName: "Egg Veechu Poratta ",
        dishPrice: "5 QR",
      },
    ],
  },
  {
    category: "dosa",
    itemName: "Dosa Variety",
    itemList: [
      {
        dishName: "Plain Dosa",
        dishPrice: "5 QR",
      },
      {
        dishName: "Plain Roast",
        dishPrice: "7 QR",
      },
      {
        dishName: "Ghee Roast",
        dishPrice: "8 QR",
      },
      {
        dishName: "Special Masala Dosa",
        dishPrice: "8 QR",
      },
      {
        dishName: "Kall Dosa",
        dishPrice: "6 QR",
      },
      {
        dishName: "Onion Dosa",
        dishPrice: "7 QR",
      },
      {
        dishName: "Uthappam",
        dishPrice: "5 QR",
      },
      {
        dishName: "Onion Uthappam",
        dishPrice: "7 QR",
      },
      {
        dishName: "Podi Onion Uthappam",
        dishPrice: "8 QR",
      },
      {
        dishName: "Mix Veg Uthappam",
        dishPrice: "10 QR",
      },
      {
        dishName: "Podi Dosa",
        dishPrice: "8 QR",
      },
      {
        dishName: "Garlic Dosa",
        dishPrice: "10 QR",
      },
      {
        dishName: "Egg Dosa",
        dishPrice: "7 QR",
      },
      {
        dishName: "Rava Dosa ",
        dishPrice: "8 QR",
      },
      {
        dishName: "Mushroom Dosa ",
        dishPrice: "10 QR",
      },
    ],
  },
  {
    category: "lunch",
    itemName: "Lunch",
    itemList: [
      {
        dishName: "Variety Rice",
        dishPrice: "8 QR",
      },
      {
        dishName: "Veg Meals",
        dishPrice: "10 QR",
      },
      {
        dishName: "Non Veg Meals",
        dishPrice: "12 QR",
      },
      {
        dishName: "Special Vegetable Meals",
        dishPrice: "13 QR",
      },
      {
        dishName: "Special Non Veg Meals",
        dishPrice: "16 QR",
      },
    ],
  },
  {
    category: "curry",
    itemName: "Curry / Roast",
    itemList: [
      {
        dishName: "Paneer Butter Masala",
        dishPrice: "15 QR",
      },
      {
        dishName: "Veg Mixed Curry",
        dishPrice: "7 QR",
      },
      {
        dishName: "Channa Masala",
        dishPrice: "10 QR",
      },
      {
        dishName: "Kadalai Curry",
        dishPrice: "7 QR",
      },
      {
        dishName: "Mushroom Masala",
        dishPrice: "12 QR",
      },
      {
        dishName: "Chicken Chukka",
        dishPrice: "12 QR",
      },
      {
        dishName: "Chicken Curry",
        dishPrice: "10 QR",
      },
      {
        dishName: "Pepper Chicken",
        dishPrice: "14 QR",
      },
      {
        dishName: "Chinthamani Chicken",
        dishPrice: "18 QR",
      },
      {
        dishName: "Mutton Chukka",
        dishPrice: "18 QR",
      },
      {
        dishName: "Mutton Gravy",
        dishPrice: "16 QR",
      },
      {
        dishName: "Mutton Curry",
        dishPrice: "14 QR",
      },
      {
        dishName: "Pepper Mutton",
        dishPrice: "17 QR",
      },
      {
        dishName: "Fish Curry",
        dishPrice: "10 QR",
      },
      {
        dishName: "Fish Masala Gravy",
        dishPrice: "15 QR",
      },
      {
        dishName: "Gobi 65",
        dishPrice: "12 QR",
      },
      {
        dishName: "Chicken 65",
        dishPrice: "14 QR",
      },
      {
        dishName: "Fish Fry",
        dishPrice: "8 QR",
      },
      {
        dishName: "Fish 65",
        dishPrice: "14 QR",
      },
      {
        dishName: "Prawns 65",
        dishPrice: "21 QR",
      },
      {
        dishName: "Mutton Liver",
        dishPrice: "18 QR",
      },
      {
        dishName: "Mutton Boti",
        dishPrice: "20 QR",
      },
    ],
  },
  {
    category: "juice",
    itemName: "Beverages",
    itemList: [
      {
        dishName: "Orange",
        dishPrice: "5 QR",
      },
      {
        dishName: "Lemon",
        dishPrice: "4 QR",
      },
      {
        dishName: "Lemon Mint",
        dishPrice: "5 QR",
      },
      {
        dishName: "Apple",
        dishPrice: "7 QR",
      },
      {
        dishName: "Watermelon",
        dishPrice: "5 QR",
      },
      {
        dishName: "Pineapple",
        dishPrice: "8 QR",
      },
      {
        dishName: "Mango",
        dishPrice: "6 QR",
      },
      {
        dishName: "Muskmelon",
        dishPrice: "7 QR",
      },
      {
        dishName: "Avacoda",
        dishPrice: "8 QR",
      },
      {
        dishName: "Karak Tea",
        dishPrice: "1 QR",
      },
      {
        dishName: "Fresh Milk Tea",
        dishPrice: "1 QR",
      },
      {
        dishName: "Green Tea",
        dishPrice: "1 QR",
      },
      {
        dishName: "Lipton Tea",
        dishPrice: "1 QR",
      },
      {
        dishName: "Sulaimani",
        dishPrice: "1 QR",
      },
      {
        dishName: "Black Tea",
        dishPrice: "1 QR",
      },
      {
        dishName: "Black Coffee",
        dishPrice: "1 QR",
      },
      {
        dishName: "Coffee",
        dishPrice: "2 QR",
      },
      {
        dishName: "Boost",
        dishPrice: "3 QR",
      },
      {
        dishName: "Horlicks",
        dishPrice: "3 QR",
      },
    ],
  },
  {
    category: "briyani",
    itemName: "Briyani",
    itemList: [
      {
        dishName: "Veg Briyani",
        dishPrice: "11 QR",
      },
      {
        dishName: "Chicken Briyani",
        dishPrice: "12 QR",
      },
      {
        dishName: "Fried Chicken Briyani",
        dishPrice: "17 QR",
      },
      {
        dishName: "Mutton Briyani",
        dishPrice: "16 QR",
      },
      {
        dishName: "Fish Briyani",
        dishPrice: "13 QR",
      },
      {
        dishName: "Egg Briyani",
        dishPrice: "10 QR",
      },
      {
        dishName: "Mutton Briyani + Chicken 65",
        dishPrice: "21 QR",
      },
    ],
  },
  {
    category: "sandwich",
    itemName: "Sandwich",
    itemList: [
      {
        dishName: "Vegetable Parota Roll",
        dishPrice: "3 QR",
      },
      {
        dishName: "Egg Parota Roll",
        dishPrice: "4 QR",
      },
      {
        dishName: "Boiled Egg Parota Roll",
        dishPrice: "4 QR",
      },
      {
        dishName: "Chicken Parota Roll",
        dishPrice: "5 QR",
      },
      {
        dishName: "Chilly Chicken Parota Roll",
        dishPrice: "6 QR",
      },
      {
        dishName: "Vegetable Sandwich",
        dishPrice: "3 QR",
      },
      {
        dishName: "Egg Sandwich",
        dishPrice: "4 QR",
      },
      {
        dishName: "Chicken Sandwich",
        dishPrice: "5 QR",
      },
      {
        dishName: "Falafel Sandwich",
        dishPrice: "4 QR",
      },
      {
        dishName: "Bread Omlette",
        dishPrice: "4 QR",
      },
    ],
  },
];
const Menu = () => {
    useEffect(()=>{
        AOS.init({
          offset: 100,
          duration: 700,
          easing: "ease-in",
          delay: 100
        });
        AOS.refresh();
        
    
      })
  const [breakFast, setBreakFast] = useState(false);
  const [dosa, setDosa] = useState(false);
  const [foodCategory, setFoodCategory] = useState("breakfast");
  const handleClick = (category) => {
    setFoodCategory(category);
  };

  return (
    <>
      <Navbar />
      <div className="bg-primaryMaroon h-full min-h-screen font-mont">
        <div
          className="h-52 bg-cover flex justify-center items-center"
          style={{ backgroundImage: `url(${SpiceImage})` }}
        >
          <h1 className="text-center text-white font-bold text-8xl">MENU</h1>
        </div>

        <div className=" mt-10 flex flex-col  justify-self-end items-center">
          <div className=" flex flex-wrap justify-center items-center gap-3">
            {menuItemsData.map((itemList) => (
              <button
                className={` p-2 shadow-[6px_6px_#000] font-mont ${
                  foodCategory === itemList.category
                    ? "text-white bg-primaryMaroon"
                    : "bg-white text-primaryMaroon"
                }`}
                onClick={() => {
                  handleClick(itemList.category);
                }}
              >
                {itemList.itemName}
              </button>
            ))}
          </div>
          <div>
            {menuItemsData.map((itemList) => (
              <div className="mt-16 text-white mb-16">
                {itemList.category === foodCategory &&
                <>
                <div>
                {itemList.category === "lunch" && (
                    <>
                    <h1 className="text-orange-400"> Business Lunch </h1>
                    <div className="flex justify-center w-96 gap-10 p-2 border-2 items-center mb-5">
                        
                      <p>
                        Meals + Briyani Rice + Sambar Rice + Curd Rice + Veg
                        Salad + Chappathy + Gravy + Sweet + Poriyal + Pickle
                        + Pappadam
                      </p>
                      <p className="w-full text-orange-400">15 QR</p>
                    </div>
                    </>
                  )}
                  </div>
                <div>
                {itemList.category === "breakfast" && (
                    <>
                    <h1 className="text-orange-400"> Mini Breakfast </h1>
                    <div className="flex justify-center w-96 gap-10 p-2 border-2 items-center mb-5">
                        
                      <p>
                        1 Dosa + 2 Idly + Pongal + Vada + Kesari + Sambar + Chutney
                      </p>
                      <p className="w-full text-orange-400">10 QR</p>
                    </div>
                    </>
                  )}
                  </div>
                  <div>
                  {itemList.itemList.map((food) => (
                    <>
                      {" "}
                      
                      <div className=" flex justify-between items-center w-96 gap-10 p-2">
                        <p className="w-full">{food.dishName}</p>{" "}
                        <p className="w-full text-orange-400">
                          {food.dishPrice}
                        </p>
                      </div>
                    </>))}
                    </div>
                    </>
                  }
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
