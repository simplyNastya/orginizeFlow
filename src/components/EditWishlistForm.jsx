import { useState } from "react";

const EditWishlistForm = ({ updateWish, wish }) => {
  const [value, setValue] = useState(wish.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateWish(value, wish.id);
    setValue("");
  };

  return (
    <form className="wishlist-edit-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="What is your wish?"
        value={value}
        className="wishlist-edit-input"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button type="submit" className="wishlist-edit-btn">
        Edit
      </button>
    </form>
  );
};

export default EditWishlistForm;
