import { useState, useEffect } from "react";
import WishlistForm from "./WishlistForm";
import WishlistList from "./WishlistList";

const WishlistSection = () => {
  const [wishes, setWishes] = useState([]);

  useEffect(() => {
    const savedWishes = JSON.parse(localStorage.getItem("wishes")) || [];
    setWishes(savedWishes);
  }, []);

  const addWish = (value) => {
    const newWish = [
      ...wishes,
      { id: Date.now(), value, received: false, isEditing: false },
    ];
    setWishes(newWish);
    localStorage.setItem("wishes", JSON.stringify(newWish));
  };

  const deleteWish = (id) => {
    const newWish = wishes.filter((wish) => wish.id !== id);
    setWishes(newWish);
    localStorage.setItem("wishes", JSON.stringify(newWish));
  };

  const editWish = (id) => {
    setWishes(
      wishes.map((wish) =>
        wish.id === id ? { ...wish, isEditing: !wish.isEditing } : wish
      )
    );
  };

  const updateWish = (value, id) => {
    const newWish = wishes.map((wish) =>
      wish.id === id
        ? { ...wish, value: value, isEditing: !wish.isEditing }
        : wish
    );
    setWishes(newWish);
    localStorage.setItem("wishes", JSON.stringify(newWish));
  };

  const receivedWish = (id) => {
    const newWish = wishes.map((wish) =>
      wish.id === id ? { ...wish, received: !wish.received } : wish
    );
    setWishes(newWish);
    localStorage.setItem("wishes", JSON.stringify(newWish));
  };

  return (
    <section className="section-wishlist">
      <div className="wishlist-container">
        <WishlistForm addWish={addWish} />
        {wishes.length ? (
          <WishlistList
            wishes={wishes}
            deleteWish={deleteWish}
            editWish={editWish}
            updateWish={updateWish}
            receivedWish={receivedWish}
          />
        ) : (
          <p className="wishlist-nowish">There is no wish yet!</p>
        )}
      </div>
    </section>
  );
};

export default WishlistSection;
