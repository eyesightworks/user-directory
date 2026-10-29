
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { User, CreateUserRequest } from "./userTypes";

const BASE_URL =
  "https://687124747ca4d06b34b97d3d.mockapi.io/api/";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BASE_URL,
  }),
  tagTypes: ["User"],
  endpoints: (builder) => ({
    getUsers: builder.query<User[], void>({
      query: () => "userId",
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({
                type: "User" as const,
                id,
              })),
              { type: "User" as const, id: "LIST" },
            ]
          : [{ type: "User" as const, id: "LIST" }],
    }),

    getUserById: builder.query<User, string>({
      query: (id) => `userId/${id}`,
      providesTags: (_result, _error, id) => [
        { type: "User", id },
      ],
    }),

    createUser: builder.mutation<User, CreateUserRequest>({
      query: (body) => ({
        url: "userId",
        method: "POST",
        body,
      }),
      invalidatesTags: [{ type: "User", id: "LIST" }],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useCreateUserMutation,
} = usersApi;
