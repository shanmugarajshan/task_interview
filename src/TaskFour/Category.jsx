import React, { useState } from 'react';

const CategorySelector = () => {
  const [level1, setLevel1] = useState('');
  const [level2, setLevel2] = useState('');
  const [level3, setLevel3] = useState('');
  const [level4, setLevel4] = useState('');

  // Nested category data
  const categories = [
    {
      name: 'Fasteners',
      children: [
        {
          name: 'Nuts',
          children: [
            { name: 'Knurled Check Nuts' },
            { name: 'Acorn Nuts' },
            { name: 'T-Slot Nuts' },
            { name: 'Coupling Nuts' },
            { name: 'Flange Nuts' },
            { name: 'Hex Nuts' }
          ]
        },
        {
          name: 'Screws',
          children: [
            {
              name: 'Screw Jacks',
              children: [
                { name: 'Adjustable Locating Buttons' },
                { name: 'Manual Work Supports' },
                { name: 'Through-Hole Leveling Jacks' },
                { name: 'Torque Screw Jacks' }
              ]
            }
          ]
        }
      ]
    }
  ];

  // Handle select dropdown changes
  const handleSelect = (setter) => (e) => {
    setter(e.target.value);

    if (setter === setLevel1) {
      setLevel2('');
      setLevel3('');
      setLevel4('');
    } else if (setter === setLevel2) {
      setLevel3('');
      setLevel4('');
    } else if (setter === setLevel3) {
      setLevel4('');
    }
  };

  // Get options based on previous level
  const getLevel2Options = () =>
    categories.find((c) => c.name === level1)?.children || [];

  const getLevel3Options = () =>
    getLevel2Options().find((c) => c.name === level2)?.children || [];

  const getLevel4Options = () =>
    getLevel3Options().find((c) => c.name === level3)?.children || [];

  return (
    <div className="container py-5 d-flex justify-content-center">
      <div className="card shadow p-4" style={{ width: '100%', maxWidth: '500px' }}>
        <h4 className="mb-4 text-center">Select Categories</h4>

        {/* Level 1 */}
        <div className="mb-3 text-center">
          <label className="form-label">Category 1</label>
          <div className="d-flex justify-content-center">
            <select
              className="form-select w-75"
              value={level1}
              onChange={handleSelect(setLevel1)}
            >
              <option value="">-- Select Category 1 --</option>
              {categories.map((cat) => (
                <option key={cat.name} value={cat.name}>
                  {cat.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Level 2 */}
        {level1 && (
          <div className="mb-3 text-center">
            <label className="form-label">Category 2</label>
            <div className="d-flex justify-content-center">
              <select
                className="form-select w-75"
                value={level2}
                onChange={handleSelect(setLevel2)}
              >
                <option value="">-- Select Category 2 --</option>
                {getLevel2Options().map((cat) => (
                  <option key={cat.name} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Level 3 */}
        {level2 && (
          <div className="mb-3 text-center">
            <label className="form-label">Category 3</label>
            <div className="d-flex justify-content-center">
              <select
                className="form-select w-75"
                value={level3}
                onChange={handleSelect(setLevel3)}
              >
                <option value="">-- Select Category 3 --</option>
                {getLevel3Options().map((cat) => (
                  <option key={cat.name} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Level 4 */}
        {level3 && (
          <div className="mb-3 text-center">
            <label className="form-label">Category 4</label>
            <div className="d-flex justify-content-center">
              <select
                className="form-select w-75"
                value={level4}
                onChange={handleSelect(setLevel4)}
              >
                <option value="">-- Select Category 4 --</option>
                {getLevel4Options().map((cat) => (
                  <option key={cat.name} value={cat.name}>
                    {cat.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        )}

        {/* Final Selection Summary */}
        {level4 && (
          <div className="alert alert-success mt-4 text-center">
            <strong>Selected Category:</strong>
            <br />
            {level1} &gt; {level2} &gt; {level3} &gt; {level4}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategorySelector;
