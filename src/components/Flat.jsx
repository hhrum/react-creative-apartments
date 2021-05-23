import React from "react";
import {useDispatch} from "react-redux";
import {likeFlat} from "../redux/flatsReducer";
import "./Flat.scss";

export const Flat = ({flat}) => {
  const dispatch = useDispatch();

  if (!flat) {
    return;
  }

  const {title, rooms, address, area, unit} = flat.attributes;
  const {first_name, last_name, middle_name} = flat.relationships.attributes;

  const onLikeClickHandler = (e) => {
    e.preventDefault();

    dispatch(likeFlat(flat.id));
  }

  const flatLikeClasses = ['flat-like'];

  if (flat.like) {
    flatLikeClasses.push('flat-like--active');
  }

  return (
    <div className="flat">
      <div className="flat__info">
        <div className="flat__title">
          {title}
        </div>
        <div className="flat__rooms">
          Комнат: {rooms} <span>({area} {unit})</span>
        </div>
        <div className="flat__address">
          Адрес: ул.{address.street}, д.{address.house}, кв.{address.room}
        </div>
        <div className="flat__agent">
          Агент: {last_name} {first_name} {middle_name}
        </div>
      </div>
      <div className="flat__like">
        <div className={flatLikeClasses.join(" ")} onClick={onLikeClickHandler}>
          Like
        </div>
      </div>
    </div>
  )
}
//{"flat-like": true, "flat-like--active": flat.liked}