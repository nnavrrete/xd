
import { FaSignInAlt } from 'react-icons/fa';

const LoginButton = () => {
  return (
    <div className="login" style={{ justifyContent :"end"}}>
      <button className="login-button">
        <FaSignInAlt className="icon" />
        Ingresar
      </button>
    </div>
  );
};

export default LoginButton;
