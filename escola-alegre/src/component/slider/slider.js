import React from "react";
import Slider from "react-slick";

class SliderComponent extends React.Component {
    constructor(props) {
        super(props);
    };

    render() {
        const sliderSettings = {
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 4000
        };
        return (
            <div style={{ display: 'inline-block', minWidth: '400px', minHeight: '100px', maxWidth: '400px', maxHeight: '100px' }}>
                <div>
                    <Slider {...sliderSettings}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '1.3em' }}>
                                <img src="http://172.22.238.199:3000/test/WhatsApp_Image_2019-11-24_at_06.04.50.jpeg" alt="imagem da escola" height="100" width="100" />
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        );
    };
};

export default SliderComponent;
