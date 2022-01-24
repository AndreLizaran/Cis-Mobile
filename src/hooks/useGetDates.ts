// Modules
import { useQuery } from 'react-query';

// Endpoints
import {
  getConferenciasRequest,
  getCursosRequest,
  getTalleresRequest,
} from '../endpoints/general';

export function useGetTalleres() {
  return useQuery('get-talleres', () => getTalleresRequest());
}

export function useGetConferencias() {
  return useQuery('get-conferencias', () => getConferenciasRequest(), {});
}

export function useGetCursos() {
  return useQuery('get-cursos', () => getCursosRequest());
}
