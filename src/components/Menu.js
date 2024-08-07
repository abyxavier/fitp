import React from 'react';
import { Card } from 'react-bootstrap';
import { AiOutlineAim } from 'react-icons/ai';
import { FaCircleChevronRight } from 'react-icons/fa6';
import { MdFastfood, MdRestaurantMenu } from 'react-icons/md';

export default function Menu() {
  return (
    <div>
      <Card className='bg-dark'>
        <Card.Body>
          <div className='d-flex justify-content-between align-items-center mb-2'>
            <div>
              <AiOutlineAim  size={25} className='mx-2'/> 
              <span>Goals</span>
            </div>
            <div>
              <FaCircleChevronRight />
              
            </div>
          </div>
          <div className='d-flex justify-content-between align-items-center mb-2'>
            <div>
              <MdRestaurantMenu size={25} className='mx-2'/> 
              <span>Menus</span>
            </div>
            <div>
              <FaCircleChevronRight />
            </div>
          </div>
          <div className='d-flex justify-content-between align-items-center'>
            <div>
              <MdFastfood size={25} className='mx-2'/> 
              <span>Popular Dishes</span>
            </div>
            <div>
              <FaCircleChevronRight />
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}
