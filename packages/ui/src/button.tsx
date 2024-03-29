export interface IButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: IButtonProps): JSX.Element => {
  return <button>{children}</button>;
};

Button.displayName = "Button";

export default Button;
