export const getButtonStyle = (view) =>
  view.submit?.style === 'danger' ? { danger: true } : { primary: true };
