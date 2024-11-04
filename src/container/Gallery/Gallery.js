const React = require('react');
const { BsInstagram, BsArrowLeftShort, BsArrowRightShort } = require('react-icons/bs');

const { SubHeading } = require('../../components');
const { images } = require('../../constants');
require('./Gallery.css');

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return React.createElement('div', { className: 'app__gallery flex__center' },
    React.createElement('div', { className: 'app__gallery-content' },
      React.createElement(SubHeading, { title: 'Instagram' }),
      React.createElement('h1', { className: 'headtext__cormorant' }, 'Gallerie'),
      React.createElement('p', { className: 'p__opensans', style: { color: '#AAAAAA', marginTop: '2rem' } }, " L'exploration visuelle d'un restaurant luxueux, où chaque image raconte une histoire de raffinement, d'élégance et de plaisir culinaire. Chaque cliché capturé révèle l'essence même de cet établissement prestigieux, vous transportant dans un monde où l'art de la gastronomie rencontre le luxe et l'exclusivité."),
      React.createElement('button', { type: 'button', className: 'custom__button' }, 'Voire plus')
    ),
    React.createElement('div', { className: 'app__gallery-images' },
      React.createElement('div', { className: 'app__gallery-images_container', ref: scrollRef },
        [images.gallery01, images.gallery02, images.gallery03, images.gallery04].map((image, index) => (
          React.createElement('div', { className: 'app__gallery-images_card flex__center', key: `gallery_image-${index + 1}` },
            React.createElement('img', { src: image, alt: 'gallery_image' }),
            React.createElement(BsInstagram, { className: 'gallery__image-icon' })
          )
        ))
      ),
      React.createElement('div', { className: 'app__gallery-images_arrows' },
        React.createElement(BsArrowLeftShort, { className: 'gallery__arrow-icon', onClick: () => scroll('left') }),
        React.createElement(BsArrowRightShort, { className: 'gallery__arrow-icon', onClick: () => scroll('right') })
      )
    )
  );
};

module.exports = Gallery;
