import s from './icons.module.scss'

function CloseIcon(props) {
  return (
    <svg
    className={s.close}
      viewBox="0 0 512 512"
      height="30"
      width="30"
      {...props}
    >
      <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
    </svg>
  );
}

export default CloseIcon;
