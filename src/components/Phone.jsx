import React from 'react'

const Phone = ({ name }) => {

    return (
        <div className='card phone' style={{ width: "12rem" }} >
            <div className=' '>
                <img src="/images/phone.jpg" className='img-thumbnail' />
            </div>

            <div className="card-body">
                <div className="phone-name">
                    {name}
                </div>
                <div className="meta">8G RAM, 16G memory</div>
            </div>
            <div className="extra content">
                <a href="">
                    <i aria-hidden="true" className="money icon"></i>
                    $ 80
                </a>
            </div>
        </div>
    )
}

export default Phone