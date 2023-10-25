import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBurst } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const HomeSection = () => {
  return (
    <section className="section-home">
      <div className="home-container">
        <h1 className="home-title">
          Welcome to OrginizeFlow – Your Ultimate To-Do List and Wishlist
          Manager!
        </h1>
        <p className="home-text">
          Get ready to transform the way you organize your life. With our
          easy-to-use platform, you can create and manage your to-do lists and
          wishlists quickly. Whether it's planning your day, tracking your
          goals, or curating the perfect gift list, we've got you covered. Take
          the first step towards a more organized and productive you. It's time
          to turn your dreams and tasks into actionable plans. Welcome to your
          new world of organization and efficiency!
        </p>
        <ul className="home-list">
          <li className="home-item">
            <Link to="/todo" className="home-link">
              <FontAwesomeIcon icon={faBurst} className="fa-burst" />
              ToDo
            </Link>
          </li>
          <li className="home-item">
            <Link to="/wishlist" className="home-link">
              <FontAwesomeIcon icon={faStar} className="fa-star" />
              Wishlist
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default HomeSection;
