import { axiosInstanceWithAuth } from '../utils/axios';

export type DateType = {
  id: number;
  title: string;
  responsableName: string;
  responsableImage: string;
  bgImage: string;
  textColor: string;
  day: string;
  hour: string;
  length: number;
}[];

export type TalleresDateType = {
  talleres: {
    id: number;
    title: string;
    responsableName: string;
    responsableImage: string;
    textColor: string;
    bgImage: string;
    day: string;
    hour: string;
    length: number;
  }[];
};

export type CursosDateType = {
  cursos: {
    id: number;
    title: string;
    responsableName: string;
    responsableImage: string;
    textColor: string;
    bgImage: string;
    day: string;
    hour: string;
    length: number;
  }[];
};

export type ConferenciasDateType = {
  conferencias: {
    id: number;
    title: string;
    responsableName: string;
    responsableImage: string;
    textColor: string;
    bgImage: string;
    day: string;
    hour: string;
    length: number;
  }[];
};

export function getTalleresRequest() {
  return axiosInstanceWithAuth.get<TalleresDateType>('/talleres');
}
export function getCursosRequest() {
  return axiosInstanceWithAuth.get<CursosDateType>('/cursos');
}
export function getConferenciasRequest() {
  return axiosInstanceWithAuth.get<ConferenciasDateType>('/conferencias');
}
