import React from 'react'

const MyCart = () => {
    return (
        <div>
            <div className='cards phone ' style={{ width: "18rem" }}>
                <div className="card ">
                    <img
                        className='card-img-top '
                        src="/images/phone.jpg"

                    />
                    <div className="card-body">

                        <h5 className='card-title'>Test_Phone</h5>
                        <p className='card-subtitle'>$ 80</p>
                        <p className='card-text'>12 minutes</p>
                        <p className='card-text'>
                            8G RAM, 16G memory
                        </p>

                        <div className='buttons'>
                            <button className='btn btn-success'>Buy</button>
                            <button className='btn btn-danger'>Decline</button>
                        </div>

                    </div>



                </div>
            </div>
        </div >
    )
}

export default MyCart