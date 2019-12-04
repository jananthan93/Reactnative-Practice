import React from 'react';
import {Block,Text} from './components';
import {StyleSheet,Image,SafeAreaView,TouchableOpacity,ScrollView} from 'react-native';
import * as theme from './components/theme';
import * as mocks from "./components/mocks";
import { LineChart, Path } from 'react-native-svg-charts';
import { Line } from "react-native-svg";
import * as shape from 'd3-shape';

class Iblood extends React.Component {
  
  renderHeader(){
      return(
        <Block column flex={0.42}  style={{paddingHorizontal:15}}>
          <Block flex={false} row style={{paddingVertical:25}} >
            <Block center>
              <Text center h3 white>Blood Requests</Text>
            </Block>
            {/* <Image style={styles.avatar} source={}></Image> */}
          </Block>
          <Block card shadow color="white" style={styles.headerChart}>
          <Block row space="between" style={{ paddingHorizontal: 30 }}>
            <Block row center style={{marginRight:90 }}>
              <Text bold h1>182</Text>
              <Text caption bold tertiary style={{ paddingHorizontal: 10 }}>
                -09%
              </Text>
            </Block>
            <Block  row center>
              <Text caption bold primary style={{ paddingHorizontal: 10 }}>
                +28%
              </Text>
              <Text h1 bold>391</Text>
            </Block>
          </Block>
          <Block space="between" row  right style={{ paddingHorizontal: 30,marginRight:-180 }} >
            <Block row><Text caption light> Available</Text></Block>
            <Block row><Text caption light> Requests</Text></Block>
          </Block>
          <Block flex={1.5}>
            {this.renderChart()}
          </Block>
        </Block>
        </Block>
      )
    
  }
  renderChart() {
    const { chart } = this.props;
    const LineShadow = ({ line }) => (
      <Path
        d={line}
        fill="none"
        stroke={theme.colors.primary}
        strokeWidth={7}
        strokeOpacity={0.07}
      />
    );
    return (
      <LineChart
        yMin={0}
        yMax={10}
        data={chart}
        style={{ flex: 2 }}
        curve={shape.curveMonotoneX}
        svg={{
          stroke: theme.colors.primary,
          strokeWidth: 1.5
        }}
        contentInset={{ left: theme.sizes.base, right: theme.sizes.base }}
      >
        <LineShadow belowChart={true} />
        <Line
          key="zero-axis"
          x1="0%"
          x2="100%"
          y1="50%"
          y2="50%"
          belowChart={true}
          stroke={theme.colors.gray}
          strokeDasharray={[2, 20]}
          strokeWidth={1}
        />
      </LineChart>
    );
  }
  renderRequest(request) {
    return (
      <Block row card shadow color="white" style={styles.request}>
        <Block
          flex={0.2}
          card
          column
          color="secondary"
          style={styles.requestStatus}
        >
          <Block flex={0.25} middle center color="primary">
            <Text small white style={{ TextTransform: "uppercase" }}>
              {request.priority}
            </Text>
          </Block>
          <Block flex={0.7} center middle>
            <Text h2 white>
              {request.bloodType}
            </Text>
          </Block>
        </Block>
        <Block flex={0.75} column middle>
          <Text h3 center style={{ paddingVertical: 8, }}>{request.name}</Text>
          <Text caption center rrbold>
            {request.age}  •  {request.gender}  •  {request.distance}km  •  {request.time}hrs
          </Text>
        </Block>
      </Block>
    );
  }
  
  renderRequests(){
    const { requests } = this.props;
    return (
      <Block flex={0.8} column color="gray2" style={styles.requests}>
        <Block flex={false} row space="between" style={styles.requestsHeader}>
          <Block >
          <Text light>Recent Updates</Text>
          </Block>
          <Block right style={{marginRight:-180 }}>
          <TouchableOpacity activeOpacity={0.8}>
            <Text bold>View All</Text>
          </TouchableOpacity>
          </Block>
        </Block>
        <ScrollView showsVerticalScrollIndicator={false}>
          {requests.map(request => (
            <TouchableOpacity activeOpacity={0.8} key={`request-${request.id}`}>
              {this.renderRequest(request)}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Block>
    );
  }
  
  render(){
    return (
    <>
    <SafeAreaView style={styles.safe}>
      {this.renderHeader()}
      {this.renderRequests()}
    </SafeAreaView>
    </>
  )}
    
};
Iblood.defaultProps = {
  requests: mocks.requests,
  chart: mocks.chart,
};
export default Iblood;
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: theme.colors.accent
  },
  headerChart: {
    paddingTop: 30,
    paddingBottom: 45,
    zIndex: 0,
    borderWidth: 0.5,
    borderColor:'black',
  },
  requests: {
    marginTop: -45,
    paddingTop: 55,
    paddingHorizontal: 15,
    zIndex: -1
  },
  requestsHeader: {
    paddingHorizontal: 20,
    paddingBottom: 15
  },
  request: {
    padding: 20,
    marginBottom: 15,
    borderWidth: 0.5,
    borderColor:'black',
  },
  requestStatus: {
    marginRight: 20,
    overflow: "hidden",
    height: 90
  }
});


