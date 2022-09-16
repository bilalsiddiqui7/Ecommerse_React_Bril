import { myAxios } from "./helper";
export const signUp = (user) => {
    return myAxios.post("/getstudents",user)
    .then((response) => response.data);
}

export const changePassword = (user) => {
    return myAxios.post("/changepassword",user)
    .then((response) => response.data);
}

export const registration = (user) => {
    return myAxios.post("/registration",user)
    .then((response) => response.data);
}

export const fetchAllProducts = () => {
    return myAxios.get("/getProductDetails")
    .then((response) => response.data);
}

export const addToCart = (user) => {
    return myAxios.post("/addtocart",user)
    .then((response) => response.data);
}