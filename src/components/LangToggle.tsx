// import { useState } from 'react';

function LangToggle() {
//   const [checked, setChecked] = useState(false);

//   const handleToggle = () => {
//     setChecked(!checked);
//   };

  return (
    <>
        <label className="flex cursor-pointer gap-2">
        pt
        <input type="checkbox" value="" className="toggle" />
        en
        </label>

    </>
  );
}

export default LangToggle;
