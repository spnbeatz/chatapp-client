// src/reducers/userReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface RoutePositionState {
    position: number
}

interface Members {
    id: string,
    avatar: string,
    username: string,
}

interface Message {
    userId: string,
    value: string,
    timestamp: string,
    avatar: string,
    new: boolean,
    username: string
}

interface Conv {
    id: string,
    members: Members[],
    messages: Message[]
}

const initialState: Conv[] = [
    {"id":"663d1b7a6c006d2c13820aa9664f7834fe967584e6519948","members":[{"id":"663d1b7a6c006d2c13820aa9","avatar":"https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=","username":"szopciowy"},{"id":"664f7834fe967584e6519948","avatar":"https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=","username":"dupa123"}],"messages":[{"userId":"663d1b7a6c006d2c13820aa9","value":"siem","timestamp":"2024-05-23T17:09:31.348Z","avatar":"https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=","new":true,"username":"szopciowy"}]}
]

const userSlice = createSlice({
  name: 'exampleConvs',
  initialState,
  reducers: {


  },
});

export const {  } = userSlice.actions;

export default userSlice.reducer;