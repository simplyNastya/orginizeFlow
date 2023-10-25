import { useState } from "react";

const WishlistForm = ({ addWish }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addWish(value);
    setValue("");
  };

  return (
    <form className="wishlist-form" onSubmit={handleSubmit}>
      <label htmlFor="wishlist-input" className="wishlist-form-label">
        What are you desire?
      </label>
      <input
        id="wishlist-input"
        placeholder="What is your wish?"
        value={value}
        autoComplete="false"
        className="wishlist-input"
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <button type="submit" className="wishlist-btn">
        Add wish
      </button>
    </form>
  );
};

export default WishlistForm;
