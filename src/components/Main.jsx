import data from "./data";
import Card from "./Card";
import "./card.css";

const Main = ({ search }) => {
  return (
    <div className="cards">
      {data.map(({ name, img, statistics }) => {
        if (
          search.trim() !== "" &&
          name.toLowerCase().startsWith(search.toLowerCase())
        ) {
          return (
            <Card key={name} name={name} img={img} statistics={statistics} />
          );
        } else if (search.trim() === "") {
          return (
            <Card key={name} name={name} img={img} statistics={statistics} />
          );
        }
      })}
    </div>
  );
};

export default Main;
