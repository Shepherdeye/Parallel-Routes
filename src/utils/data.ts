
export async function getOrderCountFromDB() {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return "Orders : 21";
}


export async function getSalesFromDB() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return "Sales : $100,000";
}


export async function getProfitFromDB() {
    await new Promise((resolve) => setTimeout(resolve, 3000));

}
export function getUser() {
    return {
        isAdmin: true,
        isManger: false,
        id: 101
    }
}