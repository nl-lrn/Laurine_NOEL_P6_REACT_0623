import '../../styles/Banner.css';

function Banner({children}) {
    return (
        <section className='kasa-banner kasa-bgImgHome kasa-bgImgAbout'>
            {children}
        </section>
        
    )
};

export default Banner;