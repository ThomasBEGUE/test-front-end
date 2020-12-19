import React from 'react';
import { NavLink } from 'react-router-dom'

function ListItem(props)
{
    return (
        <li className="nav-item">
            <NavLink className="nav-link" to={props.link}>{props.name}</NavLink>
        </li>
    );
}

function ListLinks(props)
{
    const titles = props.titles;
    const listItems = titles.map((title) =>
        <ListItem key={title.name.toString()} name={title.name} link={title.link}/>
    );

    return (
        <ul className="navbar-nav mr-auto">
            {listItems}
        </ul>
    );
}

function ListLanguage(props)
{
    const languages = props.languages;
    const [items] = React.useState(languages);

    // Find the selected value
    const selectedValue = items.filter(lang => {
        return lang.selected === true;
    });

    // Controlling the dropdown value with state and set the initial value
    const [value, setValue] = React.useState(selectedValue[0].code);

    return (
        <div className="input-group col-sm-3 col-md-3">
            <select className="custom-select" id="inputGroupSelect03">
                { items.map( ({name, code}) => (
                    <option 
                        key={code}
                        value={code}
                        onChange={e => setValue(e.currentTarget.value)}>{name}</option>
                )) }
            </select>
        </div>
    );
}

function NavigationBar ()
{
    const titles = [
        {id: 1, name:"Accueil", link:"/"},
        {id: 2, name:"Contact", link:"/contact"}
    ];
    const languages = [
        {id: 1, name: "Francais", code: "fr_FR", selected: true},
        {id: 2, name: "Anglais", code: "en_GB", selected: false}
    ]
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
        <div className="container">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ListLinks titles={titles} />
            <ListLanguage languages={languages} />
          </div>
        </div>
      </nav>
    );
}

export default NavigationBar;
