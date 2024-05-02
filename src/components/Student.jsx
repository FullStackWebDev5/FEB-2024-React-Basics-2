import React from 'react'

const styles = {
  studentCardStyles: { 
    border: '1px solid black', 
    borderRadius: '10px', 
    padding: '10px',
    width: 'max-content',
    margin: '10px auto'
  }
}

function Student({ fullName, email, batchNo }) {
  return (
    <div style={styles.studentCardStyles}>
      <h1>{fullName}</h1>
      <p>{email}</p>
      <p>Batch: {batchNo}</p>
    </div>
  )
}

export default Student