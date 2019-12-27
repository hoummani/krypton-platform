export default function renderComponent(name) {
  return {
    type: 'RENDER_DASHBOARD',
    payload: name
  };
}
