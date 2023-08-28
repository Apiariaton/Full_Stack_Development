import SongEntry from "./SongEntry";
import "./bootstrap.css";
import "./Songs.css";

function Songs(props) {
  return (
    <div className="songs bg-grey border rounded-circle shadow-sm">
      {props.song_entries.map((song_entry) => (
        <SongEntry
          img_src={song_entry.img_src}
          img_alt={song_entry.img_title}
          song_title={song_entry.title}
          song_artist={song_entry.song_artist}
          song_release_date={song_entry.song_release_date}
        />
      ))}
    </div>
  );
}

export default Songs;
