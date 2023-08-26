import ExpenseItem from "./components/ExpenseItem";
//import BarButton from './components/BarButton';
//import SongEntry from "./components/SongEntry";
import ChocCafeFranchiseProfile from "./components/ChocCafeFranchiseProfile";

function App() {
  const song_entries = [
    {
      img_src:"./static/RobertoCarlos.jpg",
      img_title: "Detalhes",
      song_title: "Detalhes",
      song_artist: "Roberto Carlos",
      song_release_date: 1971
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
      <ExpenseItem
        id = {expenses[0].id}
        title={expenses[0].title}
        price={expenses[0].price}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        id = {expenses[1].id}
        title={expenses[1].title}
        price={expenses[1].price}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        id = {expenses[2].id}
        title={expenses[2].title}
        price={expenses[2].price}
        date={expenses[2].date}
      ></ExpenseItem>
      <ChocCafeFranchiseProfile
        franchise_profile = {franchise_profiles}
      ></ChocCafeFranchiseProfile>
    </div>
  );
}

export default App;
