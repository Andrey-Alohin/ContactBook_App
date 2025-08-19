export type TContactType = "work" | "personal" | "home";

type TContactPhoto = {
  url: string;
};

export type TContact = {
  _id: string;
  name: string;
  phoneNumber: string;
  email: null | string;
  isFavourite: false;
  contactType: TContactType;
  photo: null | TContactPhoto;
  userId: string;
  createdAt: string;
  updatedAt: string;
};

export type TCreateContact = {
  name: string;
  phoneNumber: string;
  email?: null | string;
  isFavourite?: false;
  contactType: TContactType;
  photo?: null | TContactPhoto;
};

export type TPatchContact = {
  contactId: string;
  body: Partial<TCreateContact>;
};
