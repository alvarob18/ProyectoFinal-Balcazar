import indumentariaItems from '../Items/indumentaria.json';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ItemContainer = () => {
  const [images, setImages] = useState({});

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = indumentariaItems.sections.flatMap((section) =>
        section.items.map(async (item) => {
          const image = await import(`../assets/images/${item.image}`);
          return { [item.image]: image.default };
        })
      );

      const loadedImages = await Promise.all(imagePromises);
      const imageMap = loadedImages.reduce((acc, cur) => ({ ...acc, ...cur }), {});
      setImages(imageMap);
    };

    loadImages();
  }, []);

  return (
    <div>
      {indumentariaItems.sections.map((section) => (
        <div key={section.id} className="photo-grid-indumentaria carrito-container">
          {section.items.map((item) => (
            <div key={item.id} className="items-section-indumentaria">
              <Link to={`/item/${section.id}/${item.id}?image=${item.image}`}>
                {images[item.image] && <img src={images[item.image]} alt={item.alt} />}
              </Link>
              <p className="item-description">{item.description}</p>
              <p className="item-type">{item.type}</p>
              <button className="add-to-cart btn-cart">
                <i className="bx bx-cart"></i> Agregar al carrito
              </button>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ItemContainer;