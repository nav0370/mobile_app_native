import React, { useState, useRef } from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scrollview";
import ImagePicker from "react-native-image-crop-picker";
import ActionSheet from "react-native-actionsheet";
import { connect, useDispatch, useSelector } from "react-redux";
import Images from "app/src/Theme/Images";
import InputText from "app/src/Components/InputText";
import PrimaryButton from "app/src/Components/Buttons/PrimaryButton";
import LabelButton from "app/src/Components/Buttons/LabelButton";
import SwitchButton from "app/src/Components/SwitchButton";
import GlobalStyles from "app/src/Theme/GlobalStyles";
import styles from "./styles";
import { signOut, updateProfile } from "../../Store/actions";
import { changeSettings } from "../../Store/actions/menu";
const options = {
  cropping: true,
  includeBase64: true,
};
const ProfileComponent = (props) => {
  const [firstName, setFname] = useState(props.user.firstName);
  const [lastName, setLname] = useState(props.user.lastName);
  const [email, setEmail] = useState(props.user.email);
  const [password, setPassword] = useState(props.user.password);
  const [photoURL, setUri] = useState(props.user.photoURL);
  const [name, setName] = useState("");
  let actionSheet = useRef(null);

  const openPicker = () => {
    ImagePicker.openPicker(options)
      .then((response) => {
        if (response.data) {
          const uri = "data:image/jpeg;base64," + response.data;
          setName(
            response.path.slice(
              response.path.lastIndexOf("/") + 1,
              response.path.length
            )
          );
          setUri(uri);
        }
      })
      .catch((error) => {
        console.log("Profile Picker Error =>", error);
      });
  };
  const openCamera = () => {
    ImagePicker.openCamera(options)
      .then((response) => {
        console.log("Profile openCamera Response = ", response);
        if (response.data) {
          const uri = "data:image/jpeg;base64," + response.data;
          setName(
            response.path.slice(
              response.path.lastIndexOf("/") + 1,
              response.path.length
            )
          );
          setUri(uri);
        }
      })
      .catch((error) => {
        console.log("Profile Picker Error =>", error);
      });
  };
  const showActionSheet = () => {
    actionSheet.show();
  };
  const updatePhoto = (index) => {
    switch (index) {
      case 0:
        openCamera();
        return;
      case 1:
        openPicker();
        return;
      default:
        return null;
    }
  };

  const update_profile = () => {
    if (firstName && lastName && password) {
      props.updateProfile(
        {
          ...props.user,
          firstName,
          lastName,
          photoURL,
          password,
        },
        name
      );
    } else {
      alert("Invalid detail!");
    }
  };

  const dispatch = useDispatch();
  const { language, locale } = useSelector((state) => state.menu);

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        enableAutomaticScroll={true}
        showsVerticalScrollIndicator={false}
        style={GlobalStyles.flex1}
      >
        <View style={styles.pictureWrap}>
          <View>
            <Image
              style={styles.picture}
              source={photoURL ? { uri: photoURL } : Images.logo}
            />
            <TouchableOpacity
              activeOpacity={0.7}
              style={styles.cameraWrap}
              onPress={showActionSheet}
            >
              <Image style={styles.cameraIcon} source={Images.cameraIcon} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.form}>
          <InputText
            placeholder='First name'
            value={firstName}
            onChangeText={(value) => setFname(value)}
            secureTextEntry={false}
            leftIcon='userIcon'
            error={false}
          />
          <InputText
            placeholder='Last name'
            value={lastName}
            onChangeText={(value) => setLname(value)}
            secureTextEntry={false}
            leftIcon='userIcon'
            error={false}
          />

          <InputText
            editable={false}
            color={"#ccc"}
            placeholder='Email'
            value={email}
            onChangeText={(value) => setEmail(value)}
            secureTextEntry={false}
            keyboardType='email-address'
            leftIcon='mailIcon'
            error={false}
          />
          {props.user.password && (
            <InputText
              rightIcon={"keyIcon"}
              placeholder='Password'
              value={password}
              onChangeText={(value) => setPassword(value)}
              secureTextEntry={true}
              leftIcon='keyIcon'
              error={false}
            />
          )}
        </View>
        <PrimaryButton
          label={locale?.profile?.buttonTitle}
          loading={props.updateProfileLoading}
          disabled={false}
          onTap={() => update_profile()}
        />
        <LabelButton
          label={locale?.profile?.logout}
          loading={props.signOutLoading}
          disabled={false}
          onTap={() => props.signOut(props.navigation)}
        />
        <View style={{ marginBottom: 20 }}>
          <SwitchButton
            firstSelected={language === "English"}
            firstLabel='English'
            secondLabel='Punjabi'
            onSelectFirstOption={() => dispatch(changeSettings("English"))}
            onSelectedSecondOption={() => dispatch(changeSettings("Punjabi"))}
          />
        </View>
      </KeyboardAwareScrollView>
      <ActionSheet
        ref={(o) => (actionSheet = o)}
        title={"Change your profile picture"}
        options={["Camera", "Gallery", "Cancel"]}
        cancelButtonIndex={2}
        onPress={(index) => {
          updatePhoto(index);
        }}
      />
    </View>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth_reducer.user,
  updateProfileLoading: state.app_reducer.updateProfileLoading,
});

const mapDispatchToProps = (dispatch) => ({
  signOut: (navigation) => dispatch(signOut(navigation)),
  updateProfile: (user, name) => dispatch(updateProfile(user, name)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfileComponent);
