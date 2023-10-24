// "LIDIA".toLowerCase() //output => "lidia"
// console.log("hello world", "2", "hello!!!") //output => "hello world 2 hello!!!" in console
// Array.push("lidia", "kovac", "ivan")
// Array.pop() //nessun parametro

//creaimo funzione per intestazione compiti
let intestaCompiti = function (numeroEsercizio) {
    //<<<< parametro
    console.log("ESERCIZIO " + numeroEsercizio)
}

intestaCompiti(12) //ESERCIZIO 12
intestaCompiti(40) //ESERCIZIO 40
intestaCompiti() //ESERCIZIO undefined

for (let i = 0; i < 12; i++) {
    intestaCompiti(i)
}

let volumeDelParallelepipedo = function (x, y, z) {
    return x * y * z
    //return = risultato della funzione
}

let risultato = volumeDelParallelepipedo(4, 5, 8)
console.log(risultato)

const parallelpipedo = {
    altezza: 45,
    larghezza: 65,
    profondita: 12,
}

let unAltroRisultato = volumeDelParallelepipedo(
    parallelpipedo.larghezza,
    parallelpipedo.altezza,
    parallelpipedo.profondita
)
console.log(unAltroRisultato)

const musical = [
    {
        id: 3361193,
        readable: true,
        title: "Ocean Avenue",
        title_short: "Ocean Avenue",
        title_version: "",
        link: "https://www.deezer.com/track/3361193",
        duration: 198,
        rank: 581889,
        explicit_lyrics: false,
        explicit_content_lyrics: 0,
        explicit_content_cover: 0,
        preview:
            "https://cdns-preview-c.dzcdn.net/stream/c-c77717aa31bd3a4a124b5bde90fc3ef2-8.mp3",
        md5_image: "8acb8db941872231e4f75dc903cbc1e9",
        artist: {
            id: 1184,
            name: "Yellowcard",
            link: "https://www.deezer.com/artist/1184",
            picture: "https://api.deezer.com/artist/1184/image",
            picture_small:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/56x56-000000-80-0-0.jpg",
            picture_medium:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/250x250-000000-80-0-0.jpg",
            picture_big:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/500x500-000000-80-0-0.jpg",
            picture_xl:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/1000x1000-000000-80-0-0.jpg",
            tracklist:
                "https://striveschool-api.herokuapp.com/api/deezer/artist/1184/top?limit=50",
            type: "artist",
        },
        album: {
            id: 319831,
            title: "Ocean Avenue",
            cover: "https://api.deezer.com/album/319831/image",
            cover_small:
                "https://e-cdns-images.dzcdn.net/images/cover/8acb8db941872231e4f75dc903cbc1e9/56x56-000000-80-0-0.jpg",
            cover_medium:
                "https://e-cdns-images.dzcdn.net/images/cover/8acb8db941872231e4f75dc903cbc1e9/250x250-000000-80-0-0.jpg",
            cover_big:
                "https://e-cdns-images.dzcdn.net/images/cover/8acb8db941872231e4f75dc903cbc1e9/500x500-000000-80-0-0.jpg",
            cover_xl:
                "https://e-cdns-images.dzcdn.net/images/cover/8acb8db941872231e4f75dc903cbc1e9/1000x1000-000000-80-0-0.jpg",
            md5_image: "8acb8db941872231e4f75dc903cbc1e9",
            tracklist: "https://api.deezer.com/album/319831/tracks",
            type: "album",
        },
        type: "track",
    },
    {
        id: 3094156,
        readable: true,
        title: "Lights And Sounds",
        title_short: "Lights And Sounds",
        title_version: "",
        link: "https://www.deezer.com/track/3094156",
        duration: 208,
        rank: 481722,
        explicit_lyrics: false,
        explicit_content_lyrics: 0,
        explicit_content_cover: 0,
        preview:
            "https://cdns-preview-6.dzcdn.net/stream/c-62626b0b8d8d5335b80074e626336970-4.mp3",
        md5_image: "a50bb210cb14b7f6816663bb2114b9d5",
        artist: {
            id: 1184,
            name: "Yellowcard",
            link: "https://www.deezer.com/artist/1184",
            picture: "https://api.deezer.com/artist/1184/image",
            picture_small:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/56x56-000000-80-0-0.jpg",
            picture_medium:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/250x250-000000-80-0-0.jpg",
            picture_big:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/500x500-000000-80-0-0.jpg",
            picture_xl:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/1000x1000-000000-80-0-0.jpg",
            tracklist:
                "https://striveschool-api.herokuapp.com/api/deezer/artist/1184/top?limit=50",
            type: "artist",
        },
        album: {
            id: 299519,
            title: "Lights And Sounds",
            cover: "https://api.deezer.com/album/299519/image",
            cover_small:
                "https://e-cdns-images.dzcdn.net/images/cover/a50bb210cb14b7f6816663bb2114b9d5/56x56-000000-80-0-0.jpg",
            cover_medium:
                "https://e-cdns-images.dzcdn.net/images/cover/a50bb210cb14b7f6816663bb2114b9d5/250x250-000000-80-0-0.jpg",
            cover_big:
                "https://e-cdns-images.dzcdn.net/images/cover/a50bb210cb14b7f6816663bb2114b9d5/500x500-000000-80-0-0.jpg",
            cover_xl:
                "https://e-cdns-images.dzcdn.net/images/cover/a50bb210cb14b7f6816663bb2114b9d5/1000x1000-000000-80-0-0.jpg",
            md5_image: "a50bb210cb14b7f6816663bb2114b9d5",
            tracklist: "https://api.deezer.com/album/299519/tracks",
            type: "album",
        },
        type: "track",
    },
    {
        id: 3361196,
        readable: true,
        title: "Only One",
        title_short: "Only One",
        title_version: "",
        link: "https://www.deezer.com/track/3361196",
        duration: 257,
        rank: 483174,
        explicit_lyrics: false,
        explicit_content_lyrics: 0,
        explicit_content_cover: 0,
        preview:
            "https://cdns-preview-3.dzcdn.net/stream/c-3c4afbb3e72ce39a2e50348ba06a8019-7.mp3",
        md5_image: "8acb8db941872231e4f75dc903cbc1e9",
        artist: {
            id: 1184,
            name: "Yellowcard",
            link: "https://www.deezer.com/artist/1184",
            picture: "https://api.deezer.com/artist/1184/image",
            picture_small:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/56x56-000000-80-0-0.jpg",
            picture_medium:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/250x250-000000-80-0-0.jpg",
            picture_big:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/500x500-000000-80-0-0.jpg",
            picture_xl:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/1000x1000-000000-80-0-0.jpg",
            tracklist:
                "https://striveschool-api.herokuapp.com/api/deezer/artist/1184/top?limit=50",
            type: "artist",
        },
        album: {
            id: 319831,
            title: "Ocean Avenue",
            cover: "https://api.deezer.com/album/319831/image",
            cover_small:
                "https://e-cdns-images.dzcdn.net/images/cover/8acb8db941872231e4f75dc903cbc1e9/56x56-000000-80-0-0.jpg",
            cover_medium:
                "https://e-cdns-images.dzcdn.net/images/cover/8acb8db941872231e4f75dc903cbc1e9/250x250-000000-80-0-0.jpg",
            cover_big:
                "https://e-cdns-images.dzcdn.net/images/cover/8acb8db941872231e4f75dc903cbc1e9/500x500-000000-80-0-0.jpg",
            cover_xl:
                "https://e-cdns-images.dzcdn.net/images/cover/8acb8db941872231e4f75dc903cbc1e9/1000x1000-000000-80-0-0.jpg",
            md5_image: "8acb8db941872231e4f75dc903cbc1e9",
            tracklist: "https://api.deezer.com/album/319831/tracks",
            type: "album",
        },
        type: "track",
    },
    {
        id: 54751661,
        readable: true,
        title: "Awakening",
        title_short: "Awakening",
        title_version: "",
        link: "https://www.deezer.com/track/54751661",
        duration: 263,
        rank: 402155,
        explicit_lyrics: false,
        explicit_content_lyrics: 0,
        explicit_content_cover: 2,
        preview:
            "https://cdns-preview-3.dzcdn.net/stream/c-32b4c8289df1a7fa19f9e8ae70d5c0c3-4.mp3",
        md5_image: "c765abbaea1d9a38be99361fed577604",
        artist: {
            id: 1184,
            name: "Yellowcard",
            link: "https://www.deezer.com/artist/1184",
            picture: "https://api.deezer.com/artist/1184/image",
            picture_small:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/56x56-000000-80-0-0.jpg",
            picture_medium:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/250x250-000000-80-0-0.jpg",
            picture_big:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/500x500-000000-80-0-0.jpg",
            picture_xl:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/1000x1000-000000-80-0-0.jpg",
            tracklist:
                "https://striveschool-api.herokuapp.com/api/deezer/artist/1184/top?limit=50",
            type: "artist",
        },
        album: {
            id: 5327691,
            title: "Southern Air",
            cover: "https://api.deezer.com/album/5327691/image",
            cover_small:
                "https://e-cdns-images.dzcdn.net/images/cover/c765abbaea1d9a38be99361fed577604/56x56-000000-80-0-0.jpg",
            cover_medium:
                "https://e-cdns-images.dzcdn.net/images/cover/c765abbaea1d9a38be99361fed577604/250x250-000000-80-0-0.jpg",
            cover_big:
                "https://e-cdns-images.dzcdn.net/images/cover/c765abbaea1d9a38be99361fed577604/500x500-000000-80-0-0.jpg",
            cover_xl:
                "https://e-cdns-images.dzcdn.net/images/cover/c765abbaea1d9a38be99361fed577604/1000x1000-000000-80-0-0.jpg",
            md5_image: "c765abbaea1d9a38be99361fed577604",
            tracklist: "https://api.deezer.com/album/5327691/tracks",
            type: "album",
        },
        type: "track",
    },
    {
        id: 3361194,
        readable: true,
        title: "Empty Apartment",
        title_short: "Empty Apartment",
        title_version: "",
        link: "https://www.deezer.com/track/3361194",
        duration: 216,
        rank: 358390,
        explicit_lyrics: false,
        explicit_content_lyrics: 0,
        explicit_content_cover: 0,
        preview:
            "https://cdns-preview-d.dzcdn.net/stream/c-dbbebd3d3b576993f70ef4b2360a3bce-7.mp3",
        md5_image: "8acb8db941872231e4f75dc903cbc1e9",
        artist: {
            id: 1184,
            name: "Yellowcard",
            link: "https://www.deezer.com/artist/1184",
            picture: "https://api.deezer.com/artist/1184/image",
            picture_small:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/56x56-000000-80-0-0.jpg",
            picture_medium:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/250x250-000000-80-0-0.jpg",
            picture_big:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/500x500-000000-80-0-0.jpg",
            picture_xl:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/1000x1000-000000-80-0-0.jpg",
            tracklist:
                "https://striveschool-api.herokuapp.com/api/deezer/artist/1184/top?limit=50",
            type: "artist",
        },
        album: {
            id: 319831,
            title: "Ocean Avenue",
            cover: "https://api.deezer.com/album/319831/image",
            cover_small:
                "https://e-cdns-images.dzcdn.net/images/cover/8acb8db941872231e4f75dc903cbc1e9/56x56-000000-80-0-0.jpg",
            cover_medium:
                "https://e-cdns-images.dzcdn.net/images/cover/8acb8db941872231e4f75dc903cbc1e9/250x250-000000-80-0-0.jpg",
            cover_big:
                "https://e-cdns-images.dzcdn.net/images/cover/8acb8db941872231e4f75dc903cbc1e9/500x500-000000-80-0-0.jpg",
            cover_xl:
                "https://e-cdns-images.dzcdn.net/images/cover/8acb8db941872231e4f75dc903cbc1e9/1000x1000-000000-80-0-0.jpg",
            md5_image: "8acb8db941872231e4f75dc903cbc1e9",
            tracklist: "https://api.deezer.com/album/319831/tracks",
            type: "album",
        },
        type: "track",
    },
    {
        id: 3361192,
        readable: true,
        title: "Breathing",
        title_short: "Breathing",
        title_version: "",
        link: "https://www.deezer.com/track/3361192",
        duration: 218,
        rank: 454397,
        explicit_lyrics: false,
        explicit_content_lyrics: 0,
        explicit_content_cover: 0,
        preview:
            "https://cdns-preview-1.dzcdn.net/stream/c-1e18359decada3c0fa9df7a4cc666288-8.mp3",
        md5_image: "8acb8db941872231e4f75dc903cbc1e9",
        artist: {
            id: 1184,
            name: "Yellowcard",
            link: "https://www.deezer.com/artist/1184",
            picture: "https://api.deezer.com/artist/1184/image",
            picture_small:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/56x56-000000-80-0-0.jpg",
            picture_medium:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/250x250-000000-80-0-0.jpg",
            picture_big:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/500x500-000000-80-0-0.jpg",
            picture_xl:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/1000x1000-000000-80-0-0.jpg",
            tracklist:
                "https://striveschool-api.herokuapp.com/api/deezer/artist/1184/top?limit=50",
            type: "artist",
        },
        album: {
            id: 319831,
            title: "Ocean Avenue",
            cover: "https://api.deezer.com/album/319831/image",
            cover_small:
                "https://e-cdns-images.dzcdn.net/images/cover/8acb8db941872231e4f75dc903cbc1e9/56x56-000000-80-0-0.jpg",
            cover_medium:
                "https://e-cdns-images.dzcdn.net/images/cover/8acb8db941872231e4f75dc903cbc1e9/250x250-000000-80-0-0.jpg",
            cover_big:
                "https://e-cdns-images.dzcdn.net/images/cover/8acb8db941872231e4f75dc903cbc1e9/500x500-000000-80-0-0.jpg",
            cover_xl:
                "https://e-cdns-images.dzcdn.net/images/cover/8acb8db941872231e4f75dc903cbc1e9/1000x1000-000000-80-0-0.jpg",
            md5_image: "8acb8db941872231e4f75dc903cbc1e9",
            tracklist: "https://api.deezer.com/album/319831/tracks",
            type: "album",
        },
        type: "track",
    },
    {
        id: 3094160,
        readable: true,
        title: "Rough Landing, Holly",
        title_short: "Rough Landing, Holly",
        title_version: "",
        link: "https://www.deezer.com/track/3094160",
        duration: 213,
        rank: 384258,
        explicit_lyrics: false,
        explicit_content_lyrics: 3,
        explicit_content_cover: 0,
        preview:
            "https://cdns-preview-d.dzcdn.net/stream/c-da1f90907eadb9f4fe9aedc0a7a1e636-4.mp3",
        md5_image: "a50bb210cb14b7f6816663bb2114b9d5",
        artist: {
            id: 1184,
            name: "Yellowcard",
            link: "https://www.deezer.com/artist/1184",
            picture: "https://api.deezer.com/artist/1184/image",
            picture_small:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/56x56-000000-80-0-0.jpg",
            picture_medium:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/250x250-000000-80-0-0.jpg",
            picture_big:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/500x500-000000-80-0-0.jpg",
            picture_xl:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/1000x1000-000000-80-0-0.jpg",
            tracklist:
                "https://striveschool-api.herokuapp.com/api/deezer/artist/1184/top?limit=50",
            type: "artist",
        },
        album: {
            id: 299519,
            title: "Lights And Sounds",
            cover: "https://api.deezer.com/album/299519/image",
            cover_small:
                "https://e-cdns-images.dzcdn.net/images/cover/a50bb210cb14b7f6816663bb2114b9d5/56x56-000000-80-0-0.jpg",
            cover_medium:
                "https://e-cdns-images.dzcdn.net/images/cover/a50bb210cb14b7f6816663bb2114b9d5/250x250-000000-80-0-0.jpg",
            cover_big:
                "https://e-cdns-images.dzcdn.net/images/cover/a50bb210cb14b7f6816663bb2114b9d5/500x500-000000-80-0-0.jpg",
            cover_xl:
                "https://e-cdns-images.dzcdn.net/images/cover/a50bb210cb14b7f6816663bb2114b9d5/1000x1000-000000-80-0-0.jpg",
            md5_image: "a50bb210cb14b7f6816663bb2114b9d5",
            tracklist: "https://api.deezer.com/album/299519/tracks",
            type: "album",
        },
        type: "track",
    },
    {
        id: 3361191,
        readable: true,
        title: "Way Away",
        title_short: "Way Away",
        title_version: "",
        link: "https://www.deezer.com/track/3361191",
        duration: 202,
        rank: 427806,
        explicit_lyrics: false,
        explicit_content_lyrics: 0,
        explicit_content_cover: 0,
        preview:
            "https://cdns-preview-b.dzcdn.net/stream/c-bc9537a8fc77f37373cc0c1e13092a4c-8.mp3",
        md5_image: "8acb8db941872231e4f75dc903cbc1e9",
        artist: {
            id: 1184,
            name: "Yellowcard",
            link: "https://www.deezer.com/artist/1184",
            picture: "https://api.deezer.com/artist/1184/image",
            picture_small:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/56x56-000000-80-0-0.jpg",
            picture_medium:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/250x250-000000-80-0-0.jpg",
            picture_big:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/500x500-000000-80-0-0.jpg",
            picture_xl:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/1000x1000-000000-80-0-0.jpg",
            tracklist:
                "https://striveschool-api.herokuapp.com/api/deezer/artist/1184/top?limit=50",
            type: "artist",
        },
        album: {
            id: 319831,
            title: "Ocean Avenue",
            cover: "https://api.deezer.com/album/319831/image",
            cover_small:
                "https://e-cdns-images.dzcdn.net/images/cover/8acb8db941872231e4f75dc903cbc1e9/56x56-000000-80-0-0.jpg",
            cover_medium:
                "https://e-cdns-images.dzcdn.net/images/cover/8acb8db941872231e4f75dc903cbc1e9/250x250-000000-80-0-0.jpg",
            cover_big:
                "https://e-cdns-images.dzcdn.net/images/cover/8acb8db941872231e4f75dc903cbc1e9/500x500-000000-80-0-0.jpg",
            cover_xl:
                "https://e-cdns-images.dzcdn.net/images/cover/8acb8db941872231e4f75dc903cbc1e9/1000x1000-000000-80-0-0.jpg",
            md5_image: "8acb8db941872231e4f75dc903cbc1e9",
            tracklist: "https://api.deezer.com/album/319831/tracks",
            type: "album",
        },
        type: "track",
    },
    {
        id: 3361201,
        readable: true,
        title: "Believe",
        title_short: "Believe",
        title_version: "",
        link: "https://www.deezer.com/track/3361201",
        duration: 271,
        rank: 323446,
        explicit_lyrics: false,
        explicit_content_lyrics: 0,
        explicit_content_cover: 0,
        preview:
            "https://cdns-preview-1.dzcdn.net/stream/c-126d9f7f8c0caaaf161cc11f560ade16-7.mp3",
        md5_image: "8acb8db941872231e4f75dc903cbc1e9",
        artist: {
            id: 1184,
            name: "Yellowcard",
            link: "https://www.deezer.com/artist/1184",
            picture: "https://api.deezer.com/artist/1184/image",
            picture_small:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/56x56-000000-80-0-0.jpg",
            picture_medium:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/250x250-000000-80-0-0.jpg",
            picture_big:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/500x500-000000-80-0-0.jpg",
            picture_xl:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/1000x1000-000000-80-0-0.jpg",
            tracklist:
                "https://striveschool-api.herokuapp.com/api/deezer/artist/1184/top?limit=50",
            type: "artist",
        },
        album: {
            id: 319831,
            title: "Ocean Avenue",
            cover: "https://api.deezer.com/album/319831/image",
            cover_small:
                "https://e-cdns-images.dzcdn.net/images/cover/8acb8db941872231e4f75dc903cbc1e9/56x56-000000-80-0-0.jpg",
            cover_medium:
                "https://e-cdns-images.dzcdn.net/images/cover/8acb8db941872231e4f75dc903cbc1e9/250x250-000000-80-0-0.jpg",
            cover_big:
                "https://e-cdns-images.dzcdn.net/images/cover/8acb8db941872231e4f75dc903cbc1e9/500x500-000000-80-0-0.jpg",
            cover_xl:
                "https://e-cdns-images.dzcdn.net/images/cover/8acb8db941872231e4f75dc903cbc1e9/1000x1000-000000-80-0-0.jpg",
            md5_image: "8acb8db941872231e4f75dc903cbc1e9",
            tracklist: "https://api.deezer.com/album/319831/tracks",
            type: "album",
        },
        type: "track",
    },
    {
        id: 3361197,
        readable: true,
        title: "Miles Apart",
        title_short: "Miles Apart",
        title_version: "",
        link: "https://www.deezer.com/track/3361197",
        duration: 212,
        rank: 209252,
        explicit_lyrics: false,
        explicit_content_lyrics: 0,
        explicit_content_cover: 0,
        preview:
            "https://cdns-preview-d.dzcdn.net/stream/c-dd8ffe52f9cfc0052ea2f5fb4769272e-8.mp3",
        md5_image: "8acb8db941872231e4f75dc903cbc1e9",
        artist: {
            id: 1184,
            name: "Yellowcard",
            link: "https://www.deezer.com/artist/1184",
            picture: "https://api.deezer.com/artist/1184/image",
            picture_small:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/56x56-000000-80-0-0.jpg",
            picture_medium:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/250x250-000000-80-0-0.jpg",
            picture_big:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/500x500-000000-80-0-0.jpg",
            picture_xl:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/1000x1000-000000-80-0-0.jpg",
            tracklist:
                "https://striveschool-api.herokuapp.com/api/deezer/artist/1184/top?limit=50",
            type: "artist",
        },
        album: {
            id: 319831,
            title: "Ocean Avenue",
            cover: "https://api.deezer.com/album/319831/image",
            cover_small:
                "https://e-cdns-images.dzcdn.net/images/cover/8acb8db941872231e4f75dc903cbc1e9/56x56-000000-80-0-0.jpg",
            cover_medium:
                "https://e-cdns-images.dzcdn.net/images/cover/8acb8db941872231e4f75dc903cbc1e9/250x250-000000-80-0-0.jpg",
            cover_big:
                "https://e-cdns-images.dzcdn.net/images/cover/8acb8db941872231e4f75dc903cbc1e9/500x500-000000-80-0-0.jpg",
            cover_xl:
                "https://e-cdns-images.dzcdn.net/images/cover/8acb8db941872231e4f75dc903cbc1e9/1000x1000-000000-80-0-0.jpg",
            md5_image: "8acb8db941872231e4f75dc903cbc1e9",
            tracklist: "https://api.deezer.com/album/319831/tracks",
            type: "album",
        },
        type: "track",
    },
    {
        id: 126173265,
        readable: true,
        title: "Rest In Peace",
        title_short: "Rest In Peace",
        title_version: "",
        link: "https://www.deezer.com/track/126173265",
        duration: 258,
        rank: 237357,
        explicit_lyrics: false,
        explicit_content_lyrics: 0,
        explicit_content_cover: 2,
        preview:
            "https://cdns-preview-5.dzcdn.net/stream/c-5a366f7d091ffd8d8e35b28c22d7cdc4-5.mp3",
        md5_image: "ea6c8cfcad52e53a0f17010fc03fbd7c",
        artist: {
            id: 1184,
            name: "Yellowcard",
            link: "https://www.deezer.com/artist/1184",
            picture: "https://api.deezer.com/artist/1184/image",
            picture_small:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/56x56-000000-80-0-0.jpg",
            picture_medium:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/250x250-000000-80-0-0.jpg",
            picture_big:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/500x500-000000-80-0-0.jpg",
            picture_xl:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/1000x1000-000000-80-0-0.jpg",
            tracklist:
                "https://striveschool-api.herokuapp.com/api/deezer/artist/1184/top?limit=50",
            type: "artist",
        },
        album: {
            id: 13283947,
            title: "Yellowcard",
            cover: "https://api.deezer.com/album/13283947/image",
            cover_small:
                "https://e-cdns-images.dzcdn.net/images/cover/ea6c8cfcad52e53a0f17010fc03fbd7c/56x56-000000-80-0-0.jpg",
            cover_medium:
                "https://e-cdns-images.dzcdn.net/images/cover/ea6c8cfcad52e53a0f17010fc03fbd7c/250x250-000000-80-0-0.jpg",
            cover_big:
                "https://e-cdns-images.dzcdn.net/images/cover/ea6c8cfcad52e53a0f17010fc03fbd7c/500x500-000000-80-0-0.jpg",
            cover_xl:
                "https://e-cdns-images.dzcdn.net/images/cover/ea6c8cfcad52e53a0f17010fc03fbd7c/1000x1000-000000-80-0-0.jpg",
            md5_image: "ea6c8cfcad52e53a0f17010fc03fbd7c",
            tracklist: "https://api.deezer.com/album/13283947/tracks",
            type: "album",
        },
        type: "track",
    },
    {
        id: 3094157,
        readable: true,
        title: "Down On My Head",
        title_short: "Down On My Head",
        title_version: "",
        link: "https://www.deezer.com/track/3094157",
        duration: 212,
        rank: 215076,
        explicit_lyrics: false,
        explicit_content_lyrics: 3,
        explicit_content_cover: 0,
        preview:
            "https://cdns-preview-1.dzcdn.net/stream/c-103db99a2f33358bec638321f6f94ae7-4.mp3",
        md5_image: "a50bb210cb14b7f6816663bb2114b9d5",
        artist: {
            id: 1184,
            name: "Yellowcard",
            link: "https://www.deezer.com/artist/1184",
            picture: "https://api.deezer.com/artist/1184/image",
            picture_small:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/56x56-000000-80-0-0.jpg",
            picture_medium:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/250x250-000000-80-0-0.jpg",
            picture_big:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/500x500-000000-80-0-0.jpg",
            picture_xl:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/1000x1000-000000-80-0-0.jpg",
            tracklist:
                "https://striveschool-api.herokuapp.com/api/deezer/artist/1184/top?limit=50",
            type: "artist",
        },
        album: {
            id: 299519,
            title: "Lights And Sounds",
            cover: "https://api.deezer.com/album/299519/image",
            cover_small:
                "https://e-cdns-images.dzcdn.net/images/cover/a50bb210cb14b7f6816663bb2114b9d5/56x56-000000-80-0-0.jpg",
            cover_medium:
                "https://e-cdns-images.dzcdn.net/images/cover/a50bb210cb14b7f6816663bb2114b9d5/250x250-000000-80-0-0.jpg",
            cover_big:
                "https://e-cdns-images.dzcdn.net/images/cover/a50bb210cb14b7f6816663bb2114b9d5/500x500-000000-80-0-0.jpg",
            cover_xl:
                "https://e-cdns-images.dzcdn.net/images/cover/a50bb210cb14b7f6816663bb2114b9d5/1000x1000-000000-80-0-0.jpg",
            md5_image: "a50bb210cb14b7f6816663bb2114b9d5",
            tracklist: "https://api.deezer.com/album/299519/tracks",
            type: "album",
        },
        type: "track",
    },
    {
        id: 29372821,
        readable: true,
        title: "Yellow Calx",
        title_short: "Yellow Calx",
        title_version: "",
        link: "https://www.deezer.com/track/29372821",
        duration: 184,
        rank: 189236,
        explicit_lyrics: false,
        explicit_content_lyrics: 0,
        explicit_content_cover: 2,
        preview:
            "https://cdns-preview-6.dzcdn.net/stream/c-668d9d50c534a5ceedf8df78e5305deb-1.mp3",
        md5_image: "3aa42e96e2c621d7e4caf305812a6398",
        artist: {
            id: 580,
            name: "Aphex Twin",
            link: "https://www.deezer.com/artist/580",
            picture: "https://api.deezer.com/artist/580/image",
            picture_small:
                "https://e-cdns-images.dzcdn.net/images/artist/22545b72e8b8eecd902824d600badcf3/56x56-000000-80-0-0.jpg",
            picture_medium:
                "https://e-cdns-images.dzcdn.net/images/artist/22545b72e8b8eecd902824d600badcf3/250x250-000000-80-0-0.jpg",
            picture_big:
                "https://e-cdns-images.dzcdn.net/images/artist/22545b72e8b8eecd902824d600badcf3/500x500-000000-80-0-0.jpg",
            picture_xl:
                "https://e-cdns-images.dzcdn.net/images/artist/22545b72e8b8eecd902824d600badcf3/1000x1000-000000-80-0-0.jpg",
            tracklist:
                "https://striveschool-api.herokuapp.com/api/deezer/artist/580/top?limit=50",
            type: "artist",
        },
        album: {
            id: 2795201,
            title: "Richard D. James Album",
            cover: "https://api.deezer.com/album/2795201/image",
            cover_small:
                "https://e-cdns-images.dzcdn.net/images/cover/3aa42e96e2c621d7e4caf305812a6398/56x56-000000-80-0-0.jpg",
            cover_medium:
                "https://e-cdns-images.dzcdn.net/images/cover/3aa42e96e2c621d7e4caf305812a6398/250x250-000000-80-0-0.jpg",
            cover_big:
                "https://e-cdns-images.dzcdn.net/images/cover/3aa42e96e2c621d7e4caf305812a6398/500x500-000000-80-0-0.jpg",
            cover_xl:
                "https://e-cdns-images.dzcdn.net/images/cover/3aa42e96e2c621d7e4caf305812a6398/1000x1000-000000-80-0-0.jpg",
            md5_image: "3aa42e96e2c621d7e4caf305812a6398",
            tracklist: "https://api.deezer.com/album/2795201/tracks",
            type: "album",
        },
        type: "track",
    },
    {
        id: 2285153017,
        readable: true,
        title: "Childhood Eyes",
        title_short: "Childhood Eyes",
        title_version: "",
        link: "https://www.deezer.com/track/2285153017",
        duration: 193,
        rank: 279250,
        explicit_lyrics: false,
        explicit_content_lyrics: 0,
        explicit_content_cover: 2,
        preview:
            "https://cdns-preview-d.dzcdn.net/stream/c-dea8a42ff25f66443b3c46f6e650b041-2.mp3",
        md5_image: "200afb09ca33b6c4f4a618744753c5c7",
        artist: {
            id: 1184,
            name: "Yellowcard",
            link: "https://www.deezer.com/artist/1184",
            picture: "https://api.deezer.com/artist/1184/image",
            picture_small:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/56x56-000000-80-0-0.jpg",
            picture_medium:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/250x250-000000-80-0-0.jpg",
            picture_big:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/500x500-000000-80-0-0.jpg",
            picture_xl:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/1000x1000-000000-80-0-0.jpg",
            tracklist:
                "https://striveschool-api.herokuapp.com/api/deezer/artist/1184/top?limit=50",
            type: "artist",
        },
        album: {
            id: 441750887,
            title: "Childhood Eyes",
            cover: "https://api.deezer.com/album/441750887/image",
            cover_small:
                "https://e-cdns-images.dzcdn.net/images/cover/200afb09ca33b6c4f4a618744753c5c7/56x56-000000-80-0-0.jpg",
            cover_medium:
                "https://e-cdns-images.dzcdn.net/images/cover/200afb09ca33b6c4f4a618744753c5c7/250x250-000000-80-0-0.jpg",
            cover_big:
                "https://e-cdns-images.dzcdn.net/images/cover/200afb09ca33b6c4f4a618744753c5c7/500x500-000000-80-0-0.jpg",
            cover_xl:
                "https://e-cdns-images.dzcdn.net/images/cover/200afb09ca33b6c4f4a618744753c5c7/1000x1000-000000-80-0-0.jpg",
            md5_image: "200afb09ca33b6c4f4a618744753c5c7",
            tracklist: "https://api.deezer.com/album/441750887/tracks",
            type: "album",
        },
        type: "track",
    },
    {
        id: 3224886,
        readable: true,
        title: "Ocean Avenue",
        title_short: "Ocean Avenue",
        title_version: "",
        link: "https://www.deezer.com/track/3224886",
        duration: 199,
        rank: 223468,
        explicit_lyrics: false,
        explicit_content_lyrics: 0,
        explicit_content_cover: 0,
        preview:
            "https://cdns-preview-7.dzcdn.net/stream/c-7d349eebbb66bcb05cbaa653508b798a-5.mp3",
        md5_image: "4a3b7893604bd41c9c098229ede33126",
        artist: {
            id: 1184,
            name: "Yellowcard",
            link: "https://www.deezer.com/artist/1184",
            picture: "https://api.deezer.com/artist/1184/image",
            picture_small:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/56x56-000000-80-0-0.jpg",
            picture_medium:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/250x250-000000-80-0-0.jpg",
            picture_big:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/500x500-000000-80-0-0.jpg",
            picture_xl:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/1000x1000-000000-80-0-0.jpg",
            tracklist:
                "https://striveschool-api.herokuapp.com/api/deezer/artist/1184/top?limit=50",
            type: "artist",
        },
        album: {
            id: 308466,
            title: "Ocean Avenue",
            cover: "https://api.deezer.com/album/308466/image",
            cover_small:
                "https://e-cdns-images.dzcdn.net/images/cover/4a3b7893604bd41c9c098229ede33126/56x56-000000-80-0-0.jpg",
            cover_medium:
                "https://e-cdns-images.dzcdn.net/images/cover/4a3b7893604bd41c9c098229ede33126/250x250-000000-80-0-0.jpg",
            cover_big:
                "https://e-cdns-images.dzcdn.net/images/cover/4a3b7893604bd41c9c098229ede33126/500x500-000000-80-0-0.jpg",
            cover_xl:
                "https://e-cdns-images.dzcdn.net/images/cover/4a3b7893604bd41c9c098229ede33126/1000x1000-000000-80-0-0.jpg",
            md5_image: "4a3b7893604bd41c9c098229ede33126",
            tracklist: "https://api.deezer.com/album/308466/tracks",
            type: "album",
        },
        type: "track",
    },
    {
        id: 1111680222,
        readable: true,
        title: "Yellowcake",
        title_short: "Yellowcake",
        title_version: "",
        link: "https://www.deezer.com/track/1111680222",
        duration: 169,
        rank: 280141,
        explicit_lyrics: false,
        explicit_content_lyrics: 0,
        explicit_content_cover: 2,
        preview:
            "https://cdns-preview-6.dzcdn.net/stream/c-63e308192e48bb750c36b6bf225f35af-3.mp3",
        md5_image: "fc548f486690292a2fbc00c2752111e6",
        artist: {
            id: 3405,
            name: "Kaki King",
            link: "https://www.deezer.com/artist/3405",
            picture: "https://api.deezer.com/artist/3405/image",
            picture_small:
                "https://e-cdns-images.dzcdn.net/images/artist/6fc67fa55e66e36ba7a8c437134cb6dd/56x56-000000-80-0-0.jpg",
            picture_medium:
                "https://e-cdns-images.dzcdn.net/images/artist/6fc67fa55e66e36ba7a8c437134cb6dd/250x250-000000-80-0-0.jpg",
            picture_big:
                "https://e-cdns-images.dzcdn.net/images/artist/6fc67fa55e66e36ba7a8c437134cb6dd/500x500-000000-80-0-0.jpg",
            picture_xl:
                "https://e-cdns-images.dzcdn.net/images/artist/6fc67fa55e66e36ba7a8c437134cb6dd/1000x1000-000000-80-0-0.jpg",
            tracklist:
                "https://striveschool-api.herokuapp.com/api/deezer/artist/3405/top?limit=50",
            type: "artist",
        },
        album: {
            id: 180151132,
            title: "Until We Felt Red",
            cover: "https://api.deezer.com/album/180151132/image",
            cover_small:
                "https://e-cdns-images.dzcdn.net/images/cover/fc548f486690292a2fbc00c2752111e6/56x56-000000-80-0-0.jpg",
            cover_medium:
                "https://e-cdns-images.dzcdn.net/images/cover/fc548f486690292a2fbc00c2752111e6/250x250-000000-80-0-0.jpg",
            cover_big:
                "https://e-cdns-images.dzcdn.net/images/cover/fc548f486690292a2fbc00c2752111e6/500x500-000000-80-0-0.jpg",
            cover_xl:
                "https://e-cdns-images.dzcdn.net/images/cover/fc548f486690292a2fbc00c2752111e6/1000x1000-000000-80-0-0.jpg",
            md5_image: "fc548f486690292a2fbc00c2752111e6",
            tracklist: "https://api.deezer.com/album/180151132/tracks",
            type: "album",
        },
        type: "track",
    },
    {
        id: 54751681,
        readable: true,
        title: "Always Summer",
        title_short: "Always Summer",
        title_version: "",
        link: "https://www.deezer.com/track/54751681",
        duration: 189,
        rank: 273436,
        explicit_lyrics: false,
        explicit_content_lyrics: 0,
        explicit_content_cover: 2,
        preview:
            "https://cdns-preview-d.dzcdn.net/stream/c-defbb9311d9296c838854637e7424c26-4.mp3",
        md5_image: "c765abbaea1d9a38be99361fed577604",
        artist: {
            id: 1184,
            name: "Yellowcard",
            link: "https://www.deezer.com/artist/1184",
            picture: "https://api.deezer.com/artist/1184/image",
            picture_small:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/56x56-000000-80-0-0.jpg",
            picture_medium:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/250x250-000000-80-0-0.jpg",
            picture_big:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/500x500-000000-80-0-0.jpg",
            picture_xl:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/1000x1000-000000-80-0-0.jpg",
            tracklist:
                "https://striveschool-api.herokuapp.com/api/deezer/artist/1184/top?limit=50",
            type: "artist",
        },
        album: {
            id: 5327691,
            title: "Southern Air",
            cover: "https://api.deezer.com/album/5327691/image",
            cover_small:
                "https://e-cdns-images.dzcdn.net/images/cover/c765abbaea1d9a38be99361fed577604/56x56-000000-80-0-0.jpg",
            cover_medium:
                "https://e-cdns-images.dzcdn.net/images/cover/c765abbaea1d9a38be99361fed577604/250x250-000000-80-0-0.jpg",
            cover_big:
                "https://e-cdns-images.dzcdn.net/images/cover/c765abbaea1d9a38be99361fed577604/500x500-000000-80-0-0.jpg",
            cover_xl:
                "https://e-cdns-images.dzcdn.net/images/cover/c765abbaea1d9a38be99361fed577604/1000x1000-000000-80-0-0.jpg",
            md5_image: "c765abbaea1d9a38be99361fed577604",
            tracklist: "https://api.deezer.com/album/5327691/tracks",
            type: "album",
        },
        type: "track",
    },
    {
        id: 45600461,
        readable: true,
        title: "Here I Am Alive",
        title_short: "Here I Am Alive",
        title_version: "",
        link: "https://www.deezer.com/track/45600461",
        duration: 213,
        rank: 263977,
        explicit_lyrics: false,
        explicit_content_lyrics: 0,
        explicit_content_cover: 2,
        preview:
            "https://cdns-preview-7.dzcdn.net/stream/c-7d5306a28cadd9324e5a3b63db87858d-4.mp3",
        md5_image: "2bec44c534a32002888cffe4e388b4b0",
        artist: {
            id: 1184,
            name: "Yellowcard",
            link: "https://www.deezer.com/artist/1184",
            picture: "https://api.deezer.com/artist/1184/image",
            picture_small:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/56x56-000000-80-0-0.jpg",
            picture_medium:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/250x250-000000-80-0-0.jpg",
            picture_big:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/500x500-000000-80-0-0.jpg",
            picture_xl:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/1000x1000-000000-80-0-0.jpg",
            tracklist:
                "https://striveschool-api.herokuapp.com/api/deezer/artist/1184/top?limit=50",
            type: "artist",
        },
        album: {
            id: 4503931,
            title: "Here I Am Alive",
            cover: "https://api.deezer.com/album/4503931/image",
            cover_small:
                "https://e-cdns-images.dzcdn.net/images/cover/2bec44c534a32002888cffe4e388b4b0/56x56-000000-80-0-0.jpg",
            cover_medium:
                "https://e-cdns-images.dzcdn.net/images/cover/2bec44c534a32002888cffe4e388b4b0/250x250-000000-80-0-0.jpg",
            cover_big:
                "https://e-cdns-images.dzcdn.net/images/cover/2bec44c534a32002888cffe4e388b4b0/500x500-000000-80-0-0.jpg",
            cover_xl:
                "https://e-cdns-images.dzcdn.net/images/cover/2bec44c534a32002888cffe4e388b4b0/1000x1000-000000-80-0-0.jpg",
            md5_image: "2bec44c534a32002888cffe4e388b4b0",
            tracklist: "https://api.deezer.com/album/4503931/tracks",
            type: "album",
        },
        type: "track",
    },
    {
        id: 706755052,
        readable: true,
        title: "Yellow Bird",
        title_short: "Yellow Bird",
        title_version: "",
        link: "https://www.deezer.com/track/706755052",
        duration: 164,
        rank: 222280,
        explicit_lyrics: false,
        explicit_content_lyrics: 0,
        explicit_content_cover: 2,
        preview:
            "https://cdns-preview-8.dzcdn.net/stream/c-888e3a1aefdd37978dcfa41c2649854a-3.mp3",
        md5_image: "01d1db67fe1e23022efb030ccd1a5793",
        artist: {
            id: 5676,
            name: "Arthur Lyman",
            link: "https://www.deezer.com/artist/5676",
            picture: "https://api.deezer.com/artist/5676/image",
            picture_small:
                "https://e-cdns-images.dzcdn.net/images/artist/7aa109112a2a7c36d717b26f546818bb/56x56-000000-80-0-0.jpg",
            picture_medium:
                "https://e-cdns-images.dzcdn.net/images/artist/7aa109112a2a7c36d717b26f546818bb/250x250-000000-80-0-0.jpg",
            picture_big:
                "https://e-cdns-images.dzcdn.net/images/artist/7aa109112a2a7c36d717b26f546818bb/500x500-000000-80-0-0.jpg",
            picture_xl:
                "https://e-cdns-images.dzcdn.net/images/artist/7aa109112a2a7c36d717b26f546818bb/1000x1000-000000-80-0-0.jpg",
            tracklist:
                "https://striveschool-api.herokuapp.com/api/deezer/artist/5676/top?limit=50",
            type: "artist",
        },
        album: {
            id: 102392432,
            title: "Yellow Bird",
            cover: "https://api.deezer.com/album/102392432/image",
            cover_small:
                "https://e-cdns-images.dzcdn.net/images/cover/01d1db67fe1e23022efb030ccd1a5793/56x56-000000-80-0-0.jpg",
            cover_medium:
                "https://e-cdns-images.dzcdn.net/images/cover/01d1db67fe1e23022efb030ccd1a5793/250x250-000000-80-0-0.jpg",
            cover_big:
                "https://e-cdns-images.dzcdn.net/images/cover/01d1db67fe1e23022efb030ccd1a5793/500x500-000000-80-0-0.jpg",
            cover_xl:
                "https://e-cdns-images.dzcdn.net/images/cover/01d1db67fe1e23022efb030ccd1a5793/1000x1000-000000-80-0-0.jpg",
            md5_image: "01d1db67fe1e23022efb030ccd1a5793",
            tracklist: "https://api.deezer.com/album/102392432/tracks",
            type: "album",
        },
        type: "track",
    },
    {
        id: 3361195,
        readable: true,
        title: "Life Of A Salesman",
        title_short: "Life Of A Salesman",
        title_version: "",
        link: "https://www.deezer.com/track/3361195",
        duration: 198,
        rank: 219071,
        explicit_lyrics: false,
        explicit_content_lyrics: 0,
        explicit_content_cover: 0,
        preview:
            "https://cdns-preview-a.dzcdn.net/stream/c-a50c6644122ad90215f7fd96f62477e8-7.mp3",
        md5_image: "8acb8db941872231e4f75dc903cbc1e9",
        artist: {
            id: 1184,
            name: "Yellowcard",
            link: "https://www.deezer.com/artist/1184",
            picture: "https://api.deezer.com/artist/1184/image",
            picture_small:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/56x56-000000-80-0-0.jpg",
            picture_medium:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/250x250-000000-80-0-0.jpg",
            picture_big:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/500x500-000000-80-0-0.jpg",
            picture_xl:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/1000x1000-000000-80-0-0.jpg",
            tracklist:
                "https://striveschool-api.herokuapp.com/api/deezer/artist/1184/top?limit=50",
            type: "artist",
        },
        album: {
            id: 319831,
            title: "Ocean Avenue",
            cover: "https://api.deezer.com/album/319831/image",
            cover_small:
                "https://e-cdns-images.dzcdn.net/images/cover/8acb8db941872231e4f75dc903cbc1e9/56x56-000000-80-0-0.jpg",
            cover_medium:
                "https://e-cdns-images.dzcdn.net/images/cover/8acb8db941872231e4f75dc903cbc1e9/250x250-000000-80-0-0.jpg",
            cover_big:
                "https://e-cdns-images.dzcdn.net/images/cover/8acb8db941872231e4f75dc903cbc1e9/500x500-000000-80-0-0.jpg",
            cover_xl:
                "https://e-cdns-images.dzcdn.net/images/cover/8acb8db941872231e4f75dc903cbc1e9/1000x1000-000000-80-0-0.jpg",
            md5_image: "8acb8db941872231e4f75dc903cbc1e9",
            tracklist: "https://api.deezer.com/album/319831/tracks",
            type: "album",
        },
        type: "track",
    },
    {
        id: 3224959,
        readable: true,
        title: "Light Up The Sky",
        title_short: "Light Up The Sky",
        title_version: "",
        link: "https://www.deezer.com/track/3224959",
        duration: 217,
        rank: 280260,
        explicit_lyrics: false,
        explicit_content_lyrics: 0,
        explicit_content_cover: 0,
        preview:
            "https://cdns-preview-9.dzcdn.net/stream/c-925dc76866f20a96d0b0b4b8ebe1b668-5.mp3",
        md5_image: "d3f445a491586b6c28455a172663f00c",
        artist: {
            id: 1184,
            name: "Yellowcard",
            link: "https://www.deezer.com/artist/1184",
            picture: "https://api.deezer.com/artist/1184/image",
            picture_small:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/56x56-000000-80-0-0.jpg",
            picture_medium:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/250x250-000000-80-0-0.jpg",
            picture_big:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/500x500-000000-80-0-0.jpg",
            picture_xl:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/1000x1000-000000-80-0-0.jpg",
            tracklist:
                "https://striveschool-api.herokuapp.com/api/deezer/artist/1184/top?limit=50",
            type: "artist",
        },
        album: {
            id: 308470,
            title: "Paper Walls",
            cover: "https://api.deezer.com/album/308470/image",
            cover_small:
                "https://e-cdns-images.dzcdn.net/images/cover/d3f445a491586b6c28455a172663f00c/56x56-000000-80-0-0.jpg",
            cover_medium:
                "https://e-cdns-images.dzcdn.net/images/cover/d3f445a491586b6c28455a172663f00c/250x250-000000-80-0-0.jpg",
            cover_big:
                "https://e-cdns-images.dzcdn.net/images/cover/d3f445a491586b6c28455a172663f00c/500x500-000000-80-0-0.jpg",
            cover_xl:
                "https://e-cdns-images.dzcdn.net/images/cover/d3f445a491586b6c28455a172663f00c/1000x1000-000000-80-0-0.jpg",
            md5_image: "d3f445a491586b6c28455a172663f00c",
            tracklist: "https://api.deezer.com/album/308470/tracks",
            type: "album",
        },
        type: "track",
    },
    {
        id: 2223089027,
        readable: true,
        title: "Yellow Bird",
        title_short: "Yellow Bird",
        title_version: "",
        link: "https://www.deezer.com/track/2223089027",
        duration: 46,
        rank: 236242,
        explicit_lyrics: false,
        explicit_content_lyrics: 0,
        explicit_content_cover: 2,
        preview:
            "https://cdns-preview-d.dzcdn.net/stream/c-dcf6090e7595be8b7d22b030d7823f70-2.mp3",
        md5_image: "4a4c85843c27a486a12436af732e2f8a",
        artist: {
            id: 82949372,
            name: "Jonathan Michael Fleming",
            link: "https://www.deezer.com/artist/82949372",
            picture: "https://api.deezer.com/artist/82949372/image",
            picture_small:
                "https://e-cdns-images.dzcdn.net/images/artist/799c1522850be83b83260329ec2d0168/56x56-000000-80-0-0.jpg",
            picture_medium:
                "https://e-cdns-images.dzcdn.net/images/artist/799c1522850be83b83260329ec2d0168/250x250-000000-80-0-0.jpg",
            picture_big:
                "https://e-cdns-images.dzcdn.net/images/artist/799c1522850be83b83260329ec2d0168/500x500-000000-80-0-0.jpg",
            picture_xl:
                "https://e-cdns-images.dzcdn.net/images/artist/799c1522850be83b83260329ec2d0168/1000x1000-000000-80-0-0.jpg",
            tracklist:
                "https://striveschool-api.herokuapp.com/api/deezer/artist/82949372/top?limit=50",
            type: "artist",
        },
        album: {
            id: 425719677,
            title: "Cadences Volume 2",
            cover: "https://api.deezer.com/album/425719677/image",
            cover_small:
                "https://e-cdns-images.dzcdn.net/images/cover/4a4c85843c27a486a12436af732e2f8a/56x56-000000-80-0-0.jpg",
            cover_medium:
                "https://e-cdns-images.dzcdn.net/images/cover/4a4c85843c27a486a12436af732e2f8a/250x250-000000-80-0-0.jpg",
            cover_big:
                "https://e-cdns-images.dzcdn.net/images/cover/4a4c85843c27a486a12436af732e2f8a/500x500-000000-80-0-0.jpg",
            cover_xl:
                "https://e-cdns-images.dzcdn.net/images/cover/4a4c85843c27a486a12436af732e2f8a/1000x1000-000000-80-0-0.jpg",
            md5_image: "4a4c85843c27a486a12436af732e2f8a",
            tracklist: "https://api.deezer.com/album/425719677/tracks",
            type: "album",
        },
        type: "track",
    },
    {
        id: 2285153037,
        readable: true,
        title: "Honest from the Jump",
        title_short: "Honest from the Jump",
        title_version: "",
        link: "https://www.deezer.com/track/2285153037",
        duration: 266,
        rank: 190072,
        explicit_lyrics: false,
        explicit_content_lyrics: 0,
        explicit_content_cover: 2,
        preview:
            "https://cdns-preview-3.dzcdn.net/stream/c-3212ca661e1e72587eaba14ff3854661-2.mp3",
        md5_image: "200afb09ca33b6c4f4a618744753c5c7",
        artist: {
            id: 1184,
            name: "Yellowcard",
            link: "https://www.deezer.com/artist/1184",
            picture: "https://api.deezer.com/artist/1184/image",
            picture_small:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/56x56-000000-80-0-0.jpg",
            picture_medium:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/250x250-000000-80-0-0.jpg",
            picture_big:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/500x500-000000-80-0-0.jpg",
            picture_xl:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/1000x1000-000000-80-0-0.jpg",
            tracklist:
                "https://striveschool-api.herokuapp.com/api/deezer/artist/1184/top?limit=50",
            type: "artist",
        },
        album: {
            id: 441750887,
            title: "Childhood Eyes",
            cover: "https://api.deezer.com/album/441750887/image",
            cover_small:
                "https://e-cdns-images.dzcdn.net/images/cover/200afb09ca33b6c4f4a618744753c5c7/56x56-000000-80-0-0.jpg",
            cover_medium:
                "https://e-cdns-images.dzcdn.net/images/cover/200afb09ca33b6c4f4a618744753c5c7/250x250-000000-80-0-0.jpg",
            cover_big:
                "https://e-cdns-images.dzcdn.net/images/cover/200afb09ca33b6c4f4a618744753c5c7/500x500-000000-80-0-0.jpg",
            cover_xl:
                "https://e-cdns-images.dzcdn.net/images/cover/200afb09ca33b6c4f4a618744753c5c7/1000x1000-000000-80-0-0.jpg",
            md5_image: "200afb09ca33b6c4f4a618744753c5c7",
            tracklist: "https://api.deezer.com/album/441750887/tracks",
            type: "album",
        },
        type: "track",
    },
    {
        id: 3224956,
        readable: true,
        title: "Fighting",
        title_short: "Fighting",
        title_version: "",
        link: "https://www.deezer.com/track/3224956",
        duration: 180,
        rank: 325484,
        explicit_lyrics: false,
        explicit_content_lyrics: 0,
        explicit_content_cover: 0,
        preview:
            "https://cdns-preview-6.dzcdn.net/stream/c-6df8e5dbbb713ae56b09865c06e154d5-5.mp3",
        md5_image: "d3f445a491586b6c28455a172663f00c",
        artist: {
            id: 1184,
            name: "Yellowcard",
            link: "https://www.deezer.com/artist/1184",
            picture: "https://api.deezer.com/artist/1184/image",
            picture_small:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/56x56-000000-80-0-0.jpg",
            picture_medium:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/250x250-000000-80-0-0.jpg",
            picture_big:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/500x500-000000-80-0-0.jpg",
            picture_xl:
                "https://e-cdns-images.dzcdn.net/images/artist/f39ae915a61561be8eb391c1dc48f40f/1000x1000-000000-80-0-0.jpg",
            tracklist:
                "https://striveschool-api.herokuapp.com/api/deezer/artist/1184/top?limit=50",
            type: "artist",
        },
        album: {
            id: 308470,
            title: "Paper Walls",
            cover: "https://api.deezer.com/album/308470/image",
            cover_small:
                "https://e-cdns-images.dzcdn.net/images/cover/d3f445a491586b6c28455a172663f00c/56x56-000000-80-0-0.jpg",
            cover_medium:
                "https://e-cdns-images.dzcdn.net/images/cover/d3f445a491586b6c28455a172663f00c/250x250-000000-80-0-0.jpg",
            cover_big:
                "https://e-cdns-images.dzcdn.net/images/cover/d3f445a491586b6c28455a172663f00c/500x500-000000-80-0-0.jpg",
            cover_xl:
                "https://e-cdns-images.dzcdn.net/images/cover/d3f445a491586b6c28455a172663f00c/1000x1000-000000-80-0-0.jpg",
            md5_image: "d3f445a491586b6c28455a172663f00c",
            tracklist: "https://api.deezer.com/album/308470/tracks",
            type: "album",
        },
        type: "track",
    },
    {
        id: 574052722,
        readable: true,
        title: "Yellow Bird",
        title_short: "Yellow Bird",
        title_version: "",
        link: "https://www.deezer.com/track/574052722",
        duration: 222,
        rank: 88022,
        explicit_lyrics: false,
        explicit_content_lyrics: 0,
        explicit_content_cover: 2,
        preview:
            "https://cdns-preview-1.dzcdn.net/stream/c-1ed2dd3a7cc900630f2fa8ba36bd8ff0-3.mp3",
        md5_image: "a425ace679af01421898bc8cfe519b8f",
        artist: {
            id: 4685084,
            name: "Ben Stevenson",
            link: "https://www.deezer.com/artist/4685084",
            picture: "https://api.deezer.com/artist/4685084/image",
            picture_small:
                "https://e-cdns-images.dzcdn.net/images/artist/a425ace679af01421898bc8cfe519b8f/56x56-000000-80-0-0.jpg",
            picture_medium:
                "https://e-cdns-images.dzcdn.net/images/artist/a425ace679af01421898bc8cfe519b8f/250x250-000000-80-0-0.jpg",
            picture_big:
                "https://e-cdns-images.dzcdn.net/images/artist/a425ace679af01421898bc8cfe519b8f/500x500-000000-80-0-0.jpg",
            picture_xl:
                "https://e-cdns-images.dzcdn.net/images/artist/a425ace679af01421898bc8cfe519b8f/1000x1000-000000-80-0-0.jpg",
            tracklist:
                "https://striveschool-api.herokuapp.com/api/deezer/artist/4685084/top?limit=50",
            type: "artist",
        },
        album: {
            id: 76641432,
            title: "Yellow Bird",
            cover: "https://api.deezer.com/album/76641432/image",
            cover_small:
                "https://e-cdns-images.dzcdn.net/images/cover/a425ace679af01421898bc8cfe519b8f/56x56-000000-80-0-0.jpg",
            cover_medium:
                "https://e-cdns-images.dzcdn.net/images/cover/a425ace679af01421898bc8cfe519b8f/250x250-000000-80-0-0.jpg",
            cover_big:
                "https://e-cdns-images.dzcdn.net/images/cover/a425ace679af01421898bc8cfe519b8f/500x500-000000-80-0-0.jpg",
            cover_xl:
                "https://e-cdns-images.dzcdn.net/images/cover/a425ace679af01421898bc8cfe519b8f/1000x1000-000000-80-0-0.jpg",
            md5_image: "a425ace679af01421898bc8cfe519b8f",
            tracklist: "https://api.deezer.com/album/76641432/tracks",
            type: "album",
        },
        type: "track",
    },
]

//chiameremo questa funzione dentro un ciclo, e gli passeremo come parametro le canzoni una per una
const toString = function (canzone) {
    //ritornare una stringa che contenga titolo, titolo album e nome artista
    return canzone.title + ", " + canzone.album.title + ", " + canzone.artist.name
}

// {
//     title: "Ocean Avenue",
//     artist: {
//         name: "Yellowcard",
//     },
//     album: {
//         title: "Ocean Avenue",
//     },
// },

for (let i = 0; i < musical.length; i++) {
    let stringaFinale = toString(musical[i])
    console.log(i + 1 + ". " + stringaFinale)
}

const cugini = [
    {
        nome: "Lidia", //cugini[0].nome
        coloreOcchi: "marrone",
        isKovac: true,
        eta: 25,
        //Lidia Kovac, 25 anni
    },
    {
        nome: "Simone",
        coloreOcchi: "verdi",
        isKovac: true,
        eta: 17,
        //Simone Kovac, 17 anni
    },
    {
        nome: "Francesco",
        coloreOcchi: "azzurri",
        isKovac: false,
        eta: 27,
        //Francesco, 27 anni
    },
    {
        nome: "Emma",
        coloreOcchi: "azzurri",
        isKovac: false,
        eta: 14,
        //Emma, 14 anni
    },
    {
        nome: "Noah",
        coloreOcchi: "azzuri",
        isKovac: false,
        eta: 15,
    },
]

const zii = [
    {
        nome: "Stefano",
        coloreOcchi: "boh",
        isKovac: true,
        eta: 56,
    },
    {
        nome: "Marco",
        coloreOcchi: "azzurri",
        isKovac: true,
        eta: 45,
    },
]

const stampaParenti = function (cugino) {
    //nome, se il cognome e' kovac stampo il cognome (altrimenti niente), eta

    let stringaFinale = ""
    stringaFinale += cugino.nome + " "
    if (cugino.isKovac) { //cugino.isKovac === true
        stringaFinale += "Kovac"
    }
    stringaFinale += ", " + cugino.eta + " anni"
    console.log(stringaFinale)
    return stringaFinale

    // return cugino.nome + " " + cugino.isKovac ? "Kovac" : "" + cugino.eta
}

for (let i = 0; i < cugini.length; i++) {
    let stringaCugino = stampaParenti(cugini[i])
    console.log(stringaCugino)
}

for (let i = 0; i < zii.length; i++) {
    let stringaZio = stampaParenti(zii[i])
    console.log(stringaZio)
}

const ripetiStringa = function (stringa, numero) {
    console.log(stringa.repeat(numero)) //"ciao".repeat(12)
}

ripetiStringa("ciao", 12)
ripetiStringa("ah", 12)

console.log("EPI".concat("CODE")) //EPICODE

console.log("ciao a tutti".replace("t", "7"))
console.log("ciao a tutti".replaceAll("t", "7"))
console.log("ciao a tutti".replaceAll(" ", "_"))

console.log("ciao a tutti".includes("ciao")) //true
console.log("ciao a tutti".includes("Ciao")) //false
console.log("ciao a tutti".includes(" ")) //true
console.log("ciao a tutti".toLowerCase().includes("Ciao".toLowerCase())) //true
