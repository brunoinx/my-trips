import { render, screen } from '@testing-library/react';
import places from 'mocks/places';
import Map from '.';

describe('<Map />', () => {
  it('should render without any marker', () => {
    render(<Map />);

    expect(
      screen.getByRole('link', {
        name: /A JavaScript library for interactive maps/i,
      }),
    ).toBeInTheDocument();
  });

  it('should render with the marker in correct place', () => {
    render(<Map places={places} />);

    expect(screen.getByTitle(/petrópolis/i)).toBeInTheDocument();
    expect(screen.getByTitle(/belém/i)).toBeInTheDocument();
  });
});
