import * as React from 'react'
import { View, Text, FlatList } from 'react-native'
import { useAnimeList } from '../Hooks/useAnimeList';

export const FavoriteScreen = () => {
    const { dataAnime, setAnimeId, animeId } = useAnimeList();

    React.useEffect(() => {
        setAnimeId(30400)
    }, [animeId])
    
    return (
        <View className='flex-1 justify-center items-center bg-slate-500'>
            <Text>Meus Favoritos</Text>
            <FlatList data={dataAnime} renderItem={(anime)=>{
                return(
                <View>
                    <Text>{anime.item.title}</Text>
                </View>
                )
            }}/>
        </View>
    )
}