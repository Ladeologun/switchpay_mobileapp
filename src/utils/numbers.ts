
export function formatMoney(number: number ): [string, string] {
    //spile number into whole and decimal parts
    const [whole, decimal] = number.toFixed(2).split(".");
    //format whole part with commas
    const formattedWhole = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return [formattedWhole, decimal];
    
}