import React, {Component} from 'react';
import {connect} from 'react-redux';
import {StyleSheet, View, FlatList, Text, Button} from 'react-native';

import {getRepos} from '../../../actions/Feed';

import FeedCard from '../../../components/FeedCard';
class Feed extends Component {
    constructor(props) {
      super(props);
      // this.props.test('mth-bs-park');
      this.state = {
        refreshing: false,
        items: [{}, {}],
      };
      this.onListItemsChanged = this.onListItemsChanged.bind(this);
    }
    static aa = {
      waitForInteraction: false,
      viewAreaCoveragePercentThreshold: 95
    }
    render() {
      const {refreshing, items} = this.state;
      const {loading} = this.props.repo;
      // console.log(':::kk', this.props.repo);
      console.log('render:::');
      // <Button title="aa" onPress={this.props.test.bind(this, 'mth-bs-park')}/>
      //onEndReachedThreshold={()=>{console.log('end:::')}}
      //viewabilityConfig={Feed.aa}
      return (
        <View style={styles.container}>
          <FlatList
            style={styles.listContainer}
            data={items}
            renderItem={({item}) => <FeedCard item={item} height={250}/>}
            keyExtractor={(item, index) => index}
            refreshing={refreshing}
            onRefresh={this.refresh.bind(this)}
            onViewableItemsChanged={this.onListItemsChanged}
            onEndReached={()=>{console.log('end:::')}}
            />
        </View>
      )
    }

    refresh() {
      // this.props.test('mth-bs-park');
      this.setState({
        refreshing: true,
      });
      // 아래 코드 onListItemsChanged 에 추가시, rendering 순서가 꼬여서 제대로 안돌아가니 이부분에서 처리하도록 한다..
      setTimeout(() => {
        this.setState({
          items: [{}, {}, {}],
          refreshing: false,
        });
      }, 1000);
    }

    onListItemsChanged(info) {
      // console.log('items chage...', this.state.refreshing)
      this.setState({
        refreshing: false,
      });
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listContainer: {
    backgroundColor: '#fff',
  }
});

const mapStateToProps = (state) => {
  return {
    repo: state.feed
  }
};

const mapDispatchToProps = (dispatch) => ({
  test: () => {dispatch(getRepos())}
})

Feed = connect(mapStateToProps, mapDispatchToProps)(Feed);

export default Feed;