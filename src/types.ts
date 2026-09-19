export type Data = {
    id: string
    name: string
    logo: string
    description: string
    type: string
    level: string
    rating: number
    tag: {
        title: string
        color: string
        backgroundColor: string
        borderColor: string
    }
}

export type SelectedTech = Pick<Data, 'id' | 'name' | 'logo' | 'type'>