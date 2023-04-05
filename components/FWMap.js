import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';

const FWMapView  = (props) => {
  const { children, hide, style } = props;
  if (hide) {
    return null;
  }
  return (
    <MapView style={styles.map} />
  );
};

FWMapView.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
      PropTypes.element,
    ])),
  ]).isRequired,
  style: ViewPropTypes.style,
  hide: PropTypes.bool,
};



  const styles = StyleSheet.create({
    map: {
  
      borderRadius: 8,
      paddingVertical: 300,
      paddingHorizontal: 150,
      backgroundColor: '#97191b',
      paddingTop: 10,
      marginTop:200,
  
  
      color: 'white',
      fontWeight: 'bold',
      textTransform: 'uppercase',
      fontSize: 16,
      textAlign: 'center',
    }
  });

  export default MyView;