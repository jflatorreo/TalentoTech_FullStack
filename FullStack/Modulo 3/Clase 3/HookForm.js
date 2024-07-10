import { useForm } from 'react-hook-form';

function HookForm() {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input name="email" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
            {errors.email && "Email is required"}
            <input name="password" type="password" ref={register({ required: true, minLength: 6 })} />
            {errors.password && "Password is required and should be at least 6 characters"}
            <input type="submit" />
        </form>
    );
}