// import KatieZaferes from "../images/katie-zaferes.png";
import Star from "../images/star.png";

// Props as argument
export default function Card(props) {
  // badgeText has no value because I need in the conditional rendering

  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card">
      {/* Conditional rendering */}
      {/* If badgeText has something assigned (means badgeText is truthy) card--badge div will be displayed corrisponding badgeText */}
      {badgeText && <div className="card--badge">{badgeText}</div>}
      <img
        // required to display local imgs in src folder
        // src={require(`../images/${props.item.img}`)}
        src={require(`../images/${props.coverImg}`)}
        alt={props.title}
        className="card--image"
      />
      <div className="card--stats">
        <img src={Star} alt="Star" className="card--star" />
        <span>{props.stats.rating}</span>
        <span className="grey">({props.stats.reviewCount}) • </span>
        <span className="grey">{props.location}</span>
      </div>
      <p className="card--title">{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}
