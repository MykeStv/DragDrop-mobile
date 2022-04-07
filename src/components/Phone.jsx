import React from 'react'
import { ItemTypes } from './Constants'
import { useDrag } from 'react-dnd'

const Phone = ({ name }) => {

    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.PHONE,
        collect: monitor => ({
            isDraggin: !!monitor.isDragging(),
        }),
    }))

    const opacity = isDragging ? 0.4 : 1;
    const style = {
        opacity: opacity
    };
    const phoneClass = isDragging ? 'ui card phone drag' : 'ui card phone';

    return drag(
        <div className={'card ' + phoneClass} style={{ width: "12rem" }} >
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