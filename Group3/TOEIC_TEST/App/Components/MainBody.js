import React, { useEffect, useState, Component } from 'react'
import {
    View,
    SafeAreaView,
    StatusBar
} from 'react-native'
import ScrollableTabView, { DefaultTabBar } from 'react-native-scrollable-tab-view'
import styles from './Styles/MainBodyStyles'
import TabBar from './TabBar'
import LearnTab from './LearnTab'
import TestTab from './TestTab'
import ReviewTab from './ReviewTab'
import SettingTab from './SettingTab'
console.disableYellowBox = true;
class MainBody extends Component {
    static navigationOptions = {
        headerShown: false
    }
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <SafeAreaView style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor='transparent' translucent={true} />
                <ScrollableTabView
                    style={styles.container}
                    tabBarPosition='bottom'
                    initialPage={0}
                    renderTabBar={() => <TabBar {...this.props} />}
                >
                    <View tabLabel="Từ vựng" style={styles.tabView}>
                        <LearnTab {...this.props} />
                    </View>
                    <View tabLabel="Kiểm tra" style={styles.tabView}>
                        <TestTab {...this.props} />
                    </View>
                    <View tabLabel="Xem lại" style={styles.tabView}>
                        <ReviewTab {...this.props} />
                    </View>
                    <View tabLabel="Cài đặt" style={styles.tabView}>
                        <SettingTab {...this.props} />
                    </View>
                </ScrollableTabView>
            </SafeAreaView>
        );
    }

}
export default MainBody