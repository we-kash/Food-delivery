import React, { useEffect, useState , useRef } from 'react'
import { useDispatchCart,useCart } from './ContextReducer';

export default function Foodcard(props) {
    let dispatch = useDispatchCart();
    let options = props.options;
    let priceOpt = Object.keys(options);
    let data = useCart();
    const priceRef = useRef();

    const [qty, setQty] = useState(1);
    const [size, setSize] = useState("");



    const handleAddtoCart = async () => {
        let food=[]
        for(const item of data)
        {
            if(item.id === props.foodItem._id){
                food = item;
                break;
            }
        }
        if (food !== []) {
            if (food.size === size) {
              await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
              return
            }
            else if (food.size !== size) {
              await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size,img: props.ImgSrc })
              return
            }
            return
          }
      
        await dispatch({
            type: "ADD", id: props.foodItem._id, name: props.foodItem.name,
            price: finalPrice, qty: qty, size: size })
        // console.log(data)
    }
    let finalPrice=qty * parseInt(options[size]);
    useEffect(()=>{
            setSize(priceRef.current.value)
    },[])
    return (
        <div>
            <div className="card mt-3" style={{ width: "18rem", "maxHeight": "500px" }}>
                <img
                    className="card-img-top"
                    src={props.foodItem.img}
                    alt="Card cap"
                    style={{ height: "150px", objectFit: "cover" }}
                />
                <div className="card-body">
                    <h5 className="card-title">{props.foodItem.name}</h5>
                    <p className="card-text fs-6" >
                        {/* {props.foodItem.description} */}
                    </p>
                    <div className="container w-100"> 
                        <select className="m-2 h-100  bg-success rounded"
                            onChange={(e) => setQty(e.target.value)}>
                            {
                                Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    )
                                })
                            }
                        </select>
                        <select className="m-2 h-100  bg-success rounded" ref={priceRef}
                            onChange={(e) => setSize(e.target.value)}>
                            {
                                priceOpt.map((typData) => {
                                    return (
                                        <option key={typData} value={typData}>{typData}</option>
                                    )
                                })
                            }
                        </select>
                        <div className='d-inline h-100 fs-5'>
                            ₹{finalPrice}/-
                        </div>

                    </div>
                    <hr></hr>
                    <button className={'btn btn-success justify-center ms-2'}
                        onClick={handleAddtoCart}>
                         Add to Cart
                    </button>
                </div>
            </div>
        </div>
    )
}