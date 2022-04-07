import React from 'react'
import Phone from './Phone'
import { ItemTypes } from './Constants'
import { useDrop } from 'react-dnd'

/* const ShoppingCartSpec = {
    drop() {
        return { name: 'ShoppingCart' }
    }
}
function collect(connect, monitor) {
    return {
        highlighted: monitor.canDrop(),
        hovered: monitor.isOver(),
        connectDropTarget: connect.dropTarget()
    }
} */


const ShoppingCart = () => {

    const [{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: ItemTypes.PHONE,
        collect: monitor => ({
            isOver: !!monitor.isOver(),
        }),
    }), [])


    const isActive = canDrop && isOver;

    let backgroundColor = '#FFFFFF';
    if (isActive) {
        backgroundColor = '#F7F7BD';
    } else if (canDrop) {
        backgroundColor = '#F7F7F7';
    }
    const style = {
        backgroundColor: backgroundColor
    };
    return drop(
        <div className="shopping-cart" style={style} >
            {
                isActive
                    ? 'Humm, phone!'
                    : 'Drag here to order!'
            }
        </div>
    )
}

export default ShoppingCart