import EditWishlistForm from "./EditWishlistForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPencil } from "@fortawesome/free-solid-svg-icons";

const WishlistList = ({
  wishes,
  receivedWish,
  deleteWish,
  editWish,
  updateWish,
}) => {
  return (
    <ul className="wishlist-list">
      {wishes.map((wish, index) =>
        wish.isEditing ? (
          <EditWishlistForm key={index} updateWish={updateWish} wish={wish} />
        ) : (
          <li
            key={index}
            className={`wishlist-item ${
              wish.received ? "completed" : "incompleted"
            }`}
          >
            <p
              onClick={() => receivedWish(wish.id)}
              className="wishlist-item-title"
            >
              {wish.value}
            </p>
            <div className="btn-wrapper">
              <button
                className="wishlist-btn-interface"
                onClick={() => editWish(wish.id)}
              >
                <FontAwesomeIcon icon={faPencil} className="fa-edit" />
              </button>
              <button
                className="wishlist-btn-interface"
                onClick={() => deleteWish(wish.id)}
              >
                <FontAwesomeIcon icon={faTrash} className="fa-trash" />
              </button>
            </div>
          </li>
        )
      )}
    </ul>
  );
};

export default WishlistList;
