import React from 'react';

export const Banner = () => {
  return (
    <div style={styles.bannerContainer}>
      <h1 style={styles.heading}>Welcome to Our Website!</h1>
      <p style={styles.paragraph}>Enjoy exploring our content and special offers.</p>
    </div>
  );
}

const styles = {
  bannerContainer: {
    backgroundColor: '#4CAF50',  
    color: 'white', 
    padding: '20px',
    textAlign: 'center',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  heading: {
    fontSize: '2rem',
    margin: '0',
  },
  paragraph: {
    fontSize: '1.2rem',
  },
};
