
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'



export const baseApi = createApi({
    reducerPath: "baseApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }), //the main url link
    tagTypes: ['todo'],
    endpoints: (builder) => ({
        //getting data from database
        getTodos: builder.query({
            query: (priority) => {
                const params = new URLSearchParams();
                if (priority) {
                    params.append('priority', priority)
                }
                return {
                    url: `/tasks`,
                    method: "GET",
                    params: params,
                }
            },
            providesTags: ['todo']
        }),
        addTodos: builder.mutation({
            query: (data) => ({
                url: "/task",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ['todo']  //for make fetch after the action
        }),
        updateTodos: builder.mutation({
            query: (options) => ({
                url: `/task/${options.id}`,
                method: "PUT",
                body: options.data,
            }), 
            invalidatesTags: ['todo'] //for make fetch after the action
        }),
        deleteTodos: builder.mutation({
            query: (options) => ({
                url: `/task/${options.id}`,
                method: "DELETE",
                body: options.data,
            }),
            invalidatesTags: ['todo'] //for make fetch after the action
        }),
    }),
});

export const { useGetTodosQuery, useAddTodosMutation, useUpdateTodosMutation, useDeleteTodosMutation } = baseApi;