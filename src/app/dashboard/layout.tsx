import { ReactNode } from "react"

interface DashboardLayoutProps {
    children: ReactNode;
    orders: ReactNode;
}


const DashboardLayout = ({ children, orders }: DashboardLayoutProps) => {
    return (
        <main className="p-10">
            <div className=" flex justify-center gap-7 items-center">
                {orders}
            </div>
            {children}
        </main>
    )
}

export default DashboardLayout