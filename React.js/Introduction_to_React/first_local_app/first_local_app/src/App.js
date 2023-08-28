import Expenses from "./components/Expenses";
//import BarButton from './components/BarButton';
//import SongEntry from "./components/SongEntry";
import Songs from "./components/Songs";
import CardNoBs from "./components/CardNoBs";

import ChocCafeFranchiseProfile from "./components/ChocCafeFranchiseProfile";



function App() {
 
  const song_entries = [
  {
    img_src: "./static/RobertoCarlos.jpg",
    img_title: "Detalhes",
    song_title: "Detalhes",
    song_artist: "Roberto Carlos",
    song_release_date: 1971
  },
  {
    img_src: "./static/ImagineDragons.jpg",
    img_title: "Radioactive",
    song_title: "Radioactive",
    song_artist: "Imagine Dragons",
    song_release_date: 2012
  },
  {
    img_src: "./static/VicenteGarcia.jpg",
    img_title: "Dulcito e Coco",
    song_title: "Dulcito e Coco",
    song_artist: "Vicente García",
    song_release_date: 2016
  }
];


  const expenses = [
    {
      id: 0,
      title: "Car Insurance",
      price: 677,
      date: new Date(2021, 3, 2023),
    },

    { id: 1, title: "Groceries", price: 80, date: new Date(2021, 3, 2023) },

    { id: 2, title: "Book", price: 8, date: new Date(2021, 3, 2023) },
  ];


  const franchise_profiles =
  [
    {
      location: "Chandler",
      owner:"Francis Duckworth",
      employees: 11,
      specialty: "The Chocotuan"
    }
  ]

  /*
<SongEntry
      img_src = {song_entries[0].img_src}
      img_alt = {song_entries[0].img_alt}
      song_title = {song_entries[0].song_title} 
      song_artist = {song_entries[0].song_artist}
      song_release_date = {song_entries[0].song_release_date} 
      ></SongEntry>

  */

  return (
    <div>
      <h2 className="text-warning">Let's get started!</h2>
      <CardNoBs>
      <Expenses expenses={expenses}></Expenses>
      
      <Songs song_entries={song_entries}/>
      
      <ChocCafeFranchiseProfile
        franchise_profile = {franchise_profiles}
      ></ChocCafeFranchiseProfile>
      </CardNoBs>
    </div>
  );
}

export default App;
