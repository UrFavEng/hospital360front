import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  AllReviewRES,
  ApiResponseallDocPup,
  AppointmentResponseappUser,
  ClincsByServices,
  DoctorResponseSearchDoc,
  GetAllDoctorsRES,
  GetAllHospitalsRES,
  GetAllServices,
  GetHospitalRES,
  HospitalAllReviews,
  HospitalGetAllClincsInHospital,
  HospitalGetAllDoctorsInHospital,
  ResponseDataDoctorInClinic,
  ResponseDataServicesInClinic,
  ResponseRevDoc,
  ReviewsInClincRES,
} from "./types.modal";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://hospital360-strapi-production.up.railway.app/api",
  }),
  tagTypes: ["appointment", "review"],
  endpoints: (builder) => ({
    GetAllHospitals: builder.query<GetAllHospitalsRES, void>({
      query: () => `hospitals?populate=*`,
    }),

    SearchHospitals: builder.query<GetAllHospitalsRES, string>({
      query: (searchValue) =>
        `/hospitals?filters[name][$contains]=${searchValue}&populate=*`,
    }),
    GetHospital: builder.query<GetHospitalRES, string>({
      query: (id) => `/hospitals/${id}?populate=*`,
    }),
    GetAllDoctorsInHospital: builder.query<
      HospitalGetAllDoctorsInHospital,
      string
    >({
      query: (id) =>
        `/hospitals/${id}?populate=doctors.image&populate=doctors.reviews&populate=doctors.appointments`,
    }),
    GetAllClincsInHospital: builder.query<
      HospitalGetAllClincsInHospital,
      string
    >({
      query: (id) =>
        `hospitals/${id}?populate[clincs][populate][doctors]=*&populate[clincs][populate][reviews]=*&populate[clincs][populate][appointments]=*&populate[clincs][populate][services]=*`,
    }),
    GetAllReviewsInHospital: builder.query<HospitalAllReviews, string>({
      query: (id) =>
        `hospitals/${id}?populate[reviews][populate][doctor]=*&populate[reviews][populate][clinc]=*&populate[reviews][populate][hospital]=*`,
    }),
    getAllReviews: builder.query<AllReviewRES, void>({
      query: () =>
        `reviews?filters[rating][$gte]=4&sort=rating:desc&populate=*`,
    }),
    getAllDoctors: builder.query<GetAllDoctorsRES, void>({
      query: () => `doctors?populate=*`,
    }),
    GetAllHospitalsFeatured: builder.query<GetAllHospitalsRES, void>({
      query: () =>
        `hospitals?populate=*&filters[isFeatured]=true&pagination[limit]=3`,
    }),
    GetAllServices: builder.query<GetAllServices, void>({
      query: () => `services`,
    }),
    GetAllClincsByServices: builder.query<ClincsByServices, string>({
      query: (id) =>
        `services/${id}?populate[clincs][populate][hospital]=*&populate[clincs][populate][appointments]=*&populate[clincs][populate][reviews]=*&populate[clincs][populate][doctors]=*&populate[clincs][populate][services]=*`,
    }),
    GetClincWithReviews: builder.query<ReviewsInClincRES, string>({
      query: (id) =>
        `clincs/${id}?populate=reviews.doctor&populate=reviews.hospital&populate=reviews.clinc&populate=hospital`,
    }),
    GetClincWithDoctors: builder.query<ResponseDataDoctorInClinic, string>({
      query: (id) =>
        `clincs/${id}?populate=doctors.image&populate=doctors.reviews&populate=doctors.appointments`,
    }),
    GetClinicWithServices: builder.query<ResponseDataServicesInClinic, string>({
      query: (id) => `clincs/${id}?populate=services`,
    }),
    getAllAppUser: builder.query<AppointmentResponseappUser, string>({
      query: (id) => `appointments?filters[idSick][$eq]=${id}&populate=*`,
      providesTags: ["appointment"],
    }),
    getAllDocPuplic: builder.query<ApiResponseallDocPup, void>({
      query: () => `doctors?populate=*`,
    }),
    SearchDoctors: builder.query<ApiResponseallDocPup, string>({
      query: (searchValue) =>
        `doctors?filters[name][$contains]=${searchValue}&populate=*`,
    }),
    GetDoctor: builder.query<DoctorResponseSearchDoc, string>({
      query: (id) => `/doctors/${id}?populate=*`,
    }),
    GetDoctorRevs: builder.query<ResponseRevDoc, string>({
      query: (id) =>
        `doctors/${id}?populate=reviews.clinc&populate=reviews.hospital&populate=reviews.doctor`,
    }),
    addAppointment: builder.mutation({
      query: (body) => ({
        url: "appointments",
        method: "POST",
        body,
      }),
      invalidatesTags: ["appointment"],
    }),
    addReview: builder.mutation({
      query: (body) => ({
        url: "reviews",
        method: "POST",
        body,
      }),
      invalidatesTags: ["appointment"],
    }),
    editReview: builder.mutation({
      query: ({ body, id }) => ({
        url: "reviews/" + id,
        method: "PUT",
        body,
      }),
      invalidatesTags: ["appointment"],
    }),
    deleteAppointment: builder.mutation({
      query: (id) => ({
        url: "appointments/" + id,
        method: "DELETE",
      }),
      invalidatesTags: ["appointment"],
    }),
    deleteRev: builder.mutation({
      query: (id) => ({
        url: "reviews/" + id,
        method: "DELETE",
      }),
      invalidatesTags: ["appointment"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useGetAllHospitalsQuery,
  useSearchHospitalsQuery,
  useGetHospitalQuery,
  useGetAllDoctorsInHospitalQuery,
  useGetAllClincsInHospitalQuery,
  useGetAllReviewsInHospitalQuery,
  useGetAllReviewsQuery,
  useGetAllDoctorsQuery,
  useGetAllHospitalsFeaturedQuery,
  useGetAllServicesQuery,
  useGetAllClincsByServicesQuery,
  useGetClincWithReviewsQuery,
  useGetClincWithDoctorsQuery,
  useGetClinicWithServicesQuery,
  useAddAppointmentMutation,
  useGetAllAppUserQuery,
  useGetAllDocPuplicQuery,
  useSearchDoctorsQuery,
  useGetDoctorQuery,
  useGetDoctorRevsQuery,
  useDeleteAppointmentMutation,
  useAddReviewMutation,
  useEditReviewMutation,
  useDeleteRevMutation,
} = apiSlice;
