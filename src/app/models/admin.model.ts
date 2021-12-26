export interface ResponseCreateAndUpdateSong{
    _id:string,
    music_name:string,
    url:string,
    artists_id:string,
    photo:string
}

export interface CreateSong{
    music_name:string,
    url:string,
    artists_id:string,
    photo:string
}
export interface Response{
    status:number
}

export interface ResponseListSong{
    status: number,
    data:ResponseCreateAndUpdateSong[]
}

export interface Artists{
    _id:string,
    artist_name:string,
    artist_biology:string,
    active_date:string,
    amount_song:number
}

export interface ResponeArtists{
    status:number,
    data:Artists[]
}