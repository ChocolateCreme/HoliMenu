const Navbar = () => {
    return (
        <div className="Navigation">
            <h4>Have other eating restrictions? Click on the pages below based on your dietary restrictions. There you can search through each food category to find foods that meet your needs!</h4>
            <ul>
                <li id="gluten-free">Gluten Free</li>
                <li id="contains-nuts">Contains Nuts</li>
                <li id="vegan">Vegan</li>
                <li id="contains-gluten">Contains Gluten</li>
            </ul>
        </div>
    )
}

export default Navbar;