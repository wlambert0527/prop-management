import React, { Component } from 'react';

import ScheduleCourse from './scheduleCourse'
import Gradient from '../gradient';

class Schedule extends Component {
    render() {
        return(
            <div className="schedule">
                <h1 className="schedule__title">My Schedule</h1>
                <ScheduleCourse />
                <ScheduleCourse />
                <ScheduleCourse />
                <Gradient/>
            </div>
        )
    }
}

export default Schedule;