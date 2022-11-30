import "./list.css"
import { Navbar } from "../components/Navbar";
import { Header } from "../components/header/Header";
import {useState } from "react";
import { useLocation } from "react-router-dom";
import format from "date-fns/format";

const List = () => {
  const location = useLocation()

  const [destination, setDestination] = useState(location.state.destination)
  const [date, setDate] = useState(location.state.date)
  const [options, setOptions] = useState(location.state.options)

  return (
    <div>
      <Navbar />
      <Header type="List"/>
      <div className="listContainer">
        <div className="ListWrapper">
           <div className="listSearch">
               <h1 className="lsTitle">Search</h1>
              <div className="lsItem">
                <label>Destination</label>
                <input type="text" placeholder="destination"/>
              </div>
              <div className="lsItem">
                <label>Check-in Date</label>
                <span>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
              </div>
           </div>
           <div className="listResult"></div>
        </div>
      </div>
    </div>
  )
}
export default List;