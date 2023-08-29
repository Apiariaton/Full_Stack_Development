import Header from "../Text_Elements/Header";
import MainBody from "../Text_Elements/MainBody";
import ProfileImage from "../Image_Elements/ProfileImage";

function CardNoBS(props){
    return (
        <div className="concept">
            <Header header_text={props.concept.title}></Header>
            <ProfileImage profile_img_src={props.concept.image}></ProfileImage>
            <MainBody body_text={props.concept.description}></MainBody>
            <div>Hi</div>
        </div>
    );
}

export default CardNoBS;