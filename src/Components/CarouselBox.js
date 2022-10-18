import Carousel from 'react-bootstrap/Carousel';
import car1 from '../Assets/derevia_les_tuman_396456_1920x1080.jpg'
import car2 from '../Assets/gora_skaly_derevia_395654_1920x1080.jpg'
import car3 from '../Assets/zdaniia_bashni_siluety_396467_1920x1080.jpg'



function UncontrolledExample() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ car1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Дереве, лес туман</h3>
                        </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ car2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Гора и скалы</h3>
                     </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={ car3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Вечерный город</h3>
                   
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default UncontrolledExample;