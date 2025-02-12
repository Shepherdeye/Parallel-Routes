import { getOrderCountFromDB, getSalesFromDB } from '@/utils/data'
import React from 'react'

const DefaultOrder = async () => {

    const orders = await getOrderCountFromDB()
    return (
        <div className=' card bg-red-600'>DefaultOrder{orders}</div>
    )
}

export default DefaultOrder 