import axios from "axios";
import { useEffect, useContext, useState } from "react";
import TrackContext from "../../TrackContext";
import { HABITS_LIST } from "../../constants/urls";
import ContainerList from "./ContainerList";

export default function ListHabits({ setShowText }) {
  const [items, setItems] = useState([]);
  const { user } = useContext(TrackContext);
  useEffect(() => {
    const config = {
      headers: {
        "Authorization": `Bearer ${user.token}`,
      },
    };

    axios
      .get(HABITS_LIST, config)
      .then((res) => {
        setItems(res.data);
        setShowText(true);
        console.log(res.data);
      })
      .catch((err) => console.log(err.response.data.message));
  }, []);

  return (
    <>
      {items.map((el) => (
        <ContainerList
          items={items}
          setItems={setItems}
          id={el.id}
          key={el.id}
          name={el.name}
          days={el.days}
          token = {user.token}
        />
      ))}
    </>
  );
}
