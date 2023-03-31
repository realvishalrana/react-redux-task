// https://codepen.io/about7codes/pen/PobOLQV
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  endpoints: (builder) => ({
    getAll: builder.query({
      query: () => ({
        url: "posts",
        method: "GET",
      }),
    }),
    getPostById: builder.query({
      query: (id) => {
        return {
          url: `posts/${id}`,
          method: "GET",
        };
      },
    }),
    getPostByLimit: builder.query({
      query: (id) => ({
        url: `posts?_limit=${id}`,
        method: "GET",
      }),
    }),
    getListPosts: builder.query({
      query: (page = 1) => ({
        url: `posts?_page=${page}&_limit=10`,
        method: "GET",
      }),
    }),
    deletePost: builder.mutation({
      query: (id) => {
        console.log(id);
        return {
          url: `posts/${id}`,
          method: "DELETE",
        };
      },
    }),
    createPost: builder.mutation({
      query: (newPost) => {
        console.log("Create Post: ", newPost);
        return {
          url: `posts`,
          method: "POST",
          body: newPost,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
    }),
    updatePost: builder.mutation({
      query: (updatePostData) => {
        const { id, ...data } = updatePostData;
        console.log(data);
        return {
          url: `posts/${id}`,
          method: "PUT",
          body: data,
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        };
      },
    }),
  }),
});

export const {
  useGetAllQuery,
  useGetPostByIdQuery,
  useGetPostByLimitQuery,
  useDeletePostMutation,
  useCreatePostMutation,
  useUpdatePostMutation,
  useGetListPostsQuery,
} = postApi;
