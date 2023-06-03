import s from "./materials-list.module.scss";


import ListItem from "./ListItem";

const MaterialsList = ({ materials }) => {


  const list = materials.map((item) => {
    return (
      <ListItem item={item}/>
    );
  });

  return <ul className={s.list}>{list}</ul>;
};

export default MaterialsList;
