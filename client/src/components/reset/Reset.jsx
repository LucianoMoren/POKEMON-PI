import React from "react";
import style from "./reset.module.css";
import { useDispatch } from "react-redux";
import { GrPowerReset } from "react-icons/gr";
import { reset } from "../../redux/actions";

function Reset() {
  const dispatch = useDispatch();

  const handlerReset = (value) => {
    dispatch(reset(value));
  };

  return (
    <div>
      <div>
        <button className={style.reset} onClick={() => handlerReset("Reset")}>
          <GrPowerReset className={style.icoReset} />
        </button>
      </div>
    </div>
  );
}

export default Reset;
