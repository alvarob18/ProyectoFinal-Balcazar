import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../config/CartContext';
import BBDD from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';

const ItemContainer = () => {
  const [images, setImages] = useState({});
  const [sections, setSections] = useState([]);
  const { cartItems, addToCart, updateQuantity } = useCart();

  useEffect(() => {
    const fetchItemsFromFirestore = async () => {
      try {
        const sectionsSnapshot = await getDocs(collection(BBDD.db, 'indumentaria'));
        const sectionData = [];

        for (const sectionDoc of sectionsSnapshot.docs) {
          const itemsSnapshot = await getDocs(collection(sectionDoc.ref, 'items'));
          const items = itemsSnapshot.docs.map((itemDoc) => ({
            id: itemDoc.id,
            ...itemDoc.data(),
          }));

          sectionData.push({
            id: sectionDoc.id,
            items: items,
          });
        }

        setSections(sectionData);
      } catch (error) {
        console.error('Error al obtener los datos de Firestore:', error);
      }
    };

    fetchItemsFromFirestore();
  }, []);

  useEffect(() => {
    const loadImages = async () => {
      const imagePromises = sections.flatMap((section) =>
        section.items.map(async (item) => {
          const image = await import(`../assets/images/${item.image}`);
          return { [item.image]: image.default };
        })
      );

      const loadedImages = await Promise.all(imagePromises);
      const imageMap = loadedImages.reduce((acc, cur) => ({ ...acc, ...cur }), {});
      setImages(imageMap);
    };

    if (sections.length > 0) {
      loadImages();
    }
  }, [sections]);

  const handleIncrement = (item, parentId) => {
    const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (cartItem) {
      if (cartItem.quantity < item.stock) {
        updateQuantity(item.id, cartItem.quantity + 1, parentId);
      } else {
        console.warn('No puedes agregar más de este producto: Stock limitado.');
      }
    } else {
      if (item.stock > 0) {
        addToCart({ ...item, quantity: 1, parentId });
      } else {
        console.warn('El producto está fuera de stock.');
      }
    }

    console.log('Stock disponible:', item.stock);
    console.log('Cantidad actual en carrito:', cartItem ? cartItem.quantity : 0);
  };

  const handleDecrement = (item, parentId) => {
    const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (cartItem) {
      if (cartItem.quantity > 1) {
        updateQuantity(item.id, cartItem.quantity - 1, parentId);
        console.log('Cantidad decrementada:', cartItem.quantity - 1);
      } else {
        console.warn('Cantidad mínima alcanzada. Removiendo ítem.');
        updateQuantity(item.id, 0, parentId);
      }
    } else {
      console.warn('El producto no está en el carrito.');
    }
  };

  return (
    <div>
      {sections.map((section) => (
        <div key={section.id} className="photo-grid-indumentaria carrito-container">
          {section.items.map((item) => {
            const cartItem = cartItems.find((cartItem) => cartItem.id === item.id);
            const quantity = cartItem ? cartItem.quantity : 0;

            return (
              <div key={item.id} className="items-section-indumentaria">
                <Link to={`/item/${section.id}/${item.id}?image=${item.image}`}>
                  {images[item.image] && <img src={images[item.image]} alt={item.alt} />}
                </Link>
                <p className="item-description">{item.description}</p>
                <p className="item-type">{item.type}</p>
                <div className="cart-controls">
                  <button onClick={() => handleDecrement(item, section.id)} className="btn-cart">
                    -
                  </button>
                  <span className="item-quantity">{quantity}</span>
                  <button onClick={() => handleIncrement(item, section.id)} className="btn-cart">
                    +
                  </button>
                </div>
                <p className="item-stock">Stock disponible: {item.stock}</p>
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default ItemContainer;