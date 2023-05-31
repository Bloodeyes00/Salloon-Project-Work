import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import Saloon from "../../api/saloon";

const LikeSaloon = (props) => {
  let [like, setLike] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("token")) {
      props.customerDetail.FavouriteSaloons &&
        props.customerDetail.FavouriteSaloons.map((data) => {
          if (data == props.saloon) {
            setLike(true);
          }
        });
    }
  });
  const addFavrt = () => {
    if (localStorage.getItem("token")) {
      let data = {
        Saloon_Id: props.saloon,
      };
      Saloon.addfavouritesaloon(data).then((res) => {
        if (res.data.Error == false) {
          setLike(!like);
        }
      });
    } else {
      this.props.history.push("/login");
    }
  };
  return (
    <div onClick={addFavrt} className="add_saloon_fav added_fav">
      {like ? <AiFillHeart /> : <AiOutlineHeart />}
    </div>
  );
};

export default LikeSaloon;
