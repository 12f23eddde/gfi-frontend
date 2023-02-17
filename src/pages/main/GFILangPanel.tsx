import React, {forwardRef, useState, useContext, useEffect} from 'react';

import {LanguageContext} from '../../contexts/LanguageContext';

import {defaultFontFamily} from '../../common/font';

const LANGUAGE_TAG_ALL = 'All';

export const GFILangPanel = forwardRef((props, ref) => {
  const {languages, selectedLanguages, setSelectedLanguages} = useContext(LanguageContext);

  const langTags = languages ? [...languages, LANGUAGE_TAG_ALL] : [LANGUAGE_TAG_ALL];

  const onSelectLanguage = (s: string) => {
    if (s === LANGUAGE_TAG_ALL) {
      setSelectedLanguages([])
    } else {
      setSelectedLanguages([...selectedLanguages, s])
    }
  }

  const isSelected = (s: string) => {
    if (s === LANGUAGE_TAG_ALL) {
      return selectedLanguages === [];
    } else {
      return selectedLanguages.indexOf(s) >= 0;
    }
  }

  const onUnselectLanguage = (s: string) => {
    setSelectedLanguages(selectedLanguages.filter(v => v !== s));
  }

  const renderLanguageTags = () => {
    return langTags.map((val) => {
      const selected = isSelected(val);
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