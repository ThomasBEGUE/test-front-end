import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
    changeLanguage,
    selectLanguage,
} from './LanguageSlice';


function ListLanguage(props) {
    const languages = props.languages;
    const selectedLang = useSelector(selectLanguage);
    const dispatch = useDispatch();
    const [items] = useState(languages);

    return (
        <div className="input-group col-sm-3 col-md-3">
            <form>
                <select className="custom-select" 
                    id="inputGroupSelect03" 
                    onChange={e => dispatch(changeLanguage(e.currentTarget.value)) }
                    value={selectedLang}>
                    { items.map( ({name, code}) => (
                        <option 
                            key={code}
                            value={code}>{name}</option>
                    )) }
                </select>
            </form>
        </div>
    );
}


/*
function ListLanguage(props)
{
    const languages = props.languages;
    const [items] = useState(languages);

    // Find the selected value
    const selectedValue = items.filter(lang => {
        return lang.selected === true;
    });

    // Controlling the dropdown value with state and set the initial value
    const [value, setValue] = useState(selectedValue[0].code);

    return (
        <div className="input-group col-sm-3 col-md-3">
            <select className="custom-select"
                id="inputGroupSelect03"
                onChange={e => console.log(e.currentTarget.value)}>
                { items.map( ({name, code}) => (
                    <option 
                        key={code}
                        value={code}>{name}</option>
                )) }
            </select>
        </div>
    );
}
*/
export default ListLanguage;