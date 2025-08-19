import { baseApi } from "@/shared/api/baseApi";
import type {
  TContact,
  TContactType,
  TCreateContact,
  TPatchContact,
} from "../model/types";
import type { TResponses } from "@/shared/types/api";

type TResponseGetAllContacts = {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  data: TContact[];
};

type TGetAllContactsQuery = Partial<{
  page: string;
  perPage: string;
  sortBy: string;
  sortOrder: string;
  filter: {
    contactType?: TContactType;
    isFavourite?: boolean;
  };
}>;

export const contactsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllContacts: build.query<
      TResponses<TResponseGetAllContacts>,
      TGetAllContactsQuery
    >({
      query: (body) => ({
        url: "/contacts",
        params: body,
      }),
    }),
    getContactById: build.query<TContact, string>({
      query: (contactId) => `/contacts/${contactId}`,
    }),
    addContact: build.mutation<TContact, TCreateContact>({
      query: (body) => ({
        url: "/contacts",
        method: "POST",
        body,
      }),
    }),
    patchContactById: build.mutation<TContact, TPatchContact>({
      query: ({ contactId, body }) => ({
        url: `/contacts/${contactId}`,
        method: "PATCH",
        body,
      }),
    }),
    deleteContactById: build.mutation<void, string>({
      query: (contactId) => ({
        url: `/contacts/${contactId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAllContactsQuery,
  useGetContactByIdQuery,
  usePatchContactByIdMutation,
  useAddContactMutation,
  useDeleteContactByIdMutation,
} = contactsApi;
