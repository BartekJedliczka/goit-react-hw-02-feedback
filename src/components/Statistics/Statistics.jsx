// import { Component } from 'react';
// import css from './Statistics.module.css';
// import PropTypes from 'prop-types';
// // import AnimatedNumber from 'animated-number-react';

// class Statistics extends Component {
//   render() {
//     const { good, neutral, bad, total } = this.props;
//     return (
//       <>
//         <ul className={css.list}>
//           <li className={css.item}>Good: {good}</li>
//           <li className={css.item}>Neutral: {neutral}</li>
//           <li className={css.item}>Bad: {bad}</li>
//           <li className={css.item}>Total: {total}</li>
//         </ul>
// <p className={css.feedback}>Positive feedback: %</p>
//       </>
//     );
//   }
// }

// Statistics.propTypes = {
//   good: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   bad: PropTypes.number.isRequired,
//   total: PropTypes.number.isRequired,
//   positivePercentage: PropTypes.number.isRequired,
//   formatValue: PropTypes.func,
// };

// export default Statistics;

import { Component } from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total } = this.props;
    return (
      <>
        <ul className={css.list}>
          <li className={css.item}>Good: {good}</li>
          <li className={css.item}>Neutral: {neutral}</li>
          <li className={css.item}>Bad: {bad}</li>
          <li className={css.item}>Total: {total}</li>
        </ul>
        <p>Positive feddback: (' ')&</p>
      </>
    );
  }
}

Statistics.propTypes = {
  good: PropTypes.string.isRequired,
  neutral: PropTypes.string.isRequired,
  bad: PropTypes.string.isRequired,
};

export default Statistics;
