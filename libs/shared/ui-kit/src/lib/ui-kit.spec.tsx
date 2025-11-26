import { render } from '@testing-library/react';

import PatagoniaWebFactoryUiKit from './ui-kit';

describe('PatagoniaWebFactoryUiKit', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<PatagoniaWebFactoryUiKit />);
    expect(baseElement).toBeTruthy();
  });
});
