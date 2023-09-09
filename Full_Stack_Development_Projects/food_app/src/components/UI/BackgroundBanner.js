import "./BackgroundBanner.css";

function BackgroundBanner(props)
{
return (
    <section>
        <div className="backgroundBanner"> {props.children}</div>
    </section>
    )
};


export default BackgroundBanner;