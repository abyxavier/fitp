import React from 'react'
import { Table } from 'react-bootstrap';

export default function RecentOrders() {
     const orders = [
        { customer: 'Wade Warren', orderNo: '15472356', amount: '$124.00', status: 'Delivered' },
        { customer: 'Jane Cooper', orderNo: '48096786', amount: '$365.02', status: 'Delivered' },
        { customer: 'Guy Hawkins', orderNo: '78958218', amount: '$45.88', status: 'Cancelled' },
        { customer: 'Kristin Watson', orderNo: '20895732', amount: '$65.00', status: 'Pending' },
        { customer: 'Cody Fisher', orderNo: '69715820', amount: '$545.00', status: 'Delivered' },
        { customer: 'Savannah Nguyen', orderNo: '78514856', amount: '$128.20', status: 'Pending' }
      ];
  return (
    <div className='bg-dark'>
        <h4>Recent orders</h4>
        <Table responsive   variant='dark'>
            <thead>
                <tr>
                <th>Customer</th>
                <th>Order No</th>
                <th>Amount</th>
                <th>Status</th>
                </tr>
            </thead>
            <tbody>
               
                    {orders.map((order,index)=>(
                        <tr key={index}>
                        <td>{order.customer}</td>
                        <td>{order.orderNo}</td>
                        <td>{order.amount}</td>
                        <td>{order.status}</td>
                        </tr>
                    ))}
            
            </tbody>

        </Table>
    </div>
  )
}
