import s from "./icons.module.scss";

// icon:document-text-outline | Ionicons https://ionicons.com/ | Ionic Framework
import * as React from "react";

function DocIcon(props) {
  return (
    <svg
      className={s.doc}
      viewBox="0 0 512 512"
      height="30"
      width="30"
      {...props}
    >
      <path
        fill="none"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M416 221.25V416a48 48 0 01-48 48H144a48 48 0 01-48-48V96a48 48 0 0148-48h98.75a32 32 0 0122.62 9.37l141.26 141.26a32 32 0 019.37 22.62z"
      />
      <path
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M256 56v120a32 32 0 0032 32h120M176 288h160M176 368h160"
      />
    </svg>
  );
}

export default DocIcon;
