import React from 'react';
import PropTypes from 'prop-types';


function Keg(props){
  const kegInformation =
    <div>
      <th>{props.name}</th>
      <td>{props.brewery}</td>
      <td>{props.type}</td>
      <td>{props.price}</td>
      <td>{props.alcContent}</td>
      <td>{props.pintsLeft}</td>
    </div>;
  if (props.currentRouterPath === '/admin'){
    return (
      <div onClick={() => {props.onKegSelection(props.kegId);}}>
        {kegInformation}
      </div>
    );
  } else {
    return (
      <div>
        {kegInformation}
      </div>
    );
  }
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brewery: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  alcContent: PropTypes.number.isRequired,
  pintsLeft: PropTypes.number.isRequired,
  currentRouterPath: PropTypes.string,
  onKegSelection: PropTypes.func
};

export default Keg;
