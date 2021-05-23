import React from "react";
import {Flat} from "./Flat";
import "./FlatList.scss";
import {useSelector} from "react-redux";

export const FlatList = () => {
  const {flats} = useSelector(state => state.flats);
  return (
    <div className="flat-list">
      {flats.map(flat => <Flat key={flat.id} flat={flat}/>)}
    </div>
  )
}