function ListItem(props)
{
    return (
        <li className="nav-item">
            <a className="nav-link" href="#">{props.value}</a>
        </li>
    );
}

function ListLinks(props)
{
    const titles = props.titles;
    const listItems = titles.map((title) =>
        <ListItem key={title.toString()} value={title} />
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
        return (
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                {props.value}
            </a>
        );
    } 
    return (
        <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="#">{props.value}</a>
        </div>
    );
}

function ListLanguage(props)
{
    const languages = props.languages;
    const langItems = languages.map((lang) => 
        <ListItemLanguage key={lang.code} value={lang.name} selected={lang.selected} />
    );
    return (
        <ul className="navbar-nav my-2 my-lg-0">
            <li className="nav-item dropdown">
                {langItems}
            </li>
        </ul>
    );
}

function NavigationBar ()
{
    const titles = ["Acceuil", "Contact"];
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
