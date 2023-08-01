const BestToolsForBusiness: React.FC = () => {
    return (
      <div>
        <h2>BEST TOOLS FOR BUSINESS</h2>
        {toolList.map((tool, index) => (
          <div key={index} className="tool-item">
            <h3>{tool.name}</h3>
            <p>
              <span className="current-price">${tool.currentPrice.toFixed(2)}</span>
              {tool.originalPrice !== tool.currentPrice && (
                <span className="original-price">${tool.originalPrice.toFixed(2)}</span>
              )}
            </p>
            <p>{tool.description}</p>
            <button>VIEW DETAILS</button>
          </div>
        ))}
      </div>
    );
  };
  
  export default BestToolsForBusiness;