import downArrow from 'src/assets/fancy-arrow--down.png';
import { InterSectionImageWrap, InterSectionArrowImg, InterSectionLabel } from './InterSection.styled';

const InterSectionImage = () => {
    return (
        <InterSectionImageWrap>
            <InterSectionArrowImg alt src={downArrow} />
            <InterSectionLabel>THEN</InterSectionLabel>
        </InterSectionImageWrap>
    );
}

export default InterSectionImage;