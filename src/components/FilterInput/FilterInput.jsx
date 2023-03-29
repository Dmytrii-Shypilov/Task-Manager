import s from "./filter-input.module.scss";

import { useEffect, useState } from "react";

const FilterInput = ({ contributors }) => {
  const [lists, setLists] = useState({ initial: [], filtered: [] });
  const [inputValue, setInputValue] = useState("");
  const [isDroped, setIsDroped] = useState(false)

  useEffect(() => {
    setLists({
      initial: contributors,
      filtered: contributors,
    });
  }, [contributors]);

 
  const hanldeOnChange = (e) => {
    setInputValue(e.target.value)
    setLists((prevState) => {
      const filtered = lists.initial.filter((contributor) =>
        contributor.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      return {
        ...prevState,
        filtered
      };
    });
  };

  const toggleDrop = (e)=> {
    setIsDroped(!isDroped)
  }

  const selectContributor = (e) => {
    setInputValue(e.target.textContent)
    setIsDroped(false)
  }

  const list = lists.filtered.map((contributor) => {
    return <li onClick={selectContributor} className={s.listItem}>{contributor.name}</li>;
  });

  return (
    <div className={s.wrapper}>
      <input className="input-field" onClick={toggleDrop} value={inputValue} onChange={hanldeOnChange} type="text" />
      {isDroped && <ul id="drop-menu" className={s.list}>{list}</ul>}
    </div>
  );
};

export default FilterInput;
