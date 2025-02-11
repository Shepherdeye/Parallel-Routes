import { getProfitFromDB } from '@/utils/data'


const ProfitPage = async () => {
    const profit = await getProfitFromDB();
    return (
        <div className='card bg-green-600 '>
            {profit}
        </div>
    )
}

export default ProfitPage