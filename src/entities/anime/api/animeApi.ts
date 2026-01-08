import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type { 
  JikanResponseList,
  JikanResponseSingle,
  JikanResponseCharacters,
  JikanResponseStaff,
  JikanResponseEpisodes,
  JikanResponseVideos,
  JikanResponseReviews} from '../model/types'

export const animeApi = createApi({
  reducerPath: "animeApi",
  baseQuery: fetchBaseQuery({baseUrl: 'https://api.jikan.moe/v4/'}),
  keepUnusedDataFor: 30,
  endpoints: (builder) => ({
    getTopAnime: builder.query<JikanResponseList,void>({
      query: () => `/top/anime`}),
    getAnimeById: builder.query<JikanResponseSingle,number>({
      query: (id) => `/anime/${id}/full`}),
    getAnimeCharacters: builder.query<JikanResponseCharacters,number>({
      query: (id) => `/anime/${id}/characters`}),
    getAnimeStaff: builder.query<JikanResponseStaff,number>({
      query: (id) => `/anime/${id}/staff`}),
    getAnimeEpisodes: builder.query<JikanResponseEpisodes,number>({
      query: (id) => `/anime/${id}/episodes`}),
    getAnimeVideos: builder.query<JikanResponseVideos,number>({
      query: (id) => `/anime/${id}/videos`}),
    getAnimeReviews: builder.query<JikanResponseReviews,number>({
      query: (id) => `/anime/${id}/reviews`}), 
  }),
});

export const {
  useGetTopAnimeQuery,
  useGetAnimeByIdQuery,
  useGetAnimeCharactersQuery,
  useGetAnimeStaffQuery,
  useGetAnimeEpisodesQuery,
  useGetAnimeVideosQuery,
  useGetAnimeReviewsQuery
 } = animeApi;