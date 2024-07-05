import { getFromStorage, removeFromStorage, saveToStorage } from "../utils/Storage.utility"

export const setTheme = (theme: string)=>{
    if(theme === "dark"){
        saveToStorage("theme","dark")
    }
    else{
        saveToStorage("theme","light")
    }
}

export const getTheme = ():string => {
    const theme = getFromStorage("theme")
    if(theme === "light" || theme === "dark"){
        return theme
    }
    else{
        setTheme("light")
        return "light"
    }
}

export const setToken = (token: string)=>{
    if (token !== ""){
        saveToStorage("token", token)
    }
}

export const getToken = ():string =>{
    const token = getFromStorage("token")
    if(token !== ""){
        return token
    }
    else{
        return ""
    }
}

export const removeToken = ()=>{
    removeFromStorage("token")
}