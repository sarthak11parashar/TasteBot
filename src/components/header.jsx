import cheflogo from './chef-claude-icon.png';

export default function header() {
    return (
        <header>
            <img className='cheflogo' src={cheflogo} alt="chef icon" />
            <h1>TasteBot</h1>
        </header>
    )
} 