

export const deletePortal = async (portalId: string[]) =>
  fetch(`/api/portal/${portalId.join('/')}`, {
    method: 'DELETE'
  })
