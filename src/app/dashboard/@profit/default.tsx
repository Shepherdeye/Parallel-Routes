import { getProfitFromDB } from '@/utils/data'
import React from 'react'

const DefaultProfits = async () => {
    const profit = await getProfitFromDB();
    return (
        <div className='card bg-green-600'>DefaultProfits </div>
    )
}

export default DefaultProfits 