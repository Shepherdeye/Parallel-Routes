import { getOrderCountFromDB } from "@/utils/data"


const OrdersPage = async () => {
    const orders = await getOrderCountFromDB();
    return (
        <div className="card bg-red-600 ">
            {orders}
        </div>
    )
}

export default OrdersPage