import { ReactNode } from "react"

interface DashboardLayoutProps {
    children: ReactNode;
    orders: ReactNode;
    profit: ReactNode;
    sales: ReactNode;
}


const DashboardLayout = ({ children, orders, profit, sales }: DashboardLayoutProps) => {
    return (
        <main className="p-10">
            <div className=" flex justify-center gap-7 items-center">
                {sales}
                {profit}
                {orders}
            </div>
            {children}
        </main>
    )
}

export default DashboardLayout