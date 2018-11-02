import React from 'react'
import DatePicker from 'react-datepicker'
import moment from 'moment'

export default class ShowOneWeek extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      startDate: moment(),
      subtexts: [
          ['$30+', '$50+', '$50+', '$50+', '$50+', '$50+', '$50+'],
          ['$30+', '$50+', '$50+', '$50+', '$50+', '$50+', '$50+'],
          ['$30+', '$50+', '$50+', '$50+', '$50+', '$50+', '$50+'],
          ['$30+', '$50+', '$50+', '$50+', '$50+', '$50+', '$50+'],
          ['$30+', '$50+', '$50+', '$50+', '$50+', '$50+', '$50+']
      ]
    }
  }

  handleChange = (date) => {
    this.setState({
      startDate: date
    })
  }

  handleClick = () => {
    console.log('click')
  }

  render () {
    return <div className="row">
      <pre className="column example__code">
        <code className="jsx">{`
<DatePicker
    inline
    showOneWeekAtATime
    selected={this.state.startDate}
    onChange={this.handleChange}
    onDisabledClick={this.handleClick}
    excludeDates={[moment(), moment().add(1, 'days')]}
/>
`}
        </code>
      </pre>
      <div className="column">
        <DatePicker
            inline
            showTwoWeeksAtATime
            subtexts={this.state.subtexts}
            selected={this.state.startDate}
            onChange={this.handleChange}
            onDisabledClick={this.handleClick}
            excludeDates={[moment().add(1, 'days').format('YYYY-MM-DD'), moment().add(2, 'days').format('YYYY-MM-DD')]}
            minDate={moment().startOf('day')} />
      </div>
    </div>
  }
}
