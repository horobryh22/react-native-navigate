const names = ['Ilya', 'Vasya', 'Serega', 'Leha', 'Olya', 'Petya', 'Kolya', 'Igor', 'Nik', 'Sveta']
const age = [11, 12, 12, 14, 15, 15, 17, 18, 18, 20]

export type UserType = {
    id: number
    name: string
    age: number
}

export type ButtonType = {
    id: number,
    buttonName: string,
    navigate: "Buttons" | 'Sound' | 'ScreenSettings' | 'Brightness' | 'Theme';
}


export const array: UserType[] = new Array(10).fill(null).map((el, index) => {
    return {
        id: index + 1,
        name: names[index],
        age: age[index]
    }
})

export const buttons: ButtonType [] = [
    {buttonName: 'Sound', id: 1, navigate: 'Sound'},
    {buttonName: 'Screen', id: 2, navigate: 'ScreenSettings'},
    {buttonName: 'Brightness', id: 3, navigate: 'Brightness'},
    {buttonName: 'Theme', id: 4, navigate: 'Theme'},
]