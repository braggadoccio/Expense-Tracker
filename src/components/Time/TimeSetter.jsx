import TimePicker from "react-time-picker";
import { useState } from "react";
import { useDispatch } from "react-redux";
import moment from "moment/moment";
// import { setTime } from "../../redux/date/dateSlice";

export const TimeSetter = () => {
  const [setTime, selectedTime] = useState("00:00:00");
  //   const [selectedTime, setSelectedTime] = useState(Time.now());
  const dispatch = useDispatch;
  const handleChange = (time) => {
    const formattedTime = moment(time).format("00:00:00");
    selectedTime(time);
    dispatch(setTime(formattedTime));
  };
  return (
    <div>
      <TimePicker onChange={handleChange} value={setTime} />
    </div>
  );
};
