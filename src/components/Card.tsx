import React from 'react';

/**
 * Props for the Card component.
 */
interface CardProps {
  /**
   * The content to be rendered inside the card.
   */
  children: React.ReactNode;
  /**
   * Optional additional CSS classes to apply to the card for custom styling.
   */
  className?: string;
}

/**
 * A reusable Card component that provides a styled container for content.
 * It typically includes a white background, shadow, rounded corners, and padding.
 */
const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-white shadow-xl rounded-lg p-8 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
