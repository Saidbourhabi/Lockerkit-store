import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageSelector() {
const { i18n } = useTranslation();

const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
};

return (
    <select className='bg-black w-min text-white' onChange={(e) => changeLanguage(e.target.value)} defaultValue={i18n.language}>
        {/* English */}
        <option value="en">🇬🇧 English</option>
        {/* Frensh  */}
        <option value="fr">🇫🇷 Frensh</option>
        {/* Moroccan Dariija  */}
        <option value="ar">🇲🇦 Arabic</option>
    </select>
);
}

export default LanguageSelector;
