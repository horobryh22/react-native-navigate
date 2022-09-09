const names = ['Ilya', 'Vasya', 'Serega', 'Leha', 'Olya', 'Petya', 'Kolya', 'Igor', 'Nik', 'Sveta']
const age = [11, 12, 12, 14, 15, 15, 17,18,18,20]

export type objType = {
    id: number
    name:string
    age: number
}


export const array: objType[] = new Array(10).fill(null).map((el, index) => {
    return {
        id: index + 1,
        name: names[index],
        age: age[index]
    }
})