import SmartSlider from "react-smart-slider";
import "./gallery.css";

export default function Slider({slides = []}) {
    return (
        <SmartSlider
              slides={slides}
              autoSlide={true}
              showIndicators={false}
              autoSlideInterval={4000}
              height={600}
              buttonShape="round" // round or square
            />
    )
}