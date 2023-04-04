import { useDispatch } from "react-redux";
import { information as ENinformation } from "../../../information/english";
import { information as SPinformation } from "../../../information/spanish";

import { setInformation } from "../../../redux/reducers";

export default function Language() {
  const dispatch = useDispatch();
  const changeLanguage = ({ target }) => {
    const { value } = target;
    if (value === "EN") dispatch(setInformation({ ...ENinformation }));
    else dispatch(setInformation({ ...SPinformation }));
  };

  return (
    <select
      onChange={changeLanguage}
      className="block bg-main rounded-md shadow w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
    >
      <option value="EN" className="">
        EN
      </option>
      <option value="SP" className="">
        SP
      </option>
    </select>
  );
}