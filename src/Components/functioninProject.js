export function exitsEleinArr(arr, checkelement) {
    return arr.find((ele, index) => {
        return ele.productName === checkelement.productName
    })
}
