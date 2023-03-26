import s from './icons.module.scss'

function DeleteIcon(props) {
    return (
      <svg className={s.del}
        viewBox="0 0 24 24"
        height="25"
        width="25"
        {...props}
      >
        <path d="M6 19a2 2 0 002 2h8a2 2 0 002-2V7H6v12M8 9h8v10H8V9m7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z" />
      </svg>
    );
  }
  
  export default DeleteIcon;