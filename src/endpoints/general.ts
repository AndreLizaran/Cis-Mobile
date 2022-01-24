import { axiosInstanceWithAuth } from '../utils/axios';

export type DateType = {
  id: number;
  title: string;
  responsableName: string;
  responsableImage: string;
  day: string;
  hour: string;
  length: number;
}[];

export function getTalleresRequest() {
  return axiosInstanceWithAuth.get<DateType>('/talleres');
}
export function getCursosRequest() {
  return axiosInstanceWithAuth.get<DateType>('/cursos');
}
export function getConferenciasRequest() {
  return axiosInstanceWithAuth.get<DateType>('/conferencias');
}
