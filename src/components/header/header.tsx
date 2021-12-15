import React from "react";
import './header.scss';

interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = () => {
    const defaultValue = 'BTC-PLN';

    return (
        <header className="header">
            <select name="currency" className="header__currency" defaultValue={defaultValue}>
                <option value={defaultValue}>{defaultValue}</option>
            </select>
            <div className="header__spread">Spread:</div>
            <div className="header__range">Range</div>
        </header>
    );
}
