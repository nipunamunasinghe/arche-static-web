import React from 'react'

const Downloads = () => {
  return (
    <section id="downloads" className="documents-section">
      <h2 className="section-title">Downloads</h2>
      <hr className="section-divider" />
      <h2 className="documents-title">Documents</h2>
      <p className="documents-subtitle">
        Please Find All Documents Related To This Project Below.
      </p>
      <div className="documents-grid">
        <div className="document-card">
          <h3 className="document-title">Topic Assessment</h3>
          <p className="document-date">Submitted On 23/02/2024</p>
          <div className="category-row">
            <span className="category-label">Group</span>
            <button className="download-button">
              Download <span className="arrow">→</span>
            </button>
          </div>
        </div>

        <div className="document-card">
          <h3 className="document-title">Final Report</h3>
          <p className="document-date">Submitted On 23/02/2024</p>
          <div className="category-row">
            <span className="category-label">Individual</span>
            <button className="download-button">
              Download <span className="arrow">→</span>
            </button>
          </div>
          <div className="category-row">
            <span className="category-label">Group</span>
            <button className="download-button">
              Download <span className="arrow">→</span>
            </button>
          </div>
        </div>

        <div className="document-card">
          <h3 className="document-title">Topic Assessment</h3>
          <p className="document-date">Submitted On 23/02/2024</p>
          <div className="category-row">
            <span className="category-label">Group</span>
            <button className="download-button">
              Download <span className="arrow">→</span>
            </button>
          </div>
        </div>

        <div className="document-card">
          <h3 className="document-title">Topic Assessment</h3>
          <p className="document-date">Submitted On 23/02/2024</p>
          <div className="category-row">
            <span className="category-label">Group</span>
            <button className="download-button">
              Download <span className="arrow">→</span>
            </button>
          </div>
        </div>

        <div className="document-card">
          <h3 className="document-title">Topic Assessment</h3>
          <p className="document-date">Submitted On 23/02/2024</p>
          <div className="category-row">
            <span className="category-label">Group</span>
            <button className="download-button">
              Download <span className="arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Downloads