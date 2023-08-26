function SongEntry(props)
{
    return (
        <div className="d-200 align-items-center justify-content-space-evenly bg-white shadow-rounded border">
            <img src={props.img_src} alt={props.img_title}></img> 
            <h1>{props.song_title}</h1>
            <p1>{props.song_artist}</p1>
            <p1>{props.song_release_date}</p1>
        </div>    
    );
}

export default SongEntry;