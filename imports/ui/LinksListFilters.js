import React from 'react';
import { Session } from 'meteor/session';
import { Tracker } from 'meteor/tracker';

export default class LisksListFilters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showVisible: false
        }
    }
    componentDidMount() {
        this.tracker = Tracker.autorun(() => {
            this.setState({
                showVisible: Session.get('showVisible')
            })
        });
    }
    componentWillUnmount() {
        this.tracker.stop();
    }
    render() {
        return (
            <div>
                <label className="filter">
                    <input className="filter__box" type="checkbox" checked={!this.state.showVisible} onChange={(e) => Session.set('showVisible', !e.target.checked)}/>
                    Show hidden links
                </label>
            </div>
        );
    }
}
