import { getSalesFromDB } from "@/utils/data"

const SalesPage = async () => {
    const sales = await getSalesFromDB();
    return (
        <div className="card bg-blue-600">
            {sales}
        </div>
    )
}

export default SalesPage