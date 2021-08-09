import React from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

import { secondsConvert } from 'app/src/Helpers/Time';

import styles from './styles';
import menu from '../../Store/reducers/menu';

const StatisticComponent = (props) => {
  const { user, locale } = props;
  const { engageTime } = user;
  return (
    <View style={styles.container}>
      <View style={styles.buttonWrap}>
        <View style={[styles.button]} activeOpacity={0.7}>
          <Text style={styles.buttonText}>Total</Text>
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.month}>
          <View style={styles.row}>
            <Text style={styles.monthNumber}>
              {secondsConvert(engageTime || 0).month}
            </Text>
            <Text style={styles.normalText}>
              {locale?.profile?.stats?.month}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.monthNumber}>
              {secondsConvert(engageTime || 0).day}
            </Text>
            <Text style={styles.normalText}>
              {locale?.profile?.stats?.days}
            </Text>
          </View>
        </View>
        <View style={styles.month}>
          <View style={styles.row}>
            <Text style={styles.monthNumber}>
              {secondsConvert(engageTime || 0).hour}
            </Text>
            <Text style={styles.normalText}>
              {locale?.profile?.stats?.hours}
            </Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.monthNumber}>
              {secondsConvert(engageTime || 0).minute}
            </Text>
            <Text style={styles.normalText}>
              {locale?.profile?.stats?.mins}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth_reducer.user,
  locale: state.menu.locale,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StatisticComponent);
