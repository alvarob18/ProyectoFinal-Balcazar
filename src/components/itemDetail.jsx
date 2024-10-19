import { useParams } from 'react-router-dom';
import indumentaria from '../Items/indumentaria.json';

const ItemDetail = () => {
    const { idSection, idItem } = useParams();    
    const queryParams = new URLSearchParams(location.search);
    const imageUrl = queryParams.get('image');

    const section = indumentaria.sections.find((section) => section.id === idSection);

    console.log(`esto es section`);
    console.log(section);

    if (!section) {
      return <h2>Sección no encontrada</h2>;
    }
    
    //const item = section.items.find((item) => item.id === parseInt(idItem));
    const item = section.items.find((item) => item.id === idItem);

    console.log(`esto es item:`);
    console.log(item);



  if (!item) {
    return <h2>Item no encontrado</h2>;
  }

  return (
    <div className="photo-grid-indumentaria carrito-container">
        <div className="items-section-indumentaria">
            <h1>{item.description}</h1>
            {imageUrl && <img src={`/src/assets/images/${imageUrl}`} alt={item.alt} />}
            <p className="item-description">{item.description}</p>
            <p className="item-type">{item.type}</p>
            <button className="add-to-cart btn-cart">
                <i className="bx bx-cart"></i> Agregar al carrito
            </button>
        </div>
    </div>
  );
};

export default ItemDetail;