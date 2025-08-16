import { fireEvent, render } from '@testing-library/react';
import SwipeCard from '@/components/SwipeCard';

describe('SwipeCard', () => {
  it('renders text', () => {
    const { getByText } = render(
      <SwipeCard text="Hello" onDecision={() => {}} />
    );
    expect(getByText('Hello')).toBeInTheDocument();
  });

  it('calls onDecision for arrow keys', () => {
    const onDecision = jest.fn();
    render(<SwipeCard text="Test" onDecision={onDecision} />);
    fireEvent.keyDown(window, { key: 'ArrowRight' });
    expect(onDecision).toHaveBeenCalledWith('yes');
    fireEvent.keyDown(window, { key: 'ArrowLeft' });
    expect(onDecision).toHaveBeenCalledWith('no');
  });
});
