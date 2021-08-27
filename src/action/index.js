export const increment = (num1) => {
    return{
        type: "INCREMENT",
        payLoad: num1
    }
}
export const decrement = () => {
    return{
        type: "DECREMENT"
    }
}