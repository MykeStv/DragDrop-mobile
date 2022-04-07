import React from 'react'
import Phone from './Phone'
import ShoppingCart from './ShoppingCart'
import MyCart from './MyCart'
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const Container = ({ phones }) => {

    return (
        <div className='ui container' >
            <div className="main-header">
                <h2 className='ui icon center aligned header'>
                    <i aria-hidden='true' className='mobile circular icon'></i>
                    <div className='content title'>Phone Shope</div>
                </h2>
            </div>
            <div className='ui grid'>
                <h1 className="mycart-header">My cart</h1>
                <div className='left floated five wide column my-cart'>
                    <MyCart />
                </div>
                <div className="right floated five wide column">
                    <DndProvider backend={HTML5Backend}>

                        <div className="ui row">
                            <h3 className="brand-heading">Phone Brands</h3>
                        </div>
                        <div className="ui row">
                            <div className="shopping-list">
                                {
                                    Object.keys(phones).map(phone => (
                                        <Phone key={phone} name={phone.brand} />
                                    ))
                                }
                            </div>
                            <div className="shopping-cart">
                                <ShoppingCart />
                            </div>
                        </div>

                    </DndProvider>
                </div>

            </div>




        </div>
    )
}

export default Container