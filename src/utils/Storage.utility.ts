export const saveToStorage = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
};

export const getFromStorage = (key: string): any => {
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : "";
};

export const removeFromStorage = (key: string) =>{
    localStorage.removeItem(key)
}