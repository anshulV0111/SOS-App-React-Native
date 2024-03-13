import { Platform } from 'react-native'
import Geolocation from '@react-native-community/geolocation'
import Config from '@/Config/app.config'

const axios = require('axios').default

const getCurrentPosition = (callback, errorCallback) => (
  Geolocation.getCurrentPosition(
    callback,
    errorCallback,
    // (error) => {
    //   console.error('ERROR in location service ', error.message)
    // },
    // error => alert('Error: Are location services on?' + error.message),
    Platform.OS === 'ios'
      ? {
          enableHighAccuracy: false,
          timeout: 20000,
          maximumAge: 10000 * 60
        }
      : {
          // enableHighAccuracy: true,
          timeout: 20000,
          maximumAge: 10000 * 60
        }
  )
)

const getAddress = (lat, lng) => {
  return axios.get('https://maps.googleapis.com/maps/api/geocode/json?latlng=' + lat + ',' + lng + '&key=' + Config.GOOGLE_API_KEY)
    .then(res => {
      return res.data
    })
    .catch(err => {
      return err
    })
}

const getLatLng = (placeId) => {
  return axios.get('https://maps.googleapis.com/maps/api/place/details/json?placeid=' + placeId + '&key=' + Config.GOOGLE_API_KEY)
    .then(res => {
      return res.data.result.geometry.location
    })
    .catch(err => {
      return err
    })
}

const getPlaces = (input) => {
  return (
    axios.get('https://maps.googleapis.com/maps/api/place/autocomplete/json?input=' + input + '&key=' + Config.GOOGLE_API_KEY)
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.error('Error in getting places ', err)
        return err
      })
  )
}

const getPlaceDetail = (placeId) => {
  return (
    axios.get('https://maps.googleapis.com/maps/api/place/details/json?placeid=' + placeId + '&key=' + Config.GOOGLE_API_KEY)
      .then(res => {
        return res.data.result
      })
      .catch(err => {
        return err
      })
  )
}

const getPlaceDetailByAddress = (input) => {
  return (
    axios.get('https://maps.googleapis.com/maps/api/place/findplacefromtext/json?input=' + input + '&key=' + Config.GOOGLE_API_KEY)
      .then(res => {
        return res.data
      })
      .catch(err => {
        console.error('Error in getting places ', err)
        return err
      })
  )
}

export const GeoLocationService = {
  getCurrentPosition,
  getAddress,
  getLatLng,
  getPlaces,
  getPlaceDetail,
  getPlaceDetailByAddress
}
