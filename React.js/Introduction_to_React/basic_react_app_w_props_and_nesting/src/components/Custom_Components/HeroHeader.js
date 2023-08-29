import Header from '../Text_Elements/Header';
import MainBody from '../Text_Elements/MainBody';
import ProfileImage from '../Image_Elements/ProfileImage';


function HeroHeader(props)
{
return <header>
<ProfileImage profile_img_src={props.hero_header.img_src}></ProfileImage>
<Header header_text={props.hero_header.h_text}></Header>
<MainBody body_text={props.hero_header.b_text}></MainBody>
</header>
}

export default HeroHeader;