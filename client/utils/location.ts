import axios from "axios"

import { Coordinates, Retailer } from "~/models/location"
import { degToRad } from "~/utils/math"

/**
 * Get all location from a given list in a defined range.
 * @param locations The list of locations to check
 * @param startingPoint The central starting point to calculate the central point
 * @param range The range where to to filter
 */
export async function getLocationInRange(locations: Retailer[], startingPoint: string, range: number) {
  try {
    const startingAdress = startingPoint.match(/^\d/) ? startingPoint + ",germany" : startingPoint
    const centralResult = await getSwitchedGeoCode(startingAdress)
    const central = centralResult.results[0].geometry.location
    const inRange = locations.filter(coordinate => {
      if (!coordinate.lat || !coordinate.lng) {
        return false
      }
      const distance = getDistance(coordinate.lat, coordinate.lng, central.lat, central.lng)
      return distance < range
    })
    return inRange
  } catch (err) {
    return []
  }
}

/**
 * Get the switched geo code data from an address or coordinates.
 * @param param The address or coordinates to switch
 */
export async function getSwitchedGeoCode(param: string | Coordinates) {
  const googleBaseUrl = "https://maps.googleapis.com/maps/api/geocode/json"
  const googleUrlParameter =
    typeof param === "string" ? `?address=${param}` : `?latlng=${param.latitude},${param.longitude}`
  const googleUrlApiKey = `&key=${process.env.googleApi}`
  const geoCodeResponse = await axios.get(googleBaseUrl + googleUrlParameter + googleUrlApiKey)
  return geoCodeResponse.data
}

/**
 * Determines the great-circle distance between two points on a sphere given their longitudes and latitudes.
 * @param lat1 The latitude from destination 1
 * @param lon1 The longitude from destination 1
 * @param lat2 The latitude from destination 2
 * @param lon2 The longitude from destination 2
 * @see https://en.wikipedia.org/wiki/Haversine_formula
 * @see https://rosettacode.org/wiki/Haversine_formula#JavaScript
 */
export function getDistance(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371 // Radius of the earth in km
  const dLat = degToRad(lat2 - lat1)
  const dLon = degToRad(lon2 - lon1)

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(degToRad(lat1)) * Math.cos(degToRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c // Distance in km
}
