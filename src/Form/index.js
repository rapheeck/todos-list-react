import "./style.css";

const Form = () => (
<form className="form form">
    <input placeholder="Co jest do zrobienia?" className=" form__input newTask " autofocus />
    <button className="form__button">Dodaj zadanie</button>
</form>
);

export default Form;