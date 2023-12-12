import { ssrNextApi } from ".";

export function getRoundsList(params = {}) {
  return ssrNextApi.fetch("rounds", params);
}

export function getRoundProjectsList(id, params = {}) {
  return ssrNextApi.fetch(`rounds/${id}/projects`, params);
}
