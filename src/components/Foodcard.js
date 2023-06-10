import React from 'react'

export default function Foodcard(props) {
    let options= props.options;
    let priceOpt =Object.keys(options);
    return (
        <div>
            <div className="card mt-3" style={{ width: "18rem", "maxHeight": "360px" }}>
                <img
                    className="card-img-top"
                    src={props.imgSrc}
                    alt="Card cap"
                />
                <div className="card-body">
                    <h5 className="card-title">{props.foodName}</h5>
                    <p className="card-text">
                        {/* {props.des} */}
                    </p>
                    <div className="container w-100"> Qty
                        <select className="m-2 h-100  bg-success">
                            {
                                Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    )
                                })
                            }
                        </select> Size
                        <select className="m-2 h-100  bg-success">
                            {
                                priceOpt.map((typData)=>{
                                    return(
                                        <option key={typData} value={typData}>{typData}</option>
                                    )
                                })
                            }
                        </select>
                        <div className='d-inline h-100 fs-5'> Price </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


// Time stamp 18.29 #9