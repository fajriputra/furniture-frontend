import React, { useState } from "react";

import IconHide from "assets/images/icons/icon-hide.svg";
import IconShow from "assets/images/icons/icon-show.svg";

export default function useTogglePassword() {
  const [visible, setVisiblity] = useState(false);

  const Icon = (
    <img
      src={visible ? `${IconShow}` : `${IconHide}`}
      onClick={() => setVisiblity((visiblity) => !visiblity)}
      alt="toggle password"
    />
  );

  const InputType = visible ? "text" : "password";

  return [InputType, Icon];
}
