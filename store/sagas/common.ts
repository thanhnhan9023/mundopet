import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {call, cancelled, put} from 'redux-saga/effects';


export type ActionPayload<T> = {type: string; payload: T};