import React from "react";
export const isMountedRef = React.createRef();
export const navigationRef = React.createRef();

const navigate = (name, params) => {
  if (isMountedRef.current && navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(name, params);
    console.log(navigationRef, "REFFFFF");
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
};

const reset = (name, params) =>
  navigationRef.current.reset({
    index: 0,
    routes: [{ name, params }],
  });

const goBack = () => navigationRef.current.goBack();
const replace = () => navigationRef.current.replace();

export default { reset, goBack, navigate, replace };
