export interface GetAllHospitalsRES {
  data: HospitalGetAllHospitals[];
  meta: MetaDataGetAllHospitals;
}
export interface GetHospitalRES {
  data: HospitalGetAllHospitals;
}

export interface HospitalGetAllHospitals {
  id: number;
  documentId: string;
  name: string;
  address: string;
  specializations: string[];
  startTime: string;
  endTime: string;
  phones: string[];
  insurance: boolean;
  emergency: boolean;
  startVisit: string;
  endVisit: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  isFeatured: boolean;
  clincs: ClinicGetAllHospitals[];
  doctors: DoctorGetAllHospitals[];
  reviews: ReviewGetAllHospitals[];
  appointments: AppointmentGetAllHospitals[];
  services: ServiceGetAllHospitals[];
  images: ImageGetAllHospitals[];
  mainImage: ImageGetAllHospitals;
}

interface ClinicGetAllHospitals {
  id: number;
  documentId: string;
  specializations: string;
  wait: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface DoctorGetAllHospitals {
  id: number;
  documentId: string;
  name: string;
  specialty: string;
  expertise: number;
  time: string;
  services: string[]; // Could be specified further if needed
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ReviewGetAllHospitals {
  id: number;
  documentId: string;
  userName: string;
  reviewed: string;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface AppointmentGetAllHospitals {
  id: number;
  documentId: string;
  idSick: string;
  time: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ServiceGetAllHospitals {
  id: number;
  documentId: string;
  name: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ImageGetAllHospitals {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: ImageFormatsGetAllHospitals;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: ProviderMetadataGetAllHospitals;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ImageFormatsGetAllHospitals {
  thumbnail: ImageDetailsGetAllHospitals;
  large: ImageDetailsGetAllHospitals;
  small: ImageDetailsGetAllHospitals;
  medium: ImageDetailsGetAllHospitals;
}

interface ImageDetailsGetAllHospitals {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
  provider_metadata: ProviderMetadataGetAllHospitals;
}

interface ProviderMetadataGetAllHospitals {
  public_id: string;
  resource_type: string;
}

interface MetaDataGetAllHospitals {
  pagination: PaginationGetAllHospitals;
}

interface PaginationGetAllHospitals {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}
//-------------
export interface HospitalGetAllDoctorsInHospital {
  data: {
    id: number;
    documentId: string;
    name: string;
    address: string;
    specializations: string[];
    startTime: string; // Consider using Date type for better handling
    endTime: string; // Consider using Date type for better handling
    phones: string[];
    insurance: boolean;
    emergency: boolean;
    startVisit: string; // Consider using Date type for better handling
    endVisit: string; // Consider using Date type for better handling
    createdAt: string; // Consider using Date type for better handling
    updatedAt: string; // Consider using Date type for better handling
    publishedAt: string; // Consider using Date type for better handling
    isFeatured: boolean;
    doctors: DoctorGetAllDoctorsInHospital[];
  };
}

export interface DoctorGetAllDoctorsInHospital {
  id: number;
  documentId: string;
  name: string;
  specialty: string;
  expertise: number; // In years or another relevant measure
  time: string; // Duration of the appointment
  services: string | null; // Adjust according to your needs
  createdAt: string; // Consider using Date type for better handling
  updatedAt: string; // Consider using Date type for better handling
  publishedAt: string; // Consider using Date type for better handling
  appointments: AppointmentGetAllDoctorsInHospital[];
  reviews: ReviewGetAllDoctorsInHospital[];
  image: DoctorImageGetAllDoctorsInHospital;
}

interface AppointmentGetAllDoctorsInHospital {
  id: number;
  documentId: string;
  idSick: string; // Identifier for the sick patient
  time: string; // Appointment time
  createdAt: string; // Consider using Date type for better handling
  updatedAt: string; // Consider using Date type for better handling
  publishedAt: string; // Consider using Date type for better handling
}

interface ReviewGetAllDoctorsInHospital {
  id: number;
  documentId: string;
  userName: string;
  reviewed: string; // Content of the review
  rating: number; // Rating value
  comment: string; // Comment text
  createdAt: string; // Consider using Date type for better handling
  updatedAt: string; // Consider using Date type for better handling
  publishedAt: string; // Consider using Date type for better handling
}

interface DoctorImageGetAllDoctorsInHospital {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: ImageFormatsGetAllDoctorsInHospital;
  hash: string;
  ext: string;
  mime: string;
  size: number; // Size in KB or another unit
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: ProviderMetadataGetAllDoctorsInHospital;
  createdAt: string; // Consider using Date type for better handling
  updatedAt: string; // Consider using Date type for better handling
  publishedAt: string; // Consider using Date type for better handling
}

interface ImageFormatsGetAllDoctorsInHospital {
  thumbnail: ImageFormatDetailsGetAllDoctorsInHospital;
  medium: ImageFormatDetailsGetAllDoctorsInHospital;
  small: ImageFormatDetailsGetAllDoctorsInHospital;
  large: ImageFormatDetailsGetAllDoctorsInHospital;
}

interface ImageFormatDetailsGetAllDoctorsInHospital {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number; // Size in KB or another unit
  url: string;
  provider_metadata: ProviderMetadataGetAllDoctorsInHospital;
}

interface ProviderMetadataGetAllDoctorsInHospital {
  public_id: string;
  resource_type: string;
}
//---------
//---------
export interface HospitalGetAllClincsInHospital {
  data: {
    id: number;
    documentId: string;
    name: string;
    address: string;
    specializations: string[];
    startTime: string;
    endTime: string;
    phones: string[];
    insurance: boolean;
    emergency: boolean;
    startVisit: string;
    endVisit: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    isFeatured: boolean;
    clincs: ClinicInHospital[];
  };
  meta: null; // Adjust this if you have a specific structure for the meta field
}

export interface ClinicInHospital {
  id: number;
  documentId: string;
  specializations: string;
  wait: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  doctors: DoctorGetAllCinlcsInHospital[];
  reviews: ReviewGetAllClincsInHospital[];
  appointments: AppointmentGetAllClincsInHospital[];
  services: ServiceGetAllClincsInHospital[];
}

interface DoctorGetAllCinlcsInHospital {
  id: number;
  documentId: string;
  name: string;
  specialty: string;
  expertise: number;
  time: string;
  services: ServiceGetAllClincsInHospital | null; // Adjust based on the structure of services inside the doctor
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ReviewGetAllClincsInHospital {
  id: number;
  documentId: string;
  userName: string;
  reviewed: string;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface AppointmentGetAllClincsInHospital {
  id: number;
  documentId: string;
  idSick: string;
  time: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ServiceGetAllClincsInHospital {
  id: number;
  documentId: string;
  name: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
//--------
export interface HospitalAllReviews {
  data: {
    id: number;
    documentId: string;
    name: string;
    address: string;
    specializations: string[];
    startTime: string;
    endTime: string;
    phones: string[];
    insurance: boolean;
    emergency: boolean;
    startVisit: string;
    endVisit: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    isFeatured: boolean;
    reviews: AllReviewsInHospital[];
  };
}

export interface AllReviewsInHospital {
  id: number;
  documentId: string;
  userName: string;
  reviewed: string;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  imageURL: string | null;
  doctor: DoctorGetAllReviewsInHospital;
  clinc: ClinicReviewInHospital;
  hospital: HospitalInfoReviewInHospital;
}

interface DoctorGetAllReviewsInHospital {
  id: number;
  documentId: string;
  name: string;
  specialty: string;
  expertise: number;
  time: string;
  services: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ClinicReviewInHospital {
  id: number;
  documentId: string;
  specializations: string;
  wait: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface HospitalInfoReviewInHospital {
  id: number;
  documentId: string;
  name: string;
  address: string;
  specializations: string[];
  startTime: string;
  endTime: string;
  phones: string[];
  insurance: boolean;
  emergency: boolean;
  startVisit: string;
  endVisit: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  isFeatured: boolean;
}
//---
//---
//---
export interface AllReviewRES {
  data: ReviewGetAllReviews[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
}

export interface ReviewGetAllReviews {
  id: number;
  documentId: string;
  userName: string;
  reviewed: string;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  imageURL: string | null;
  hospital: HospitalGetAllReviews;
  clinc: ClinicGetAllReviews;
  doctor: DoctorGetAllReviews;
  appointment: AppointmentAllReviews | null;
}

interface HospitalGetAllReviews {
  id: number;
  documentId: string;
  name: string;
  address: string;
  specializations: string[];
  startTime: string;
  endTime: string;
  phones: string[];
  insurance: boolean;
  emergency: boolean;
  startVisit: string;
  endVisit: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  isFeatured: boolean;
}

interface ClinicGetAllReviews {
  id: number;
  documentId: string;
  specializations: string;
  wait: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface DoctorGetAllReviews {
  id: number;
  documentId: string;
  name: string;
  specialty: string;
  expertise: number;
  time: string;
  services: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface AppointmentAllReviews {
  id: number;
  documentId: string;
  idSick: string;
  time: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}
//---
//---
//---
export interface GetAllDoctors {
  id: number;
  documentId: string;
  name: string;
  specialty: string;
  expertise: number;
  time: string;
  services: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: ImageGetAllDoctors;
  hospitals: HospitalGetAllDoctors[];
  appointments: AppointmentGetAllDoctors[];
  clincs: ClincGetAllDoctors[];
  reviews: ReviewGetAllDoctors[];
}

interface ImageGetAllDoctors {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: ImageFormatsGetAllDoctors;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: ProviderMetadataGetAllDoctors;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ImageFormatsGetAllDoctors {
  thumbnail: ImageFormatDetailsGetAllDoctors;
  medium?: ImageFormatDetailsGetAllDoctors;
  small?: ImageFormatDetailsGetAllDoctors;
  large?: ImageFormatDetailsGetAllDoctors;
}

interface ImageFormatDetailsGetAllDoctors {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
  provider_metadata: ProviderMetadataGetAllDoctors;
}

interface ProviderMetadataGetAllDoctors {
  public_id: string;
  resource_type: string;
}

interface HospitalGetAllDoctors {
  id: number;
  documentId: string;
  name: string;
  address: string;
  specializations: string[];
  startTime: string;
  endTime: string;
  phones: string[];
  insurance: boolean;
  emergency: boolean;
  startVisit: string;
  endVisit: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  isFeatured: boolean;
}

interface AppointmentGetAllDoctors {
  id: number;
  documentId: string;
  idSick: string;
  time: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ClincGetAllDoctors {
  id: number;
  documentId: string;
  specializations: string;
  wait: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ReviewGetAllDoctors {
  id: number;
  documentId: string;
  userName: string;
  reviewed: string;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  imageURL: string | null;
}

interface MetaGetAllDoctors {
  pagination: PaginationGetAllDoctors;
}

interface PaginationGetAllDoctors {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface GetAllDoctorsRES {
  data: GetAllDoctors[];
  meta: MetaGetAllDoctors;
}
//--
//--
//--
interface HospitalGetAllServices {
  id: number;
  documentId: string;
  name: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface PaginationGetAllServices {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface GetAllServices {
  data: HospitalGetAllServices[];
  meta: {
    pagination: PaginationGetAllServices;
  };
}
//----
interface ServiceClincsByServices {
  id: number;
  documentId: string;
  name: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  clincs: ClincClincsByServices[];
}

export interface ClincClincsByServices {
  id: number;
  documentId: string;
  specializations: string;
  wait: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  hospital: Hospital;
  appointments: Appointment[];
  reviews: Review[];
  doctors: DoctorClincsByServices[];
  services: ServiceClincsByServices[];
}

interface Hospital {
  id: number;
  documentId: string;
  name: string;
  address: string;
  specializations: string[];
  startTime: string;
  endTime: string;
  phones: string[];
  insurance: boolean;
  emergency: boolean;
  startVisit: string;
  endVisit: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  isFeatured: boolean;
}

interface Appointment {
  id: number;
  documentId: string;
  idSick: string;
  time: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface Review {
  id: number;
  documentId: string;
  userName: string;
  reviewed: string;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  imageURL: string | null;
}

interface DoctorClincsByServices {
  id: number;
  documentId: string;
  name: string;
  specialty: string;
  expertise: number;
  time: string;
  services: ServiceClincsByServices | null;
}

export interface ClincsByServices {
  data: ServiceClincsByServices;
  meta: null;
}
//----
// Define the structure for the Doctor
interface DoctorReviewsInClincRES {
  id: number;
  documentId: string;
  name: string;
  specialty: string;
  expertise: number;
  time: string;
  services: string[]; // You can specify a more specific type if known
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

// Define the structure for the Hospital
interface HospitalReviewsInClincRES {
  id: number;
  documentId: string;
  name: string;
  address: string;
  specializations: string[];
  startTime: string;
  endTime: string;
  phones: string[];
  insurance: boolean;
  emergency: boolean;
  startVisit: string;
  endVisit: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  isFeatured: boolean;
}

// Define the structure for a Review
export interface ReviewReviewsInClincRES {
  id: number;
  documentId: string;
  userName: string;
  reviewed: string;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  imageURL: string | null; // Assuming the image URL can be null
  clinc: ClinicReviewsInClincRES; // Assuming Clinic is defined below
  hospital: HospitalReviewsInClincRES;
  doctor: DoctorReviewsInClincRES;
}

// Define the structure for a Clinic
interface ClinicReviewsInClincRES {
  id: number;
  documentId: string;
  specializations: string;
  wait: string; // Assuming this is in string format
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  reviews: ReviewReviewsInClincRES[];
  hospital: HospitalReviewsInClincRES;
}

// Define the overall structure of the response
export interface ReviewsInClincRES {
  data: {
    id: number;
    documentId: string;
    specializations: string;
    wait: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    reviews: ReviewReviewsInClincRES[];
    hospital: HospitalReviewsInClincRES;
  };
  meta: Record<string, unknown>; // Assuming meta can hold any additional information
}
//--
interface ImageFormatsDoctorInClinic {
  thumbnail: ImageFormatDoctorInClinic;
  medium: ImageFormatDoctorInClinic;
  small: ImageFormatDoctorInClinic;
  large: ImageFormatDoctorInClinic;
}

interface ImageFormatDoctorInClinic {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
}

interface ImageDoctorInClinic {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: ImageFormatsDoctorInClinic;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface AppointmentDoctorInClinic {
  id: number;
  documentId: string;
  idSick: string;
  time: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ReviewDoctorInClinic {
  id: number;
  documentId: string;
  userName: string;
  reviewed: string;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  imageURL: string | null;
}

export interface DoctorDoctorInClinic {
  id: number;
  documentId: string;
  name: string;
  specialty: string;
  expertise: number;
  time: string;
  services: string[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  appointments: AppointmentDoctorInClinic[];
  reviews: ReviewDoctorInClinic[];
  image: ImageDoctorInClinic;
}

interface ClinicDoctorInClinic {
  id: number;
  documentId: string;
  specializations: string;
  wait: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  doctors: DoctorDoctorInClinic[];
}

export interface ResponseDataDoctorInClinic {
  data: ClinicDoctorInClinic;
}
//--
interface ServiceDetailsInClinic {
  id: number;
  documentId: string;
  name: string;
  description: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ClinicDetailsInClinic {
  id: number;
  documentId: string;
  specializations: string;
  wait: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  services: ServiceDetailsInClinic[];
}

export interface ResponseDataServicesInClinic {
  data: ClinicDetailsInClinic;
}
//---
//---
//---
interface DoctorappUser {
  id: number;
  documentId: string;
  name: string;
  specialty: string;
  expertise: number;
  time: string;
  services: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface HospitalappUser {
  id: number;
  documentId: string;
  name: string;
  address: string;
  specializations: string[];
  startTime: string;
  endTime: string;
  phones: string[];
  insurance: boolean;
  emergency: boolean;
  startVisit: string;
  endVisit: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  isFeatured: boolean;
}

interface ClincappUser {
  id: number;
  documentId: string;
  specializations: string;
  wait: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ReviewappUser {
  id: number;
  documentId: string;
  userName: string;
  reviewed: string;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  imageURL: string;
}

export interface AppointmentappUser {
  id: number;
  documentId: string;
  idSick: string;
  time: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  done: string;
  doctor: DoctorappUser;
  hospital: HospitalappUser;
  clinc: ClincappUser;
  review: ReviewappUser;
  name: string;
}

interface MetaPaginationappUser {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface MetaappUser {
  pagination: MetaPaginationappUser;
}

export interface AppointmentResponseappUser {
  data: AppointmentappUser[];
  meta: MetaappUser;
}
//--
interface ImageFormatsallDocPup {
  thumbnail: ImageFormatallDocPup;
  medium: ImageFormatallDocPup;
  small: ImageFormatallDocPup;
  large: ImageFormatallDocPup;
}

interface ImageFormatallDocPup {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
}

interface ImageallDocPup {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: ImageFormatsallDocPup;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface HospitalallDocPup {
  id: number;
  documentId: string;
  name: string;
  address: string;
  specializations: string[];
  startTime: string;
  endTime: string;
  phones: string[];
  insurance: boolean;
  emergency: boolean;
  startVisit: string;
  endVisit: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  isFeatured: boolean;
}

interface AppointmentallDocPup {
  id: number;
  documentId: string;
  idSick: string;
  time: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  name: string;
  done: string;
}

interface ClinicallDocPup {
  id: number;
  documentId: string;
  specializations: string;
  wait: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ReviewallDocPup {
  id: number;
  documentId: string;
  userName: string;
  reviewed: string;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  imageURL: string;
}

interface DoctorDataallDocPup {
  id: number;
  documentId: string;
  name: string;
  specialty: string;
  expertise: number;
  time: string;
  services: string | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: ImageallDocPup;
  hospitals: HospitalallDocPup[];
  appointments: AppointmentallDocPup[];
  clinics: ClinicallDocPup[];
  reviews: ReviewallDocPup[];
}

interface MetaPaginationallDocPup {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

interface MetaallDocPup {
  pagination: MetaPaginationallDocPup;
}

export interface ApiResponseallDocPup {
  data: DoctorDataallDocPup[];
  meta: MetaallDocPup;
}
//--
//--
//--
interface ImageSearchDoc {
  name: string;
  hash: string;
  ext: string;
  mime: string;
  path: string | null;
  width: number;
  height: number;
  size: number;
  sizeInBytes: number;
  url: string;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
}

interface ImageSearchDoc {
  id: number;
  documentId: string;
  name: string;
  alternativeText: string | null;
  caption: string | null;
  width: number;
  height: number;
  formats: {
    thumbnail: ImageSearchDoc;
    medium: ImageSearchDoc;
    small: ImageSearchDoc;
    large: ImageSearchDoc;
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: string | null;
  provider: string;
  provider_metadata: {
    public_id: string;
    resource_type: string;
  };
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface HospitalSearchDoc {
  id: number;
  documentId: string;
  name: string;
  address: string;
  specializations: string[];
  startTime: string;
  endTime: string;
  phones: string[];
  insurance: boolean;
  emergency: boolean;
  startVisit: string;
  endVisit: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  isFeatured: boolean;
}

interface AppointmentSearchDoc {
  id: number;
  documentId: string;
  idSick: string;
  time: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  name: string;
  done: string;
}

interface ClinicSearchDoc {
  id: number;
  documentId: string;
  specializations: string;
  wait: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface ReviewSearchDoc {
  id: number;
  documentId: string;
  userName: string;
  reviewed: string;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  imageURL: string;
}

interface DoctorDataSearchDoc {
  id: number;
  documentId: string;
  name: string;
  specialty: string;
  expertise: number;
  time: string;
  services: string[] | null;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  image: ImageSearchDoc;
  hospitals: HospitalSearchDoc[];
  appointments: AppointmentSearchDoc[];
  clincs: ClinicSearchDoc[];
  reviews: ReviewSearchDoc[];
}

export interface DoctorResponseSearchDoc {
  data: DoctorDataSearchDoc;
  meta: Record<string, unknown>;
}
//---
//---
//---
interface DoctorRevDoc {
  id: number;
  documentId: string;
  name: string;
  specialty: string;
  expertise: number;
  time: string;
  services: string[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

interface HospitalRevDoc {
  id: number;
  documentId: string;
  name: string;
  address: string;
  specializations: string[];
  startTime: string;
  endTime: string;
  phones: string[];
  insurance: boolean;
  emergency: boolean;
  startVisit: string;
  endVisit: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  isFeatured: boolean;
}

interface ClinicRevDoc {
  id: number;
  documentId: string;
  specializations: string;
  wait: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
}

export interface ReviewRevDoc {
  id: number;
  documentId: string;
  userName: string;
  reviewed: string;
  rating: number;
  comment: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  imageURL: string;
  doctor: DoctorRevDoc;
  hospital: HospitalRevDoc;
  clinc: ClinicRevDoc;
}

interface MainDataRevDoc {
  id: number;
  documentId: string;
  name: string;
  specialty: string;
  expertise: number;
  time: string;
  services: string[];
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  reviews: ReviewRevDoc[];
}

export interface ResponseRevDoc {
  data: MainDataRevDoc;
}
