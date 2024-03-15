import './Banner.css'

function Banner(props){
    return(
        <header>
        <h1 className="banner-title">{props.textBanner}</h1>
        <p>Components</p>
        <img src="vite.svg" />
        </header>
    )
}

export default Banner