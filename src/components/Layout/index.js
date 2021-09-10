import s from './style.module.css';
import bg from '../../assets/bg.jpeg';
const Layout = ({title, descr, anyName}) => {
return (

<section class="root">
    <div class="wrapper">
        <article>
            <div class="title">
            <img src={bg} />
                <h3>{title} </h3>
                <span class="separator"></span>
            </div>
            <div class="desc full">
                <p>{descr}</p>
            </div>
             <div class="desc full">
                        <p>{anyName}</p>
                        </div>

        </article>
    </div>
</section>

)

}

export default Layout;