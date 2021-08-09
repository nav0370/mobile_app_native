/* eslint-disable react-native/no-inline-styles */
import React, { useState, forwardRef } from "react";
import { TextInput } from "react-native-paper";
import theme from "../../theme";

const AppTextInput = forwardRef(
  ({ icon, touched, error, styles, label, ...props }, ref) => {
    const [passwordVisible, setPasswordVisible] = useState(false);
    return (
      <TextInput
        ref={ref}
        label={label}
        mode="outlined"
        style={[
          {
            fontFamily: theme.font.fontRegular,
            backgroundColor: "#fff",
          },
          styles,
        ]}
        // error={error}
        underlineColorAndroid="transparent"
        selectionColor={theme.colors.primary}
        underlineColor={theme.colors.primary}
        {...props}
        right={
          props.autoCompleteType === "password" && (
            <TextInput.Icon
              size={22}
              onPress={() => setPasswordVisible((prev) => !prev)}
              name={passwordVisible ? "eye" : "eye-off"}
            />
          )
        }
        secureTextEntry={
          props.autoCompleteType === "password" && !passwordVisible
        }
      />
    );
  }
);

export default AppTextInput;
