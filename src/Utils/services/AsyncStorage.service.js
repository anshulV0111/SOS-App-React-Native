import AsyncStorage from '@react-native-async-storage/async-storage'
import { AUTH_TOKEN } from '../constants'

export const saveAuthToken = async (value) => {
  try {
    await AsyncStorage.setItem(AUTH_TOKEN, value)
  } catch {}
}

export const removeAuthToken = async () => {
  try {
    await AsyncStorage.removeItem(AUTH_TOKEN)
  } catch {}
}

export const getAuthToken = async () => {
  try {
    return await AsyncStorage.getItem(AUTH_TOKEN)
  } catch {}
}

export const saveDataInAsyncStorage = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value))
  } catch {}
}

export const removeDataFromAsyncStorage = async (key) => {
  try {
    await AsyncStorage.removeItem(key)
  } catch {}
}

export const getDataFromAsyncStorage = async (key) => {
  try {
    return JSON.parse(await AsyncStorage.getItem(key))
  } catch {}
}

export const clearAsyncStorage = async () => {
  try {
    await AsyncStorage.clear()
  } catch {}
}
