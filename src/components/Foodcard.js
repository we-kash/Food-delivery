import React from 'react'

export default function Foodcard() {
    return (
        <div>
            <div className="card mt-3" style={{ width: "18rem", "maxHeight": "360px" }}>
                <img
                    className="card-img-top"
                    src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                    alt="Card cap"
                />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">
                        This is about this card.
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
                            <option value="half">Half</option>
                            <option value="full">Full</option>
                        </select>
                        <div className='d-inline h-100 fs-5'> Price </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
