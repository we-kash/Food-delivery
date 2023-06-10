import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Foodcard from "../components/Foodcard";
import Carousel from "../components/Carousel";

export default function Home() {

  const [foodCat, setFoodCat] = useState([])
  const [foodItem, setFoodItem] = useState([])

  const loadData = async () => {
    let response = await fetch("http://localhost:5000/api/foodData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
    });
    response = await response.json();
    // console.log(response[0],response[1]);
    setFoodItem(response[0])
    setFoodCat(response[1])
  }

  useEffect(() => {
    loadData()
  }, [])

  return (
    <div>
      <div>
        <Navbar />
        <div>
          <Carousel />
        </div>
        <div className="container">
            {
                foodCat !==[]
                ? foodCat.map((data)=>{
                  return(<div className='row mb-3' >
                  <div key={data._id} className="fs-3 m-3" > 
                  {data.CategoryName}
                  </div>
                  <hr></hr>
                  {foodItem!==[]
                  ?
                  foodItem.filter((item)=> item.CategoryName === data.CategoryName)                  
                  .map(filtereditems=>{
                    return(
                      <div key={filtereditems.__id} className="col-12 col-md-6 col-lg-3">
                          <Foodcard 
                            foodName={filtereditems.name }
                            options={filtereditems.options[0]}
                            imgSrc={filtereditems.img}
                            des={filtereditems.description}
                            ></Foodcard>
                      </div>
                    )
                  }): <div>No such data found</div> }
                  </div>)
                })
                :" "
            }

        </div>
        <Footer />
      </div>
    </div>
  );
}
