import s from './style.module.css';
import bg from '../../assets/bg.jpeg';
const Layout = (props) => {
return (

<section class="root">
    <div class="wrapper">
        <article>
            <div class="title">
            <img src={bg} />
                <h3>{props.title}</h3>
                <span class="separator"></span>
            </div>
            <div class="desc full">
                <p>{props.descr}</p>
            </div>
        </article>
    </div>
</section>

)

}

export default Layout;