import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface ProfileResponse {
    id: number;
    username: string;
    email: string;
    firstName: string;
    lastName: string;
    gender: string;
    image: string;
}

export const profileApi = createApi({
    reducerPath: 'profileApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: 'https://dummyjson.com/',
        prepareHeaders: (header, { getState }) => {
            header.set('Authorization', `Bearer ${ (getState() as any).auth.token }`);
        }
    }),
    endpoints: (build) => ({
        getProfile: build.query<ProfileResponse, void>({
            query: (name) => ({
                url: `auth/me`
            }),
        }),
    }),
});

export const { useGetProfileQuery } = profileApi;