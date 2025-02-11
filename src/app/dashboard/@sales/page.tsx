import { getSalesFromDB } from "@/utils/data"

const SalesPage = async () => {
    const sales = await getSalesFromDB();
    return (
        <div>
            {sales}
        </div>
    )
}

export default SalesPage