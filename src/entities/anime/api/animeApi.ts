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
    getTopAnime: builder.infiniteQuery<JikanResponseList, void, number>({
      infiniteQueryOptions: {
        initialPageParam: 1 as const,
        getNextPageParam: (lastPage, allPages, lastPageParam) => {
          if (lastPage.pagination.has_next_page) {
            return lastPageParam + 1;
          }
          return undefined;
        },
      },
      query({ pageParam }) {
        return `/top/anime?page=${pageParam}`
      },
    }),
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
    getAnimeReviews: builder.query<JikanResponseReviews,{animeId: number; page: number}>({
      query: ({ animeId, page }) => ({
        url: `anime/${animeId}/reviews`,
        params: { page },
      })}), 
  }),
});

export const {
  useGetTopAnimeInfiniteQuery,
  useGetAnimeByIdQuery,
  useGetAnimeCharactersQuery,
  useGetAnimeStaffQuery,
  useGetAnimeEpisodesQuery,
  useGetAnimeVideosQuery,
  useGetAnimeReviewsQuery
 } = animeApi;