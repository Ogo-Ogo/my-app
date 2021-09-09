import s from './style.module.css';

const Header = (props) => {
console.log('###: props', props);
return (
<header class="root">
    <div class="forest"></div>
    <div class="container">
        <h1>{props.title}</h1>
        <p>{props.descr}</p>
    </div>
</header>
)

}

export default Header;

