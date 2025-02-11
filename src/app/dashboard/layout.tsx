import { ReactNode } from "react"

interface DashboardLayoutProps {
    children: ReactNode;
    orders: ReactNode;
    profit: ReactNode;
}


const DashboardLayout = ({ children, orders, profit }: DashboardLayoutProps) => {
    return (
        <main className="p-10">
            <div className=" flex justify-center gap-7 items-center">
                {orders}
                {profit}
            </div>
            {children}
        </main>
    )
}

export default DashboardLayout