import React from "react";
import { useDispatch } from "react-redux";
import style from "./order.module.css";
import { order, orderAttack } from "../../redux/actions";
import { GrPowerReset } from "react-icons/gr";
import { PiSwordFill } from "react-icons/pi";
import { FaArrowDownLong, FaArrowUpLong } from "react-icons/fa6";
import {
  AiOutlineSortDescending,
  AiOutlineSortAscending,
} from "react-icons/ai";

function Order() {
  const dispatch = useDispatch();

  const handleOrder = (value) => {
    dispatch(order(value));
  };

  const handleOrderAttack = (value) => {
    dispatch(orderAttack(value));
  };

  return (
    <div className={style.bg}>
      <div className={style.title}>
        <h3>Order</h3>
        <button className={style.button} onClick={() => handleOrder("All")}>
          <GrPowerReset />
        </button>
      </div>

      <div className={style.asdc}>
        <button className={style.button} onClick={() => handleOrder("A")}>
          <AiOutlineSortAscending className={style.iconAl} />
        </button>
        <button className={style.button} onClick={() => handleOrder("D")}>
          <AiOutlineSortDescending className={style.iconAl} />
        </button>
      </div>

      <div className={style.orderAttack}>
        <button
          className={style.button}
          onClick={() => handleOrderAttack("AT-A")}
        >
          <PiSwordFill className={style.iconAt} />
          <FaArrowDownLong className={style.iconAt} />
        </button>
        <button
          className={style.button}
          onClick={() => handleOrderAttack("AT-D")}
        >
          <FaArrowUpLong className={style.iconAt} />
          <PiSwordFill className={style.iconAt} />
        </button>
      </div>
    </div>
  );
}

export default Order;
