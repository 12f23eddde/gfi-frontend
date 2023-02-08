import React, {forwardRef, useState, useContext, useEffect} from 'react';

import {LanguageContext} from '../../contexts/LanguageContext';

import {defaultFontFamily} from '../../utils';

export const GFILangPanel = forwardRef((props, ref) => {
  const {languages, selectedLanguages, setSelectedLanguages} = useContext(LanguageContext);

  const langTags = languages ? languages : [];

  const onSelectLanguage = (s: string) => {
    setSelectedLanguages([...selectedLanguages, s])
  }

  const onUnselectLanguage = (s: string) => {
    setSelectedLanguages(selectedLanguages.filter(v => v !== s));
  }

  const renderLanguageTags = () => {
    return langTags.map((val) => {
      const selected = selectedLanguages.indexOf(val) >= 0;
      return (
        <button
          className={`gfi-rounded ${selected ? 'selected' : ''}`}
          key={val}
          onClick={() => {
            if (selected) {
              onUnselectLanguage(val)
            } else {
              onSelectLanguage(val)
            }
          }}
        >
          {val}
        </button>
      );
    });
  };

  return (
    <div
      className="gfi-wrapper kanban"
      style={{
        fontFamily: defaultFontFamily
      }}
    >
      <div className="kanban wrapper">
        <div className="gfi-wrapper tags">
          <div style={{marginBottom: '0.3rem'}}>Languages</div>
          <div className="tags wrapper" style={{marginBottom: '0.1rem'}}>
            {renderLanguageTags()}
          </div>
        </div>
      </div>
    </div>
  );
});

GFILangPanel.displayName = 'GFILangPanel';