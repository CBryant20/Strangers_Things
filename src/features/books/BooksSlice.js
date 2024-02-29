import api from "../../store/api";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => ({
        url: "/book",
        params: {
          pageSize: 20,
        },
      }),
      transformResponse: (response) => response.content,
    }),
    getBooksById: builder.query({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useGetBooksQuery, useGetBooksByIdQuery } = authApi;
