import { v4 as uuidv4 } from 'uuid';

export default function playlist() {
    return [
        {
            name: "Home Court",
            cover: "https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg",
            artist: "Blue Wednesday, Shopan",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11233",
            color: ["#d3a5c1", "#6d73c2"],
            id: uuidv4(),
            active: true           
        },
        {
            name: "Today Feels Like Everyday",
            cover: "https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf7f5823e4-1024x1024.jpg",
            artist: "Mama Aiuto",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=12128",
            color: ["#0e2125", "#4e7a7d"],
            id: uuidv4(),
            active: false           
        },
        {
            name: "Bright Mornings",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/08cbb0848f669e1bd8b5a5152c4b7d20edf1b499-1024x1024.jpg",
            artist: "Sundreamer, edapollo",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=9212",
            color: ["#fde096", "#984420"],
            id: uuidv4(),
            active: false           
        },
        {
            name: "Lilo",
            cover: "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
            artist: "Middle School, The Field Tapes",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11244",
            color: ["#b9c28c", "#121f14"],
            id: uuidv4(),
            active: false           
        },
        {
            name: "Maple",
            cover: "https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg",
            artist: "Arbour, Aarigod",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=13015",
            color: ["#e0f33f", "#758e45"],
            id: uuidv4(),
            active: false           
        }
    ]
}