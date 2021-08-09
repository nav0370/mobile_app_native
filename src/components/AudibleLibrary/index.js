import React, { useRef } from "react";
import { TouchableOpacity, View, Image, Text } from "react-native";
import ActionSheet from "react-native-actionsheet";
import { connect } from "react-redux";
import TimeBar from "app/src/Components/TimeBar";
import Images from "app/src/Theme/Images";
import G from "app/src/Theme/GlobalStyles";
import Time from "app/src/Helpers/Time";
import styles from "./styles";
import { download_audible } from "../../Store/actions/index";
const AudibleLibrary = (props) => {
  const { data, library = true } = props;
  const { image, title, author, reader, chapters, tracks, downloaded } = data;
  let actionSheet = useRef(null);
  const onDownloadAudio = () => {
    props.downloadAudible(props.data);
  };
  const onDeleteAudio = () => {
    props.deleteAudible(props.data);
  };
  const formatTime = (seconds) => {
    return seconds > 3600
      ? [
          parseInt(seconds / 60 / 60),
          parseInt((seconds / 60) % 60),
          parseInt(seconds % 60),
        ]
          .join(":")
          .replace(/\b(\d)\b/g, "0$1")
      : [parseInt((seconds / 60) % 60), parseInt(seconds % 60)]
          .join(":")
          .replace(/\b(\d)\b/g, "0$1");
  };
  var total_chapters = 0;
  if (Object.keys(data).length) {
    data.tracks?.map((item) => {
      total_chapters = total_chapters + item.time;
    });
  }
  let time_left =
    props.data.listnings && props.data.listnings[props.user.uid]
      ? props.data.listnings[props.user.uid].time
      : 0;
  let total =
    props.data.listnings && props.data.listnings[props.user.uid]
      ? props.data.listnings[props.user.uid].total
      : 0;
  var bar =
    props.data.listnings && props.data.listnings[props.user.uid]
      ? 80 - (80 / total) * time_left
      : 80;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      onPress={props.onPress}
    >
      <View style={[G.flexRow]}>
        <Image
          style={styles.imageBackground}
          source={{ uri: image }}
          resizeMode='cover'
        />
        <View style={styles.information}>
          <Text style={styles.title} numberOfLines={2}>
            {title}
          </Text>
          <Text style={styles.text}>By {author}</Text>
          <Text style={styles.text}>Narrated by {reader}</Text>
          <View style={[G.flexRow, G.alignCenter, { marginTop: 10 }]}>
            <View style={[G.flex1]}>
              <TimeBar progress={bar} />
            </View>
            <View style={[G.flex1, { marginLeft: 10 }]}>
              <Text style={styles.time}>{formatTime(total_chapters)}</Text>
            </View>
          </View>
        </View>
      </View>
      {library ? (
        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => actionSheet.show()}
        >
          <Image style={styles.dotIcon} source={Images.dotHIcon} />
        </TouchableOpacity>
      ) : null}
      <ActionSheet
        ref={(o) => (actionSheet = o)}
        title={"Would you like to ?"}
        options={[downloaded ? "Delete" : "Download", "Cancel"]}
        cancelButtonIndex={1}
        onPress={(index) => {
          index === 0
            ? downloaded
              ? onDeleteAudio()
              : props.download_audible(data)
            : null;
        }}
      />
    </TouchableOpacity>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth_reducer.user,
});

const mapDispatchToProps = (dispatch) => ({
  download_audible: (audible) => dispatch(download_audible(audible)),
  // deleteAudible: (audible) => dispatch(AudibleActions.deleteAudible(audible, false)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AudibleLibrary);
