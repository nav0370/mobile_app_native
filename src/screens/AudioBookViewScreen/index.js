import React, { useEffect, useState } from "react";
import {
  Image,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,
  ScrollView,
  RefreshControl,
} from "react-native";
import { Button } from "react-native-paper";
import TrackPlayer, { usePlaybackState } from "react-native-track-player";
import Ionicons from "react-native-vector-icons/Ionicons";
import Header from "../../components/Header";
import theme from "../../theme";
import GlobalStyles from "../../utils/globalStyles";
import NavigationService from "../../utils/NavigationService";
import { Rating } from "react-native-ratings";
import {
  addItemToWishList,
  getSingleAudioBook,
} from "../../store/services/audiobooks";
import { useDispatch, useSelector } from "react-redux";
import dayjs from "dayjs";

const { height, width } = Dimensions.get("window");

const AudioBookViewScreen = ({
  route: {
    params: { audiobook },
  },
}) => {
  const addToWishList = () =>
    addItemToWishList({ body: { audioBook: bookDetails?._id } })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

  const dispatch = useDispatch();
  const { user, bookDetails } = useSelector((state) => ({
    user: state.auth_reducer.user,
    bookDetails: state.app_reducer.bookDetails,
  }));
  console.log(bookDetails, "BOOK bookDetails");
  const [refreshing, setRefreshing] = useState(false);

  const getAudioBook = () => {
    setRefreshing(true);
    getSingleAudioBook({ pathParams: { bookId: audiobook?._id } })
      .then((res) => {
        setRefreshing(false);
        dispatch({
          type: "SAVE_SINGLE_AUDIO",
          payload: res,
        });
      })
      .catch(() => setRefreshing(false));
  };

  useEffect(() => {
    dispatch({
      type: "SAVE_SINGLE_AUDIO",
      payload: audiobook,
    });
  }, [audiobook]);

  const playbackState = usePlaybackState();
  useEffect(() => {
    setup();
  }, []);

  const setup = async () => {
    await TrackPlayer.setupPlayer({});
    await TrackPlayer.updateOptions({
      stopWithApp: true,
      capabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_SKIP_TO_NEXT,
        TrackPlayer.CAPABILITY_SKIP_TO_PREVIOUS,
        TrackPlayer.CAPABILITY_STOP,
      ],
      compactCapabilities: [
        TrackPlayer.CAPABILITY_PLAY,
        TrackPlayer.CAPABILITY_PAUSE,
        TrackPlayer.CAPABILITY_STOP,
      ],
    });
  };

  const togglePlayback = async () => {
    const currentTrack = await TrackPlayer.getCurrentTrack();
    console.log(currentTrack, "TRACK");
    if (currentTrack == null) {
      await TrackPlayer.reset();
      await TrackPlayer.add({
        id: "3333",
        url: {
          uri: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        },
        title: "Suhavi Audio Books",
        artist: "Suhavi Audio Books",
        artwork:
          "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
      });
      await TrackPlayer.play();
    } else {
      if (playbackState === TrackPlayer.STATE_PLAYING) {
        await TrackPlayer.pause();
      } else if (playbackState === TrackPlayer.STATE_PAUSED) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.reset();
        await TrackPlayer.add({
          id: "3333",
          url: {
            uri: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
          },
          title: "Suhavi Audio Books",
          artist: "Suhavi Audio Books",
          artwork:
            "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg",
        });
        // await TrackPlayer.pause();
      }
    }
  };
  const stop = () => {
    TrackPlayer.stop();
  };
  return (
    <SafeAreaView style={GlobalStyles.content}>
      <StatusBar translucent backgroundColor="#fff" barStyle="dark-content" />
      <Header
        left={
          <TouchableOpacity onPress={() => NavigationService.goBack()}>
            <Ionicons name="arrow-back" size={22} />
          </TouchableOpacity>
        }
        title={bookDetails?.name}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 12 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={getAudioBook} />
        }
      >
        <Image
          //   resizeMode="contain"
          source={{
            uri: bookDetails?.cover,
          }}
          style={{
            height: height * 0.4,
            // paddingHorizontal: width * 0.2,
            marginVertical: height * 0.01,
          }}
        />
        <View style={{ marginVertical: 10 }}>
          <Text
            style={{
              fontFamily: theme.font.fontSemiBold,
              fontSize: 16,
              paddingBottom: 5,
            }}
          >
            {bookDetails?.name}
          </Text>
          <Text
            style={{ fontFamily: theme.font.fontRegular, paddingVertical: 1 }}
          >
            Written By:
            <Text style={{ color: theme.colors.blue }}>
              {" "}
              {bookDetails?.writtenBy}
            </Text>
          </Text>
          <Text
            style={{ fontFamily: theme.font.fontRegular, paddingVertical: 1 }}
          >
            Narrated By:
            <Text style={{ color: theme.colors.blue }}>
              {" "}
              {bookDetails?.narratedBy}
            </Text>
          </Text>
          <Text
            style={{ fontFamily: theme.font.fontRegular, paddingVertical: 1 }}
          >
            Length: 5 hrs 35 mins
          </Text>
          {bookDetails?.releaseDate && (
            <Text
              style={{ fontFamily: theme.font.fontRegular, paddingVertical: 1 }}
            >
              Release Date:{" "}
              {dayjs(bookDetails?.releaseDate).format("YYYY-MM-DD")}
            </Text>
          )}
          {bookDetails?.language && (
            <Text
              style={{ fontFamily: theme.font.fontRegular, paddingVertical: 1 }}
            >
              Language: {bookDetails?.language}
            </Text>
          )}
          <Text
            style={{ fontFamily: theme.font.fontRegular, paddingVertical: 1 }}
          >
            Publisher:
            <Text style={{ color: theme.colors.blue }}> James Clear</Text>
          </Text>
          <Text
            style={{ fontFamily: theme.font.fontRegular, paddingVertical: 1 }}
          >
            Categories:
            <Text style={{ color: theme.colors.blue }}>
              {" "}
              Health & Wellness, Mental Health
            </Text>
          </Text>
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Rating
              type="custom"
              editable={false}
              jumpValue={3}
              readonly
              imageSize={16}
              startingValue={bookDetails?.rating || 0}
              ratingCount={5}
              defaultRating={4}
              style={{
                paddingVertical: 6,
                flexDirection: "row",
                alignContent: "flex-start",
              }}
            />
            <Text
              style={{
                fontFamily: theme.font.fontRegular,
                fontSize: 12,
                marginLeft: 5,
              }}
            >
              {bookDetails?.rating || 0}{" "}
              <Text style={{ color: theme.colors.blue }}>
                {" "}
                ({bookDetails?.totalRating || 0} ratings)
              </Text>
            </Text>
          </View>
          <Button
            style={{
              marginTop: 10,
              backgroundColor: "#e6e6e6",
            }}
            mode="contained"
            onPress={() => togglePlayback()}
            uppercase={false}
            icon="play"
          >
            Sample Now
          </Button>
          <Button
            style={{
              marginVertical: 10,
              backgroundColor: "#e6e6e6",
            }}
            mode="contained"
            uppercase={false}
            icon="cart"
            onPress={addToWishList}
          >
            Add to Wish List
          </Button>

          <View>
            <Text
              style={{
                fontFamily: theme.font.fontSemiBold,
                fontSize: 15,
                paddingVertical: 4,
              }}
            >
              Summary
            </Text>
            {bookDetails?.description && (
              <Text
                style={{
                  fontFamily: theme.font.fontRegular,
                  color: theme.colors.secondary,
                  marginBottom: 20,
                }}
              >
                {bookDetails?.description}
              </Text>
            )}
          </View>
        </View>
      </ScrollView>
      <Button
        mode="contained"
        uppercase={false}
        style={{ position: "absolute", bottom: 0, width, paddingVertical: 5 }}
        onPress={() => stop()}
      >
        Buy Now for ₹500.00
      </Button>
    </SafeAreaView>
  );
};

export default AudioBookViewScreen;

const styles = StyleSheet.create({});
