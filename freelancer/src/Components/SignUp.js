import '../style.css';
import Label from './label';
import Input from './Input';
import Button from './button';
import logo from '../static/image/logo-social.png'

const SignUp = () => {
    return <div className="w-full h-screen largeHero flex items-center justify-center">
        <div className="w-3/5 bg-white rounded-xl container grid grid-cols-2 p-4">
            <div className="px-8 py-4 w-full h-full border-r border-gray-200">
                <Label text="Нэвтрэх нэр" htmlFor="username" />
                <Input type="text" id="username" placeholder="Нэвтрэх нэрээ оруулна уу" />
                <Label type="text" text="Мэйл" htmlFor="gmail" />
                <Input id="gmail" placeholder="Мэйлээ оруулна уу" />
                <Label text="Утасны дугаар" htmlFor="number" />
                <Input type="number" id="number" placeholder="Утасны дугаараа оруулна уу" />
                <Label text="Нууц үг" htmlFor="password" />
                <Input type="password" id="password" placeholder="Нууц үгээ оруулна уу" />
                <Input type="password" id="password" placeholder="Нууц үгээ давтан оруулна уу" />
                <Button />
            </div>
            <div className="logo">
            </div>  
        </div>
    </div>
}

export default SignUp