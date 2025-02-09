import { ReactNode } from "react"

interface DashboardLayoutProps {
    children: ReactNode
}


const DashboardLayout = ({ children }: DashboardLayoutProps) => {
    return (
        <small>
            {children}
        </small>
    )
}

export default DashboardLayout