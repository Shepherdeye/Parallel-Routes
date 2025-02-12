import { getSalesFromDB } from '@/utils/data'
import React from 'react'

const DefaultSales = async () => {
    const sales = getSalesFromDB();
    return (
        <div className='card bg-blue-400'>DefaultSales {sales} </div>
    )
}

export default DefaultSales 