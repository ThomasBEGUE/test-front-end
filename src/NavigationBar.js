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

function ListItemLanguage(props)
{
    if (props.selected) {
        return null;
    } 
    return (
        <a className="dropdown-item" href="#">{props.value}</a>
    );
}

function ListItemSelectedLanguage(props)
{
    if (!props.selected) {
        return null;
    } 
    return (
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {props.value}
        </a>
    );
}

function ListLanguage(props)
{
    const languages = props.languages;
    const unselectedLangItems = languages.map((lang) => 
        <ListItemLanguage key={lang.code} value={lang.name} selected={lang.selected} />
    );
    const selectedLangItem = languages.map((lang) => 
        <ListItemSelectedLanguage key={lang.code} value={lang.name} selected={lang.selected} />
    );

    return (
        <ul className="navbar-nav my-2 my-lg-0">
            <li className="nav-item dropdown">
                {selectedLangItem}
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                    {unselectedLangItems}
                </div>
            </li>
        </ul>
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

            <div class="input-group col-sm-3 col-md-3">
                <select class="custom-select" id="inputGroupSelect03">
                    <option value="fr_FR" selected>Français</option>
                    <option value="en_GB">Anglais</option>
                </select>
            </div>

          </div>
        </div>
      </nav>
    );
}

//             <ListLanguage languages={languages} />

export default NavigationBar;
